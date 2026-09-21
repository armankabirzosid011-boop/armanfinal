<?php
/**
 * Content Get API
 * 
 * GET /api/content/get.php?key=classroom_arman
 * 
 * Retrieves stored content from the site_settings table.
 * This endpoint is public for reading content.
 * 
 * Query params:
 *   key (optional) - Specific content key. If omitted, returns all content.
 *   group (optional) - Filter by group (classroom, chamber, profile, etc.)
 * 
 * Response:
 *   { "success": true, "data": { ... } }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';

handleCors();
requireMethod('GET');

$key = getParam('key', '');
$group = getParam('group', '');

try {
    $db = Database::getInstance();
    
    if ($key) {
        // Validate key format
        if (!preg_match('/^[a-zA-Z0-9_\-\.]+$/', $key)) {
            errorResponse('Invalid key format.', 400);
        }
        
        $stmt = $db->prepare('SELECT setting_key, setting_value, setting_group, updated_at FROM site_settings WHERE setting_key = :key');
        $stmt->execute([':key' => $key]);
        $setting = $stmt->fetch();
        
        if (!$setting) {
            // Return null for missing key
            successResponse(null);
        }
        
        $decoded = json_decode($setting['setting_value'], true);
        // If the decoded value is a simple string, return it directly
        if (is_string($decoded) && $decoded === $setting['setting_value']) {
            $setting['setting_value'] = $decoded;
        } else {
            $setting['setting_value'] = $decoded;
        }
        successResponse($setting);
    } elseif ($group) {
        // Validate group format
        if (!preg_match('/^[a-zA-Z0-9_\-]+$/', $group)) {
            errorResponse('Invalid group format.', 400);
        }
        
        $stmt = $db->prepare('SELECT setting_key, setting_value, setting_group, updated_at FROM site_settings WHERE setting_group = :group ORDER BY setting_key');
        $stmt->execute([':group' => $group]);
        $settings = $stmt->fetchAll();
        
        foreach ($settings as &$s) {
            $decoded = json_decode($s['setting_value'], true);
            if (is_string($decoded) && $decoded === $s['setting_value']) {
                $s['setting_value'] = $decoded;
            } else {
                $s['setting_value'] = $decoded;
            }
        }
        
        successResponse($settings);
    } else {
        // Return all site settings (excluding sensitive ones)
        $stmt = $db->query("SELECT setting_key, setting_value, setting_group, updated_at FROM site_settings WHERE setting_group IN ('content', 'classroom', 'chamber', 'profile', 'prescription', 'frontpage', 'general', 'features', 'schedule', 'fees') ORDER BY setting_group, setting_key");
        $settings = $stmt->fetchAll();
        
        $result = [];
        foreach ($settings as $s) {
            $decoded = json_decode($s['setting_value'], true);
            if (is_string($decoded) && $decoded === $s['setting_value']) {
                $s['setting_value'] = $decoded;
            } else {
                $s['setting_value'] = $decoded;
            }
            $result[] = $s;
        }
        
        successResponse($result);
    }
} catch (\Exception $e) {
    error_log('Content get error: ' . $e->getMessage());
    errorResponse('Failed to fetch content', 500);
}
