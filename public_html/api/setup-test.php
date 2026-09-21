<?php
/**
 * Database Setup API Handler
 * 
 * POST /api/setup-test.php
 * Used by the web-based setup wizard (setup.php)
 */

error_reporting(E_ALL);
ini_set('display_errors', '1');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$action = $input['action'] ?? '';

if (!$action) {
    echo json_encode(['success' => false, 'message' => 'No action specified']);
    exit;
}

$host = $input['host'] ?? '127.0.0.1';
$port = (int)($input['port'] ?? 3306);
$user = $input['user'] ?? '';
$pass = $input['pass'] ?? '';
$dbname = $input['dbname'] ?? 'drarmank_care';

/**
 * Test database connection
 */
function testConnection($host, $port, $user, $pass, $dbname = null) {
    try {
        $dsn = "mysql:host=$host;port=$port;charset=utf8mb4";
        if ($dbname) {
            $dsn .= ";dbname=$dbname";
        }
        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 5,
        ]);
        
        $result = ['connected' => true];
        
        // Check if database exists
        $stmt = $pdo->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = " . $pdo->quote($dbname));
        $result['db_exists'] = (bool)$stmt->fetch();
        
        if ($result['db_exists'] && $dbname) {
            $pdo->exec("USE `$dbname`");
            $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
            $result['tables'] = $tables;
            $result['table_count'] = count($tables);
        }
        
        return $result;
    } catch (Exception $e) {
        return ['connected' => false, 'error' => $e->getMessage()];
    }
}

/**
 * Run SQL migrations
 */
function runMigrations($host, $port, $user, $pass, $dbname, $fresh = false, $seed = true) {
    $output = [];
    
    try {
        $dsn = "mysql:host=$host;port=$port;charset=utf8mb4";
        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 5,
        ]);
        
        // Drop database if fresh
        if ($fresh) {
            $pdo->exec("DROP DATABASE IF EXISTS `$dbname`");
            $output[] = "✓ Dropped existing database";
        }
        
        // Create database
        $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
        $pdo->exec("USE `$dbname`");
        $output[] = "✓ Database '$dbname' ready";
        
        // Run schema - DDL statements cannot be wrapped in transactions (MySQL implicit commit)
        $schemaFile = __DIR__ . '/../../server-data/migrations/001_schema.sql';
        if (file_exists($schemaFile)) {
            $sql = file_get_contents($schemaFile);
            // Skip comment lines and split by semicolons
            $lines = explode("\n", $sql);
            $currentStmt = '';
            $count = 0;
            foreach ($lines as $line) {
                $trimmed = trim($line);
                // Skip comment lines
                if (empty($trimmed) || str_starts_with($trimmed, '--') || str_starts_with($trimmed, '#')) {
                    continue;
                }
                $currentStmt .= $line . "\n";
                if (str_ends_with(trim($line), ';')) {
                    $stmt = trim($currentStmt);
                    if (!empty($stmt)) {
                        $pdo->exec($stmt);
                        $count++;
                    }
                    $currentStmt = '';
                }
            }
            // Handle any remaining statement
            $stmt = trim($currentStmt);
            if (!empty($stmt)) {
                $pdo->exec($stmt);
                $count++;
            }
            $output[] = "✓ Schema executed ($count statements)";
        } else {
            $output[] = "⚠ Schema file not found: $schemaFile";
        }
        
        // Run seed
        if ($seed) {
            $seedFile = __DIR__ . '/../../server-data/migrations/002_seed.sql';
            if (file_exists($seedFile)) {
                $sql = file_get_contents($seedFile);
                $lines = explode("\n", $sql);
                $currentStmt = '';
                foreach ($lines as $line) {
                    $trimmed = trim($line);
                    if (empty($trimmed) || str_starts_with($trimmed, '--') || str_starts_with($trimmed, '#')) {
                        continue;
                    }
                    $currentStmt .= $line . "\n";
                    if (str_ends_with(trim($line), ';')) {
                        $stmt = trim($currentStmt);
                        if (!empty($stmt)) {
                            $pdo->exec($stmt);
                        }
                        $currentStmt = '';
                    }
                }
                $stmt = trim($currentStmt);
                if (!empty($stmt)) {
                    $pdo->exec($stmt);
                }
                $output[] = "✓ Seed data loaded";
            } else {
                $output[] = "⚠ Seed file not found: $seedFile";
            }
        }
        
        // Fix password hash - the seed file says "admin123" but the hash matches "password"
        // Let's fix it to actually match "admin123"
        $correctHash = password_hash('admin123', PASSWORD_BCRYPT);
        $stmt = $pdo->prepare("UPDATE users SET password_hash = :hash WHERE email = 'admin@drarmankabir.com'");
        $stmt->execute([':hash' => $correctHash]);
        $output[] = "✓ Fixed admin password hash (password: admin123)";
        
        // Also update other users
        $stmt = $pdo->prepare("UPDATE users SET password_hash = :hash WHERE email IN ('dr.arman@drarmankabir.com', 'nurse@drarmankabir.com', 'reception@drarmankabir.com')");
        $stmt->execute([':hash' => $correctHash]);
        $output[] = "✓ Updated all user passwords to: admin123";
        
        // Verify tables
        $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
        $output[] = "✓ " . count($tables) . " tables created: " . implode(', ', $tables);
        
        // Count users
        $userCount = $pdo->query("SELECT COUNT(*) FROM users")->fetchColumn();
        $output[] = "✓ $userCount users in database";
        
        return ['success' => true, 'message' => 'Database setup complete!', 'details' => implode("\n", $output)];
        
    } catch (Exception $e) {
        return ['success' => false, 'message' => 'Migration failed at: ' . ($stmt ?? 'unknown') . ' - Error: ' . $e->getMessage(), 'details' => implode("\n", $output)];
    }
}

