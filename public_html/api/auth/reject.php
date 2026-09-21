<?php
/**
 * Reject Pending Registration API
 * 
 * POST /api/auth/reject.php
 * Headers: Authorization: Bearer <admin-token>
 * Body: { "user_id": 123 }
 * 
 * Only admins can reject pending registrations.
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
    
    // Reject the user
    $stmt = $db->prepare('UPDATE users SET 
        registration_status = "rejected",
        approved_by = :approved_by,
        approved_at = NOW()
    WHERE id = :id');
    $stmt->execute([
        ':approved_by' => $user['id'],
        ':id' => $targetUserId,
    ]);
    
    // Log audit
    logAudit($user['id'], null, 'update', 'user', $targetUserId,
        ['registration_status' => $targetUser['registration_status']],
        ['registration_status' => 'rejected', 'rejected_by' => $user['id']]
    );
    
    successResponse([
        'user_id' => $targetUserId,
        'email' => $targetUser['email'],
        'full_name' => $targetUser['full_name'],
        'status' => 'rejected',
    ], 'Account rejected');
    
} catch (\Exception $e) {
    error_log('Rejection error: ' . $e->getMessage());
    errorResponse('Failed to reject account', 500);
}
