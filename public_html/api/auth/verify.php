<?php
/**
 * Verify Session API
 * 
 * GET /api/auth/verify.php
 * Headers: Authorization: Bearer <token>
 * 
 * Returns current user info if session is valid.
 * Used on app load to restore session.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();

// Remove sensitive data
unset($user['password_hash']);
unset($user['token']);
unset($user['expires_at']);

successResponse([
    'user' => [
        'id' => (int)$user['id'],
        'email' => $user['email'],
        'full_name' => $user['full_name'],
        'name_bn' => $user['name_bn'],
        'role' => $user['role'],
        'specialization' => $user['specialization'],
        'phone' => $user['phone'],
        'photo_url' => $user['photo_url'],
        'signature_url' => $user['signature_url'],
        'bmdc_registration' => $user['bmdc_registration'],
        'is_active' => (bool)$user['is_active'],
        'last_login_at' => $user['last_login_at'],
    ],
], 'Session valid');
