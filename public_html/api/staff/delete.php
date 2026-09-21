<?php
/**
 * Delete / Deactivate Staff API
 * 
 * POST /api/staff/delete.php
 * Body: { id }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$id = (int)($input['id'] ?? null);
if (!$id) {
    errorResponse('User ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('SELECT * FROM users WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    
    if (!$existing) {
        errorResponse('User not found', 404);
    }
    
    // Soft delete: deactivate user
    $stmt = $db->prepare('UPDATE users SET is_active = 0, updated_at = NOW() WHERE id = :id');
    $stmt->execute([':id' => $id]);
    
    logAudit($user['id'], null, 'delete', 'user', $id, $existing, null);
    
    successResponse(null, 'Staff member deactivated successfully');
    
} catch (\Exception $e) {
    error_log('Delete staff error: ' . $e->getMessage());
    errorResponse('Failed to deactivate staff member', 500);
}
