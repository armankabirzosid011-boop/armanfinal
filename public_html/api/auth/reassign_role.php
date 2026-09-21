<?php
/**
 * Reassign User Role API
 * 
 * POST /api/auth/reassign_role.php
 * Headers: Authorization: Bearer <admin-token>
 * Body: { "user_id": 123, "role": "consultant_doctor" }
 * 
 * Only admins can reassign roles.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAdmin();

$input = getJsonInput();
$missing = validateRequired($input, ['user_id', 'role']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$targetUserId = (int)$input['user_id'];
$newRole = trim($input['role']);

$allowedRoles = [
    'admin', 'consultant_doctor', 'medical_officer', 'intern_doctor',
    'nurse', 'staff', 'reception', 'doctor',
    'assistant_registrar', 'registrar',
    'assistant_professor', 'associate_professor', 'professor'
];
if (!in_array($newRole, $allowedRoles)) {
    errorResponse('Invalid role', 400);
}

try {
    $db = Database::getInstance();
    
    // Find the user
    $stmt = $db->prepare('SELECT id, email, full_name, role FROM users WHERE id = :id LIMIT 1');
    $stmt->execute([':id' => $targetUserId]);
    $targetUser = $stmt->fetch();
    
    if (!$targetUser) {
        errorResponse('User not found', 404);
    }
    
    $oldRole = $targetUser['role'];
    
    // Update role
    $stmt = $db->prepare('UPDATE users SET role = :role, updated_at = NOW() WHERE id = :id');
    $stmt->execute([
        ':role' => $newRole,
        ':id' => $targetUserId,
    ]);
    
    // Log audit
    logAudit($user['id'], null, 'update', 'user', $targetUserId,
        ['role' => $oldRole],
        ['role' => $newRole]
    );
    
    successResponse([
        'user_id' => $targetUserId,
        'email' => $targetUser['email'],
        'full_name' => $targetUser['full_name'],
        'old_role' => $oldRole,
        'new_role' => $newRole,
    ], 'Role reassigned successfully');
    
} catch (\Exception $e) {
    error_log('Reassign role error: ' . $e->getMessage());
    errorResponse('Failed to reassign role', 500);
}
