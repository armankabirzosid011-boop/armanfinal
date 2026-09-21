<?php
/**
 * Front Page Save API - MySQL Single Source of Truth
 * 
 * POST /api/frontpage/save.php
 * Saves front page content (siteConfig + doctorContentOverrides) to MySQL.
 * Returns the saved data with server-side timestamp on success.
 * 
 * Request body (JSON):
 *   { "siteConfig": { ... }, "doctorContentOverrides": { ... } }
 * 
 * Response (success):
 *   { "success": true, "data": { "siteConfig": {...}, "doctorContentOverrides": {...}, "updated_at": "..." }, "message": "..." }
 * 
 * Response (error):
 *   { "success": false, "message": "...", "errors": {...} }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

// Try to authenticate
$user = getAuthUser();
$userId = $user ? $user['id'] : null;

$input = getJsonInput();

// Extract content from input
$allContent = [];
if (isset($input['siteConfig']) || isset($input['doctorContentOverrides'])) {
    $allContent = $input;
} else {
    $allContent = $input;
}

// Validate that we have at least some content
if (empty($allContent)) {
    errorResponse('No content provided to save.', 400);
}

try {
    $db = Database::getInstance();
    $now = date('Y-m-d H:i:s');
    
    // Save siteConfig if present
    if (isset($allContent['siteConfig'])) {
        $siteConfigJson = json_encode($allContent['siteConfig'], JSON_UNESCAPED_UNICODE);
        $stmt = $db->prepare('
            INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_by, updated_at)
            VALUES (:key, :value, :group, :desc, :user_id, :now)
            ON DUPLICATE KEY UPDATE
                setting_value = VALUES(setting_value),
                setting_group = VALUES(setting_group),
                updated_by = VALUES(updated_by),
                updated_at = VALUES(updated_at)
        ');
        $stmt->execute([
            ':key' => 'siteConfig',
            ':value' => $siteConfigJson,
            ':group' => 'frontpage',
            ':desc' => 'Site configuration for landing page',
            ':user_id' => $userId,
            ':now' => $now,
        ]);
    }
    
    // Save doctorContentOverrides if present
    if (isset($allContent['doctorContentOverrides'])) {
        $overridesJson = json_encode($allContent['doctorContentOverrides'], JSON_UNESCAPED_UNICODE);
        $stmt = $db->prepare('
            INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_by, updated_at)
            VALUES (:key, :value, :group, :desc, :user_id, :now)
            ON DUPLICATE KEY UPDATE
                setting_value = VALUES(setting_value),
                setting_group = VALUES(setting_group),
                updated_by = VALUES(updated_by),
                updated_at = VALUES(updated_at)
        ');
        $stmt->execute([
            ':key' => 'doctorContentOverrides',
            ':value' => $overridesJson,
            ':group' => 'frontpage',
            ':desc' => 'Doctor content overrides for landing page',
            ':user_id' => $userId,
            ':now' => $now,
        ]);
    }
    
    // Log the update
    if ($userId > 0) {
        logAudit($userId, null, 'update', 'frontpage', null, null, [
            'keys_saved' => array_keys($allContent),
        ]);
    }
    
    // Return the saved data with server-side timestamp
    successResponse([
        'siteConfig' => $allContent['siteConfig'] ?? null,
        'doctorContentOverrides' => $allContent['doctorContentOverrides'] ?? null,
        'updated_at' => $now,
    ], 'Front page content saved successfully');
    
} catch (\Exception $e) {
    error_log('Front page save error: ' . $e->getMessage());
    errorResponse('Failed to save front page content. Server error: ' . $e->getMessage(), 500);
}
