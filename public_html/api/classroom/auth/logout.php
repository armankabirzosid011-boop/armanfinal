<?php
/**
 * Classroom Auth Logout API
 * POST /api/classroom/auth/logout
 * 
 * Destroys the session and clears the secure HttpOnly cookie.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('POST');

try {
    $db = Database::getInstance();
    
    // Get the token from the cookie or header
    $token = null;
    if (isset($_COOKIE['session_token']) && !empty($_COOKIE['session_token'])) {
        $token = $_COOKIE['session_token'];
    }
    
    // Also check Authorization header
    if (empty($token) && isset($_SERVER['HTTP_AUTHORIZATION'])) {
        if (preg_match('/Bearer\s(\S+)/', $_SERVER['HTTP_AUTHORIZATION'], $matches)) {
            $token = $matches[1];
        }
    }
    
    if ($token) {
        // Destroy session from all session tables
        $stmt = $db->prepare('DELETE FROM user_sessions WHERE token = :token');
        $stmt->execute([':token' => $token]);
        
        // Also clean patient_sessions if applicable
        $stmt = $db->prepare('DELETE FROM patient_sessions WHERE token = :token');
        $stmt->execute([':token' => $token]);
        
        // Also clean admin_sessions if applicable
        $stmt = $db->prepare('DELETE FROM admin_sessions WHERE token = :token');
        $stmt->execute([':token' => $token]);
    }
    
    // Clear the session cookie
    if (isset($_COOKIE['session_token'])) {
        setcookie('session_token', '', [
            'expires' => 1,
            'path' => '/',
            'domain' => '',
            'secure' => true,
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        unset($_COOKIE['session_token']);
    }
    
    // Log audit
    logAudit(null, null, 'logout', 'user', null);
    
    successResponse([], 'Logout successful');
    
} catch (\Exception $e) {
    error_log('Logout error: ' . $e->getMessage());
    errorResponse('Logout failed. Please try again.', 500);
}