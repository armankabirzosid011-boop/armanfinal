<?php
/**
 * Data Get API
 * 
 * GET /api/data/get.php?key=siteConfig
 * 
 * Retrieves stored JSON data from the site_settings table.
 * 
 * Query params:
 *   key (optional) - Specific setting key to retrieve. If omitted, returns all.
 * 
 * Response:
 *   { "success": true, "data": { ... } }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('GET');

$key = getParam('key', '');
try {
    $db = Database::getInstance();
    
    if ($key) {
        // Validate key format
        if (!preg_match('/^[a-zA-Z0-9_\-]+$/', $key)) {
            errorResponse('Invalid key format.', 400);
        }
        
        $stmt = $db->prepare('SELECT setting_key, setting_value, setting_group, updated_at FROM site_settings WHERE setting_key = :key');
        $stmt->execute([':key' => $key]);
        $setting = $stmt->fetch();
        
        if (!$setting) {
            successResponse(['setting_key' => $key, 'setting_value' => null, 'setting_group' => '', 'updated_at' => null]);
            exit;
        }
        
        $setting['setting_value'] = json_decode($setting['setting_value'], true);
        successResponse($setting);
    } else {
        $stmt = $db->query('SELECT setting_key, setting_value, setting_group, updated_at FROM site_settings WHERE setting_group = \'app_data\' ORDER BY setting_key');
        $settings = $stmt->fetchAll();
        
        foreach ($settings as &$s) {
            $s['setting_value'] = json_decode($s['setting_value'], true);
        }
        
        successResponse($settings);
    }
} catch (\Exception $e) {
    error_log('Data get error: ' . $e->getMessage());
    errorResponse('Failed to fetch data', 500);
}
