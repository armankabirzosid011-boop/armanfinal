<?php
/**
 * Get Single Staff / User API
 * 
 * GET /api/staff/get.php?id=1
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();
$id = (int)($_GET['id'] ?? null);

if (!$id) {
    errorResponse('User ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('SELECT id, email, full_name, name_bn, role, specialization, phone, photo_url, signature_url, bmdc_registration, is_active, created_at, updated_at FROM users WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $staff = $stmt->fetch();
    
    if (!$staff) {
        errorResponse('User not found', 404);
    }
    
    successResponse($staff, 'Staff member retrieved successfully');
    
} catch (\Exception $e) {
    error_log('Get staff error: ' . $e->getMessage());
    errorResponse('Failed to fetch staff member', 500);
}
