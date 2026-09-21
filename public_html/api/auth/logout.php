<?php
/**
 * Logout API
 * 
 * POST /api/auth/logout.php
 * Headers: Authorization: Bearer <token>
 * 
 * Invalidates the current session.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/middleware.php';

handleCors();
requireMethod('POST', 'GET');

$user = requireAuth();

try {
    $token = getBearerToken();
    destroySession($token);
    
    logAudit($user['id'], null, 'logout', 'user', $user['id']);
    
    successResponse(null, 'Logged out successfully');
} catch (\Exception $e) {
    error_log('Logout error: ' . $e->getMessage());
    errorResponse('Logout failed', 500);
}
