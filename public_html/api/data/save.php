<?php
/**
 * Data Save API
 * 
 * POST /api/data/save.php
 * Stores arbitrary JSON data in the site_settings table.
 * 
 * Request body (JSON):
 *   { "key": "string", "value": <any JSON> }
 * 
 * Response:
 *   { "success": true, "message": "Data saved successfully" }
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

// Validate key format - alphanumeric, underscores, hyphens only
if (!preg_match('/^[a-zA-Z0-9_\-]+$/', $key)) {
    errorResponse('Invalid key format. Use alphanumeric, underscores, and hyphens.', 400);
}

// Validate key length
if (strlen($key) > 255) {
    errorResponse('Key too long (max 255 characters).', 400);
}

// Ensure value is JSON-serializable
$valueJson = json_encode($value, JSON_UNESCAPED_UNICODE);
if ($valueJson === false && $value !== null) {
    errorResponse('Value must be valid JSON.', 400);
}

try {
    $db = Database::getInstance();
    
    // Upsert: insert or update the setting
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
        ':group' => $input['group'] ?? 'app_data',
        ':user_id' => $userId,
    ]);
    
    successResponse(null, 'Data saved successfully');
} catch (\Exception $e) {
    error_log('Data save error: ' . $e->getMessage());
    errorResponse('Failed to save data', 500);
}
