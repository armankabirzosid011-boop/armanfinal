<?php
/**
 * Create Staff / User API
 * 
 * POST /api/staff/create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

// Validate required fields
$missing = validateRequired($input, ['email', 'password', 'fullName', 'role']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$email = sanitizeEmail($input['email']);
if (!$email) {
    errorResponse('Invalid email address', 400);
}

// Validate password strength
$passwordError = validatePasswordStrength($input['password']);
if ($passwordError) {
    errorResponse($passwordError, 400);
}

// Validate role
$allowedRoles = ['admin', 'consultant_doctor', 'medical_officer', 'intern_doctor',
                 'nurse', 'staff', 'reception', 'doctor',
                 'assistant_registrar', 'registrar',
                 'assistant_professor', 'associate_professor', 'professor'];
$role = $input['role'];
if (!in_array($role, $allowedRoles)) {
    errorResponse('Invalid role. Allowed: ' . implode(', ', $allowedRoles), 400);
}

$fullName = sanitizeString($input['fullName']);
$nameBn = isset($input['nameBn']) ? sanitizeString($input['nameBn']) : null;
$specialization = isset($input['specialization']) ? sanitizeString($input['specialization']) : null;
$phone = isset($input['phone']) ? sanitizePhone($input['phone']) : null;
$bmdcRegistration = isset($input['bmdcRegistration']) ? sanitizeString($input['bmdcRegistration']) : null;

try {
    $db = Database::getInstance();
    
    // Check for duplicate email
    $stmt = $db->prepare('SELECT id FROM users WHERE email = :email LIMIT 1');
    $stmt->execute([':email' => $email]);
    if ($stmt->fetch()) {
        errorResponse('A user with this email already exists', 409);
    }
    
    $passwordHash = password_hash($input['password'], PASSWORD_DEFAULT);
    
    $stmt = $db->prepare('
        INSERT INTO users (email, password_hash, full_name, name_bn, role, specialization, phone, bmdc_registration, is_active)
        VALUES (:email, :password_hash, :full_name, :name_bn, :role, :specialization, :phone, :bmdc_registration, 1)
    ');
    
    $stmt->execute([
        ':email' => $email,
        ':password_hash' => $passwordHash,
        ':full_name' => $fullName,
        ':name_bn' => $nameBn,
        ':role' => $role,
        ':specialization' => $specialization,
        ':phone' => $phone,
        ':bmdc_registration' => $bmdcRegistration,
    ]);
    
    $staffId = (int)$db->lastInsertId();
    
    // Fetch created staff
    $fetchStmt = $db->prepare('SELECT id, email, full_name, name_bn, role, specialization, phone, photo_url, signature_url, bmdc_registration, is_active, created_at FROM users WHERE id = :id');
    $fetchStmt->execute([':id' => $staffId]);
    $staff = $fetchStmt->fetch();
    
    logAudit($user['id'], null, 'create', 'user', $staffId, null, $staff);
    
    successResponse($staff, 'Staff member created successfully');
    
} catch (\Exception $e) {
    error_log('Create staff error: ' . $e->getMessage());
    errorResponse('Failed to create staff member', 500);
}
