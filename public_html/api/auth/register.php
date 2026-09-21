<?php
/**
 * Doctor/Staff Registration API
 * 
 * POST /api/auth/register.php
 * Body: {
 *   "email": "...",
 *   "password": "...",
 *   "full_name": "...",
 *   "name_bn": "...",
 *   "designation": "Dr.|Prof.|Mr.|Ms.|...",
 *   "degree": "...",
 *   "hospital_name": "...",
 *   "role": "doctor|nurse|reception|...",
 *   "specialization": "...",
 *   "phone": "...",
 *   "bmdc_registration": "..."
 * }
 * 
 * Creates a user account with registration_status='pending'.
 * Admin must approve before the account can log in.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';

handleCors();
requireMethod('POST');
checkRateLimit('register_' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));

$input = getJsonInput();

// Validate required fields
$missing = validateRequired($input, ['email', 'password', 'full_name']);
if ($missing) {
    errorResponse('Missing required fields', 400, [
        'missing_fields' => $missing,
    ]);
}

$email = sanitizeEmail($input['email']);
$password = $input['password'];
$fullName = trim($input['full_name']);
$nameBn = trim($input['name_bn'] ?? '');
$role = trim($input['role'] ?? 'doctor');
$specialization = trim($input['specialization'] ?? '');
$phone = sanitizePhone($input['phone'] ?? '');
$bmdcRegistration = trim($input['bmdc_registration'] ?? '');

// Validate email
if (empty($email)) {
    errorResponse('Invalid email address', 400);
}

// Validate password strength
if (strlen($password) < 6) {
    errorResponse('Password must be at least 6 characters', 400);
}

// Validate role
$allowedRoles = [
    'admin', 'consultant_doctor', 'medical_officer', 'intern_doctor',
    'nurse', 'staff', 'reception', 'doctor',
    'assistant_registrar', 'registrar',
    'assistant_professor', 'associate_professor', 'professor'
];
if (!in_array($role, $allowedRoles)) {
    errorResponse('Invalid role specified', 400);
}

try {
    $db = Database::getInstance();
    
    // Check if email already exists
    $stmt = $db->prepare('SELECT id, email, registration_status FROM users WHERE email = :email LIMIT 1');
    $stmt->execute([':email' => $email]);
    $existing = $stmt->fetch();
    
    if ($existing) {
        if ($existing['registration_status'] === 'rejected') {
            // Re-registration after rejection - update the record
            $passwordHash = password_hash($password, PASSWORD_BCRYPT);
            $updateStmt = $db->prepare('
                UPDATE users SET 
                    password_hash = :password_hash,
                    full_name = :full_name,
                    name_bn = :name_bn,
                    role = :role,
                    specialization = :specialization,
                    phone = :phone,
                    bmdc_registration = :bmdc_registration,
                    registration_status = "pending",
                    approved_by = NULL,
                    approved_at = NULL,
                    updated_at = NOW()
                WHERE id = :id
            ');
            $updateStmt->execute([
                ':password_hash' => $passwordHash,
                ':full_name' => $fullName,
                ':name_bn' => $nameBn,
                ':role' => $role,
                ':specialization' => $specialization,
                ':phone' => $phone,
                ':bmdc_registration' => $bmdcRegistration,
                ':id' => $existing['id'],
            ]);
            
            // Log audit
            logAudit(null, null, 'update', 'user', $existing['id'], 
                ['action' => 're-registration'], 
                ['email' => $email, 'role' => $role]
            );
            
            successResponse([
                'message' => 'Your account has been re-submitted for approval. Please wait for admin approval.',
                'status' => 'pending',
            ], 'Registration updated');
        }
        
        errorResponse('This email is already registered in the system.', 409);
    }
    
    // Hash password
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    
    // Insert new user with pending status
    $stmt = $db->prepare('
        INSERT INTO users (email, password_hash, full_name, name_bn, role, specialization, phone, bmdc_registration, is_active, registration_status, email_verified_at)
        VALUES (:email, :password_hash, :full_name, :name_bn, :role, :specialization, :phone, :bmdc_registration, 1, "pending", NULL)
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
    
    $userId = (int)$db->lastInsertId();
    
    // Log audit
    logAudit($userId, null, 'create', 'user', $userId, null, 
        ['email' => $email, 'role' => $role, 'registration_status' => 'pending']
    );
    
    successResponse([
        'user_id' => $userId,
        'email' => $email,
        'full_name' => $fullName,
        'role' => $role,
        'status' => 'pending',
        'message' => 'Account created! Please wait for admin approval before logging in.',
    ], 'Registration successful');
    
} catch (\Exception $e) {
    error_log('Registration error: ' . $e->getMessage());
    errorResponse('Registration failed. Please try again.', 500);
}
