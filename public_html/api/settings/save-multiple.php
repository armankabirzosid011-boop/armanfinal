<?php
/**
 * Settings API - Save Multiple
 * 
 * POST /api/settings/save-multiple.php
 * Headers: Authorization: Bearer <token>
 * Body: { "settings": { "clinic_name": "My Clinic", "clinic_phone": "123456789" } }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();

$input = getJsonInput();
if (!isset($input['settings']) || !is_array($input['settings']) || empty($input['settings'])) {
    errorResponse('Settings object is required', 400);
}

$settings = $input['settings'];
$saved = 0;

try {
    $db = Database::getInstance();
    $db->beginTransaction();
    
    foreach ($settings as $key => $value) {
        $key = sanitizeString($key);
        
        // Encode value as JSON if it's an array/object
        if (is_array($value) || is_object($value)) {
            $storedValue = json_encode($value, JSON_UNESCAPED_UNICODE);
        } else {
            $storedValue = $value;
        }
        
        // Check if setting exists
        $stmt = $db->prepare('SELECT id FROM site_settings WHERE setting_key = :key LIMIT 1');
        $stmt->execute([':key' => $key]);
        $existing = $stmt->fetch();
        
        if ($existing) {
            $stmt = $db->prepare('UPDATE site_settings SET setting_value = :value, updated_by = :updated_by, updated_at = NOW() WHERE setting_key = :key');
            $stmt->execute([
                ':value' => $storedValue,
                ':updated_by' => $user['id'],
                ':key' => $key,
            ]);
        } else {
            $stmt = $db->prepare('INSERT INTO site_settings (setting_key, setting_value, setting_group, updated_by, created_at, updated_at) VALUES (:key, :value, :sgroup, :updated_by, NOW(), NOW())');
            $stmt->execute([
                ':key' => $key,
                ':value' => $storedValue,
                ':sgroup' => 'general',
                ':updated_by' => $user['id'],
            ]);
        }
        
        $saved++;
    }
    
    $db->commit();
    
    successResponse([
        'saved_count' => $saved,
    ], "$saved setting(s) saved successfully");
    
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Save multiple settings error: ' . $e->getMessage());
    errorResponse('Failed to save settings', 500);
}
