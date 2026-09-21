<?php
/**
 * API Health Check & Info
 * 
 * GET /api/info.php
 * 
 * Returns API version, database status, and server info.
 * Now requires authentication to prevent info leakage.
 */

require_once __DIR__ . '/database.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();

try {
    $db = Database::getInstance();
    $db->query('SELECT 1');
    $dbStatus = ['connected' => true, 'message' => 'OK'];
} catch (Exception $e) {
    $dbStatus = ['connected' => false, 'message' => $e->getMessage()];
}

// Get table counts
$tables = [];
try {
    $db = Database::getInstance();
    $result = $db->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    foreach ($result as $table) {
        $count = $db->query("SELECT COUNT(*) as c FROM `$table`")->fetch()['c'];
        $tables[$table] = (int)$count;
    }
} catch (Exception $e) {
    // Tables not yet created
}

$info = [
    'application' => APP_NAME,
    'version' => APP_VERSION,
    'php_version' => PHP_VERSION,
    'server' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
    'database' => $dbStatus,
    'tables' => $tables,
    'timezone' => date_default_timezone_get(),
    'server_time' => date('Y-m-d H:i:s'),
    'endpoints' => [
        'auth' => ['login', 'logout', 'verify'],
        'patients' => ['list', 'get', 'create', 'update'],
        'visits' => ['list', 'create'],
        'prescriptions' => ['list', 'create'],
        'appointments' => ['list', 'create', 'update'],
        'vitals' => ['create'],
        'payments' => ['list', 'create'],
        'clinical' => ['notes-list', 'notes-create'],
        'investigations' => ['list'],
        'staff' => ['list'],
        'settings' => ['get'],
        'audit' => ['list'],
        'upload' => ['index'],
    ],
];

successResponse($info, 'API is running');
