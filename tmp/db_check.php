<?php
require_once '/home/drarmank/public_html/config.php';

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    
    echo "DB Connected OK\n";
    
    $stmt = $pdo->query("SHOW TABLES LIKE '%admin%'");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "Admin tables: " . (count($tables) ? implode(", ", $tables) : "NONE") . "\n";
    
    $stmt = $pdo->query("SELECT COUNT(*) FROM information_schema.TABLES WHERE TABLE_SCHEMA = '" . DB_NAME . "'");
    echo "Total tables: " . $stmt->fetchColumn() . "\n";
    
    // Check patients table
    $stmt = $pdo->query("SELECT COUNT(*) FROM patients");
    echo "Patients count: " . $stmt->fetchColumn() . "\n";
    
    // Check users table
    $stmt = $pdo->query("SELECT COUNT(*) FROM users");
    echo "Users count: " . $stmt->fetchColumn() . "\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
