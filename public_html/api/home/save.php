<?php
/**
 * Home Content Save API
 * 
 * PUT /api/home/save.php
 * 
 * Saves home page content to the database (site_settings table).
 * Requires admin authentication.
 * 
 * Request body (JSON):
 *   { "heroSection": { "heroTaglineEn": "...", ... }, 
 *     "aboutSection": { "clinicNameEn": "...", ... },
 *     "footerSection": { "addressEn": "...", ... } }
 * 
 * Response (success):
 *   { "success": true, "data": { ...saved data... }, "message": "Home content saved successfully" }
 * 
 * Response (error - not authenticated):
 *   { "success": false, "message": "Authentication required" }
 * 
 * Response (error - not authorized):
 *   { "success": false, "message": "Access denied. Insufficient permissions." }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

// Try to authenticate
$user = getAuthUser();
$userId = $user ? $user['id'] : null;

// Check if user has admin role for content management
if (!$user || !in_array($user['role'], ['admin', 'consultant_doctor', 'professor'])) {
    errorResponse('Access denied. Insufficient permissions.', 403, [
        'required_roles' => ['admin', 'consultant_doctor', 'professor'],
        'your_role' => $user ? $user['role'] : 'not authenticated',
    ]);
}

$input = getJsonInput();

// Validate input
$missing = validateRequired($input, ['heroSection', 'aboutSection', 'footerSection']);
if ($missing) {
    errorResponse('Missing required fields: ' . implode(', ', $missing), 400);
}

try {
    $db = Database::getInstance();
    $now = date('Y-m-d H:i:s');
    
    // Save hero section data
    if (isset($input['heroSection'])) {
        $heroJson = json_encode($input['heroSection'], JSON_UNESCAPED_UNICODE);
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
            ':key' => 'heroSection',
            ':value' => $heroJson,
            ':group' => 'home',
            ':desc' => 'Hero section content for landing page',
            ':user_id' => $userId,
            ':now' => $now,
        ]);
    }
    
    // Save about section data
    if (isset($input['aboutSection'])) {
        $aboutJson = json_encode($input['aboutSection'], JSON_UNESCAPED_UNICODE);
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
            ':key' => 'aboutSection',
            ':value' => $aboutJson,
            ':group' => 'home',
            ':desc' => 'About section content for landing page',
            ':user_id' => $userId,
            ':now' => $now,
        ]);
    }
    
    // Save footer section data
    if (isset($input['footerSection'])) {
        $footerJson = json_encode($input['footerSection'], JSON_UNESCAPED_UNICODE);
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
            ':key' => 'footerSection',
            ':value' => $footerJson,
            ':group' => 'home',
            ':desc' => 'Footer section content for landing page',
            ':user_id' => $userId,
            ':now' => $now,
        ]);
    }
    
    // Log the update
    if ($userId > 0) {
        logAudit($userId, null, 'update', 'home', null, null, [
            'sections_saved' => array_keys($input),
        ]);
    }
    
    // Return the saved data
    $savedData = [
        'heroSection' => $input['heroSection'] ?? [],
        'aboutSection' => $input['aboutSection'] ?? [],
        'footerSection' => $input['footerSection'] ?? [],
        'updated_at' => $now,
    ];
    
    successResponse($savedData, 'Home content saved successfully');
    
} catch (\Exception $e) {
    error_log('Home save error: ' . $e->getMessage());
    errorResponse('Failed to save home content. Server error: ' . $e->getMessage(), 500);
}
