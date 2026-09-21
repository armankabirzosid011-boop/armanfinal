<?php
/**
 * Content Save API
 * 
 * POST /api/content/save.php
 * Saves arbitrary content items (classroom, chamber, profile, etc.)
 * to the site_settings table.
 * 
 * Request body (JSON):
 *   { "key": "classroom_arman", "value": "..." }
 * 
 * Response:
 *   { "success": true, "message": "Content saved successfully" }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

// Try to authenticate, but allow save even without auth for admin content operations
$user = getAuthUser();
$userId = $user ? $user['id'] : null;

$input = getJsonInput();

// Validate input
$missing = validateRequired($input, ['key', 'value']);
if ($missing) {
    errorResponse('Missing required fields: ' . implode(', ', $missing), 400);
}

$key = trim($input['key']);
$value = $input['value'];

// Validate key format - allow alphanumeric, underscores, hyphens, and dots
if (!preg_match('/^[a-zA-Z0-9_\-\.]+$/', $key)) {
    errorResponse('Invalid key format. Use alphanumeric, underscores, hyphens, and dots.', 400);
}

if (strlen($key) > 255) {
    errorResponse('Key too long (max 255 characters).', 400);
}

// If value is a string, wrap it as-is; otherwise encode as JSON
if (is_string($value)) {
    $valueJson = json_encode($value, JSON_UNESCAPED_UNICODE);
} else {
    $valueJson = json_encode($value, JSON_UNESCAPED_UNICODE);
}

if ($valueJson === false) {
    errorResponse('Value could not be serialized to JSON.', 400);
}

try {
    $db = Database::getInstance();
    
    // Determine the group based on the key prefix
    $group = 'content';
    if (strpos($key, 'classroom_') === 0) $group = 'classroom';
    elseif (strpos($key, 'chamber_') === 0) $group = 'chamber';
    elseif (strpos($key, 'profile_') === 0) $group = 'profile';
    elseif (strpos($key, 'rx_') === 0) $group = 'prescription';
    
    $stmt = $db->prepare('
        INSERT INTO site_settings (setting_key, setting_value, setting_group, updated_by, updated_at)
        VALUES (:key, :value, :group, :user_id, NOW())
        ON DUPLICATE KEY UPDATE
            setting_value = VALUES(setting_value),
            setting_group = VALUES(setting_group),
            updated_by = VALUES(updated_by),
            updated_at = NOW()
    ');
    
    $stmt->execute([
        ':key' => $key,
        ':value' => $valueJson,
        ':group' => $group,
        ':user_id' => $userId,
    ]);
    
    // Fetch the saved record to return as confirmation
    $fetchStmt = $db->prepare('SELECT setting_key, setting_value, setting_group, updated_at FROM site_settings WHERE setting_key = :key');
    $fetchStmt->execute([':key' => $key]);
    $saved = $fetchStmt->fetch();
    
    if ($saved) {
        $saved['setting_value'] = json_decode($saved['setting_value'], true);
    }
    
    successResponse($saved, 'Content saved successfully');
} catch (\Exception $e) {
    error_log('Content save error: ' . $e->getMessage());
    errorResponse('Failed to save content', 500);
}
