<?php
/**
 * Update User Profile API
 * 
 * POST /api/auth/update_profile.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

try {
    $db = Database::getInstance();
    
    $updates = [];
    $params = [':id' => $user['id']];
    
    $fields = ['full_name' => 'fullName', 'name_bn' => 'nameBn', 'specialization' => 'specialization', 'phone' => 'phone'];
    foreach ($fields as $dbField => $inputKey) {
        if (isset($input[$inputKey])) {
            $value = $inputKey === 'phone' ? sanitizePhone($input[$inputKey]) : sanitizeString($input[$inputKey]);
            $updates[] = "$dbField = :$dbField";
            $params[":$dbField"] = $value ?: null;
        }
    }
    
    if (isset($input['photoUrl'])) {
        $updates[] = 'photo_url = :photo_url';
        $params[':photo_url'] = sanitizeString($input['photoUrl']);
    }
    if (isset($input['signatureUrl'])) {
        $updates[] = 'signature_url = :signature_url';
        $params[':signature_url'] = sanitizeString($input['signatureUrl']);
    }
    
    if (empty($updates)) {
        successResponse(null, 'No changes made');
        return;
    }
    
    $updates[] = 'updated_at = NOW()';
    $updateStr = implode(', ', $updates);
    
    $stmt = $db->prepare("UPDATE users SET $updateStr WHERE id = :id");
    $stmt->execute($params);
    
    // Fetch updated user
    $fetchStmt = $db->prepare('SELECT id, email, full_name, name_bn, role, specialization, phone, photo_url, signature_url, bmdc_registration, is_active, updated_at FROM users WHERE id = :id');
    $fetchStmt->execute([':id' => $user['id']]);
    $updated = $fetchStmt->fetch();
    
    successResponse($updated, 'Profile updated successfully');
    
} catch (\Exception $e) {
    error_log('Update profile error: ' . $e->getMessage());
    errorResponse('Failed to update profile', 500);
}
