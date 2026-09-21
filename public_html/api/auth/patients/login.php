<?php
/**
 * Patient Login API
 * 
 * POST /api/auth/patients/login.php
 * Body: { "phone": "...", "password": "..." }
 * 
 * Authenticates a patient and creates a session.
 * Patient must have status='approved' to log in.
 */

require_once __DIR__ . '/../../database.php';
require_once __DIR__ . '/../../helpers.php';
require_once __DIR__ . '/../middleware.php';

handleCors();
requireMethod('POST');
checkRateLimit('patient_login_' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 5, 900);

$input = getJsonInput();

$missing = validateRequired($input, ['phone', 'password']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$phone = sanitizePhone($input['phone']);
$password = $input['password'];

if (empty($phone)) {
    errorResponse('Invalid phone number', 400);
}

try {
    $db = Database::getInstance();
    
    // Find patient login by phone
    $stmt = $db->prepare('
        SELECT pl.*, p.full_name, p.name_bn, p.gender, p.date_of_birth, p.register_number, p.photo_url
        FROM patient_login pl
        JOIN patients p ON pl.patient_id = p.id
        WHERE pl.phone = :phone
        LIMIT 1
    ');
    $stmt->execute([':phone' => $phone]);
    $patientLogin = $stmt->fetch();
    
    if (!$patientLogin) {
        logAudit(null, null, 'failed_login', 'patient', null, null, ['phone' => $phone, 'reason' => 'not_found']);
        errorResponse('No account found with this phone number.', 401);
    }
    
    // Verify password first (prevent status enumeration)
    if (!password_verify($password, $patientLogin['password_hash'])) {
        logAudit(null, null, 'failed_login', 'patient', $patientLogin['id'], null, ['reason' => 'invalid_password']);
        errorResponse('Incorrect password.', 401);
    }
    
    // Linear validation pipeline
    if ($patientLogin['status'] === 'pending') {
        logAudit(null, null, 'failed_login', 'patient', $patientLogin['id'], null, ['reason' => 'pending_approval']);
        errorResponse('Your account is pending doctor approval. Please wait.', 403);
    }
    
    if ($patientLogin['status'] === 'rejected') {
        logAudit(null, null, 'failed_login', 'patient', $patientLogin['id'], null, ['reason' => 'account_rejected']);
        errorResponse('Your account has been rejected. Please contact your doctor.', 403);
    }
    
    // Regenerate PHP session ID to prevent session fixation
    if (session_status() === PHP_SESSION_ACTIVE) {
        session_regenerate_id(true);
    }
    
    // Create session
    $token = bin2hex(random_bytes(64));
    $expiresAt = date('Y-m-d H:i:s', time() + SESSION_LIFETIME);
    
    $sessionStmt = $db->prepare('
        INSERT INTO patient_sessions (patient_login_id, token, ip_address, user_agent, expires_at)
        VALUES (:patient_login_id, :token, :ip_address, :user_agent, :expires_at)
    ');
    $sessionStmt->execute([
        ':patient_login_id' => $patientLogin['id'],
        ':token' => $token,
        ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? null,
        ':user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
        ':expires_at' => $expiresAt,
    ]);
    
    // Set secure HttpOnly cookie
    setcookie('session_token', $token, [
        'expires' => time() + SESSION_LIFETIME,
        'path' => '/',
        'domain' => '',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    
    // Update last login
    $updateStmt = $db->prepare('UPDATE patient_login SET last_login_at = NOW() WHERE id = :id');
    $updateStmt->execute([':id' => $patientLogin['id']]);
    
    // Log successful login
    logAudit(null, $patientLogin['patient_id'], 'login', 'patient', $patientLogin['id']);
    
    // Return patient info
    successResponse([
        'token' => $token,
        'patient' => [
            'id' => (string)$patientLogin['id'],
            'patient_id' => (int)$patientLogin['patient_id'],
            'phone' => $patientLogin['phone'],
            'full_name' => $patientLogin['full_name'],
            'name_bn' => $patientLogin['name_bn'],
            'gender' => $patientLogin['gender'],
            'date_of_birth' => $patientLogin['date_of_birth'],
            'register_number' => $patientLogin['register_number'],
            'photo_url' => $patientLogin['photo_url'],
            'status' => $patientLogin['status'],
        ],
    ], 'Login successful');
    
} catch (\Exception $e) {
    error_log('Patient login error: ' . $e->getMessage());
    errorResponse('Login failed. Please try again.', 500);
}
