<?php
/**
 * Settings API - Get
 * 
 * GET /api/settings/get.php?key=clinic_name
 * 
 * Returns: { success: true, data: { value: "..." } }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();

$key = getParam('key', '');

try {
    $db = Database::getInstance();
    
    if ($key) {
        $stmt = $db->prepare('SELECT setting_key, setting_value, setting_group FROM site_settings WHERE setting_key = :key');
        $stmt->execute([':key' => $key]);
        $setting = $stmt->fetch();
        
        if (!$setting) {
            errorResponse('Setting not found', 404);
        }
        
        $decoded = json_decode($setting['setting_value'], true);
        successResponse([
            'value' => $decoded !== null ? $decoded : $setting['setting_value'],
        ], 'Setting retrieved');
    } else {
        $stmt = $db->query('SELECT setting_key, setting_value, setting_group FROM site_settings ORDER BY setting_group, setting_key');
        $settings = $stmt->fetchAll();
        
        $items = [];
        foreach ($settings as $s) {
            $decoded = json_decode($s['setting_value'], true);
            $items[] = [
                'key' => $s['setting_key'],
                'value' => $decoded !== null ? $decoded : $s['setting_value'],
                'group' => $s['setting_group'],
            ];
        }
        
        successResponse([
            'items' => $items,
            'total' => count($items),
        ], 'All settings retrieved');
    }
} catch (\Exception $e) {
    error_log('Get settings error: ' . $e->getMessage());
    errorResponse('Failed to fetch settings', 500);
}
