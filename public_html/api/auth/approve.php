<?php
/**
 * Approve Pending Registration API
 * 
 * POST /api/auth/approve.php
 * Headers: Authorization: Bearer <admin-token>
 * Body: { "user_id": 123, "role": "consultant_doctor" }
 * 
 * Only admins can approve pending registrations.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAdmin();

$input = getJsonInput();
$missing = validateRequired($input, ['user_id']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$targetUserId = (int)$input['user_id'];
$newRole = trim($input['role'] ?? '');

try {
    $db = Database::getInstance();
    
    // Find the pending user
    $stmt = $db->prepare('SELECT id, email, full_name, role, registration_status FROM users WHERE id = :id LIMIT 1');
    $stmt->execute([':id' => $targetUserId]);
    $targetUser = $stmt->fetch();
    
    if (!$targetUser) {
        errorResponse('User not found', 404);
    }
    
    if ($targetUser['registration_status'] !== 'pending') {
        errorResponse('User is not in pending status. Current status: ' . $targetUser['registration_status'], 400);
    }
    
    // Update role if provided
    if (!empty($newRole)) {
        $allowedRoles = [
            'admin', 'consultant_doctor', 'medical_officer', 'intern_doctor',
            'nurse', 'staff', 'reception', 'doctor',
            'assistant_registrar', 'registrar',
            'assistant_professor', 'associate_professor', 'professor'
        ];
        if (!in_array($newRole, $allowedRoles)) {
            errorResponse('Invalid role', 400);
        }
        $roleUpdate = ', role = :new_role';
    } else {
        $roleUpdate = '';
        $newRole = $targetUser['role'];
    }
    
    // Approve the user
    $sql = "UPDATE users SET 
                registration_status = 'approved',
                approved_by = :approved_by,
                approved_at = NOW()
                $roleUpdate
            WHERE id = :id";
    
    $params = [
        ':approved_by' => $user['id'],
        ':id' => $targetUserId,
    ];
    if (!empty($input['role'] ?? '')) {
        $params[':new_role'] = $newRole;
    }
    
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    
    // Log audit
    logAudit($user['id'], null, 'update', 'user', $targetUserId,
        ['registration_status' => $targetUser['registration_status'], 'role' => $targetUser['role']],
        ['registration_status' => 'approved', 'role' => $newRole, 'approved_by' => $user['id']]
    );
    
    successResponse([
        'user_id' => $targetUserId,
        'email' => $targetUser['email'],
        'full_name' => $targetUser['full_name'],
        'role' => $newRole,
        'status' => 'approved',
    ], 'Account approved successfully');
    
} catch (\Exception $e) {
    error_log('Approval error: ' . $e->getMessage());
    errorResponse('Failed to approve account', 500);
}
