<?php
/**
 * Update Staff / User API
 * 
 * POST /api/staff/update.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$id = (int)($input['id'] ?? 0);
if (!$id) {
    errorResponse('User ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    // Fetch existing user
    $stmt = $db->prepare('SELECT * FROM users WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    
    if (!$existing) {
        errorResponse('User not found', 404);
    }
    
    // Build update fields
    $updates = [];
    $params = [':id' => $id];
    
    $fields = [
        'full_name' => 'fullName',
        'name_bn' => 'nameBn',
        'specialization' => 'specialization',
        'phone' => 'phone',
        'bmdc_registration' => 'bmdcRegistration',
        'photo_url' => 'photoUrl',
        'signature_url' => 'signatureUrl',
    ];
    
    foreach ($fields as $dbField => $inputKey) {
        if (isset($input[$inputKey])) {
            if ($inputKey === 'phone') {
                $value = sanitizePhone($input[$inputKey]);
            } else {
                $value = sanitizeString($input[$inputKey]);
            }
            $updates[] = "$dbField = :$dbField";
            $params[":$dbField"] = $value ?: null;
        }
    }
    
    // Handle role update
    if (isset($input['role'])) {
        $allowedRoles = ['admin', 'consultant_doctor', 'medical_officer', 'intern_doctor',
                         'nurse', 'staff', 'reception', 'doctor',
                         'assistant_registrar', 'registrar',
                         'assistant_professor', 'associate_professor', 'professor'];
        $newRole = $input['role'];
        if (!in_array($newRole, $allowedRoles)) {
            errorResponse('Invalid role', 400);
        }
        $updates[] = 'role = :role';
        $params[':role'] = $newRole;
    }
    
    // Handle active status
    if (isset($input['isActive'])) {
        $updates[] = 'is_active = :is_active';
        $params[':is_active'] = (int)$input['isActive'];
    }
    
    if (empty($updates)) {
        errorResponse('No fields to update', 400);
    }
    
    $updates[] = 'updated_at = NOW()';
    $updateStr = implode(', ', $updates);
    
    $updateStmt = $db->prepare("UPDATE users SET $updateStr WHERE id = :id");
    $updateStmt->execute($params);
    
    // Fetch updated user
    $fetchStmt = $db->prepare('SELECT id, email, full_name, name_bn, role, specialization, phone, photo_url, signature_url, bmdc_registration, is_active, updated_at FROM users WHERE id = :id');
    $fetchStmt->execute([':id' => $id]);
    $updated = $fetchStmt->fetch();
    
    logAudit($user['id'], null, 'update', 'user', $id, $existing, $updated);
    
    successResponse($updated, 'Staff member updated successfully');
    
} catch (\Exception $e) {
    error_log('Update staff error: ' . $e->getMessage());
    errorResponse('Failed to update staff member', 500);
}