/**
 * Save .env configuration
 */
function saveEnvConfig($host, $port, $user, $pass, $dbname) {
    $envPath = __DIR__ . '/../../.env';
    $jwtSecret = bin2hex(random_bytes(32));
    
    $content = "# Dr. Arman Kabir Care - Environment Configuration\n";
    $content .= "# Generated: " . date('Y-m-d H:i:s') . "\n\n";
    $content .= "# Database\n";
    $content .= "DB_HOST=$host\n";
    $content .= "DB_PORT=$port\n";
    $content .= "DB_NAME=$dbname\n";
    $content .= "DB_USER=$user\n";
    $content .= "DB_PASS=$pass\n\n";
    $content .= "# Security\n";
    $content .= "JWT_SECRET=$jwtSecret\n";
    $content .= "APP_URL=https://drarmankabir.com\n";
    
    if (file_put_contents($envPath, $content)) {
        chmod($envPath, 0600);
        return ['success' => true, 'message' => ".env file saved successfully! JWT secret generated."];
    } else {
        // Try alternative: save to config.php directly
        return saveToConfigPhp($host, $port, $user, $pass, $dbname);
    }
}

function saveToConfigPhp($host, $port, $user, $pass, $dbname) {
    $configPath = __DIR__ . '/../config.php';
    $configContent = file_get_contents($configPath);
    
    // Update DB constants
    $configContent = preg_replace(
        "/define\('DB_HOST', getenv\('DB_HOST'\) \?: '[^']*'\)/",
        "define('DB_HOST', getenv('DB_HOST') ?: '$host')",
        $configContent
    );
    $configContent = preg_replace(
        "/define\('DB_NAME', getenv\('DB_NAME'\) \?: '[^']*'\)/",
        "define('DB_NAME', getenv('DB_NAME') ?: '$dbname')",
        $configContent
    );
    $configContent = preg_replace(
        "/define\('DB_USER', getenv\('DB_USER'\) \?: '[^']*'\)/",
        "define('DB_USER', getenv('DB_USER') ?: '$user')",
        $configContent
    );
    
    // Escape single quotes in password
    $escapedPass = str_replace("'", "\\'", $pass);
    $configContent = preg_replace(
        "/define\('DB_PASS', getenv\('DB_PASS'\) \?: '[^']*'\)/",
        "define('DB_PASS', getenv('DB_PASS') ?: '$escapedPass')",
        $configContent
    );
    
    if (file_put_contents($configPath, $configContent)) {
        return ['success' => true, 'message' => "config.php updated with database credentials."];
    }
    
    return ['success' => false, 'message' => "Could not write .env or config.php. Check file permissions."];
}

// ─── Handle Actions ─────────────────────────────────────────────────────────

switch ($action) {
    case 'test':
        $result = testConnection($host, $port, $user, $pass, $dbname);
        if ($result['connected']) {
            $msg = "Connected to MySQL";
            if ($result['db_exists']) {
                $msg .= ". Database '$dbname' exists with " . ($result['table_count'] ?? 0) . " tables.";
            } else {
                $msg .= ". Database '$dbname' does not exist yet (will be created during setup).";
            }
            echo json_encode([
                'success' => true,
                'message' => $msg,
                'tables' => $result['tables'] ?? [],
                'db_exists' => $result['db_exists'] ?? false,
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Connection failed: ' . ($result['error'] ?? 'Unknown error'),
            ]);
        }
        break;
        
    case 'migrate':
        $fresh = !empty($input['fresh']);
        $seed = !empty($input['seed']);
        $result = runMigrations($host, $port, $user, $pass, $dbname, $fresh, $seed);
        echo json_encode($result);
        break;
        
    case 'saveenv':
        $result = saveEnvConfig($host, $port, $user, $pass, $dbname);
        echo json_encode($result);
        break;
        
    default:
        echo json_encode(['success' => false, 'message' => "Unknown action: $action"]);
}
