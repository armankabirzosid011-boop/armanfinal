<?php
require_once '/home/drarmank/public_html/config.php';
try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4", DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_AUTOCOMMIT => false
    ]);
    
    echo "=== Migration 004: Running ===\n\n";
    
    // 1. Create admin_sessions table
    echo "[1/3] Creating admin_sessions table...\n";
    $pdo->exec("CREATE TABLE IF NOT EXISTS admin_sessions (
        id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        admin_id        BIGINT UNSIGNED NOT NULL,
        token           VARCHAR(255) NOT NULL UNIQUE,
        ip_address      VARCHAR(45) DEFAULT NULL,
        user_agent      TEXT DEFAULT NULL,
        expires_at      TIMESTAMP NOT NULL,
        last_activity   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_as_admin (admin_id),
        INDEX idx_as_token (token),
        INDEX idx_as_expires (expires_at),
        FOREIGN KEY (admin_id) REFERENCES admin_accounts(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;");
    echo "  DONE\n\n";
    
    // 2. Fix audit_logs.action ENUM -> VARCHAR(50)
    echo "[2/3] Fixing audit_logs.action type (ENUM -> VARCHAR(50))...\n";
    $pdo->exec("ALTER TABLE audit_logs MODIFY COLUMN action VARCHAR(50) NOT NULL;");
    echo "  DONE\n\n";
    
    // 3. Add registration fields to users table
    echo "[3/3] Adding registration fields to users...\n";
    $stmt = $pdo->query("SHOW COLUMNS FROM users LIKE 'designation'");
    if (!$stmt->fetch()) {
        $pdo->exec("ALTER TABLE users ADD COLUMN designation VARCHAR(100) DEFAULT NULL AFTER full_name;");
        echo "  Added 'designation'\n";
    } else {
        echo "  'designation' already exists, skipped\n";
    }
    
    $stmt = $pdo->query("SHOW COLUMNS FROM users LIKE 'degree'");
    if (!$stmt->fetch()) {
        $pdo->exec("ALTER TABLE users ADD COLUMN degree VARCHAR(255) DEFAULT NULL AFTER specialization;");
        echo "  Added 'degree'\n";
    } else {
        echo "  'degree' already exists, skipped\n";
    }
    
    $stmt = $pdo->query("SHOW COLUMNS FROM users LIKE 'hospital_name'");
    if (!$stmt->fetch()) {
        $pdo->exec("ALTER TABLE users ADD COLUMN hospital_name VARCHAR(255) DEFAULT NULL AFTER degree;");
        echo "  Added 'hospital_name'\n";
    } else {
        echo "  'hospital_name' already exists, skipped\n";
    }
    echo "  DONE\n\n";
    
    $pdo->commit();
    echo "=== Migration 004: COMPLETE ===\n";
    
} catch (Exception $e) {
    if (isset($pdo) && $pdo->inTransaction()) $pdo->rollBack();
    echo "Error: " . $e->getMessage() . "\n";
}
