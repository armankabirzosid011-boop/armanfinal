<?php
/**
 * Settings API - List All
 * 
 * GET /api/settings/list.php
 * Returns all site settings grouped and flattened.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();

try {
    $db = Database::getInstance();
    
    $stmt = $db->query('SELECT setting_key, setting_value, setting_group, description FROM site_settings ORDER BY setting_group, setting_key');
    $settings = $stmt->fetchAll();
    
    $items = [];
    foreach ($settings as $s) {
        $decoded = json_decode($s['setting_value'], true);
        $items[] = [
            'key' => $s['setting_key'],
            'value' => $decoded !== null ? $decoded : $s['setting_value'],
            'group' => $s['setting_group'],
            'description' => $s['description'],
        ];
    }
    
    successResponse([
        'items' => $items,
        'total' => count($items),
    ], 'Settings retrieved successfully');
    
} catch (\Exception $e) {
    error_log('List settings error: ' . $e->getMessage());
    errorResponse('Failed to fetch settings', 500);
}
