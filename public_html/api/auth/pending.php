<?php
/**
 * Get Pending Registrations API
 * 
 * GET /api/auth/pending.php
 * Headers: Authorization: Bearer <admin-token>
 * 
 * Returns all users with registration_status='pending'.
 * Only admins can view pending registrations.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAdmin();

try {
    $db = Database::getInstance();
    
    $stmt = $db->query('
        SELECT id, email, full_name, name_bn, role, specialization, phone, 
               bmdc_registration, registration_status, created_at
        FROM users 
        WHERE registration_status = "pending"
        ORDER BY created_at DESC
    ');
    $pending = $stmt->fetchAll();
    
    successResponse([
        'users' => $pending,
        'total' => count($pending),
    ], 'Pending registrations retrieved');
    
} catch (\Exception $e) {
    error_log('Pending list error: ' . $e->getMessage());
    errorResponse('Failed to fetch pending registrations', 500);
}
