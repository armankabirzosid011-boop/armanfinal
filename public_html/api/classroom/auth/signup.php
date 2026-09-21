<?php
/**
 * Classroom Auth Signup API
 * POST /api/classroom/auth/signup
 * 
 * Creates a new classroom student account with status='pending'.
 * Admin must approve before the student can access classroom content.
 * 
 * Follows the same patterns as the existing auth/register.php
 * but for the classroom module.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('POST');
checkRateLimit('classroom_signup_' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 10, 60);

$input = getJsonInput();

// Validate required fields
$missing = validateRequired($input, ['name', 'email', 'password', 'student_id']);
if ($missing) {
    errorResponse('Missing required fields', 400, [
        'missing_fields' => $missing,
    ]);
}

$name = trim($input['name']);
$email = sanitizeEmail($input['email']);
$password = $input['password'];
$studentId = trim($input['student_id']);

// Validate email
if (empty($email)) {
    errorResponse('Invalid email address', 400);
}

// Validate password strength (minimum 8 characters for classroom)
if (strlen($password) < 8) {
    errorResponse('Password must be at least 8 characters', 400);
}

// Check if email already exists in users table
$db = Database::getInstance();
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
                registration_status = "pending",
                approved_by = NULL,
                approved_at = NULL,
                updated_at = NOW()
            WHERE id = :id
        ');
        $updateStmt->execute([
            ':password_hash' => $passwordHash,
            ':full_name' => $name,
            ':id' => $existing['id'],
        ]);
        
        // Also update or create classroom_students record
        $stmtCheck = $db->prepare('SELECT id FROM classroom_students WHERE user_id = :user_id');
        $stmtCheck->execute([':user_id' => $existing['id']]);
        if ($stmtCheck->fetchColumn()) {
            $updateStudent = $db->prepare('
                UPDATE classroom_students SET student_id = :student_id, full_name = :full_name, status = "pending", approved_date = NULL, rejected_at = NULL, suspended_at = NULL WHERE user_id = :user_id
            ');
            $updateStudent->execute([
                ':student_id' => $studentId,
                ':full_name' => $name,
                ':user_id' => $existing['id'],
            ]);
        } else {
            $insertStudent = $db->prepare('
                INSERT INTO classroom_students (user_id, student_id, full_name, email, status) 
                VALUES (:user_id, :student_id, :full_name, :email, "pending")
            ');
            $insertStudent->execute([
                ':user_id' => $existing['id'],
                ':student_id' => $studentId,
                ':full_name' => $name,
                ':email' => $email,
            ]);
        }
        
        successResponse([
            'user_id' => $existing['id'],
            'email' => $email,
            'full_name' => $name,
            'student_id' => $studentId,
            'status' => 'pending',
            'message' => 'Your account has been re-submitted for approval. Please wait for admin approval.',
        ], 'Registration updated');
    } else {
        errorResponse('This email is already registered in the system.', 409);
    }
}

// Hash password
$passwordHash = password_hash($password, PASSWORD_BCRYPT);

// Insert new user into users table with pending status
$stmt = $db->prepare('
    INSERT INTO users (email, password_hash, full_name, role, is_active, registration_status, email_verified_at)
    VALUES (:email, :password_hash, :full_name, "student", 1, "pending", NULL)
');
$stmt->execute([
    ':email' => $email,
    ':password_hash' => $passwordHash,
    ':full_name' => $name,
]);

$userId = (int)$db->lastInsertId();

// Insert into classroom_students table
$stmtStudent = $db->prepare('
    INSERT INTO classroom_students (user_id, student_id, full_name, email, status) 
    VALUES (:user_id, :student_id, :full_name, :email, "pending")
');
$stmtStudent->execute([
    ':user_id' => $userId,
    ':student_id' => $studentId,
    ':full_name' => $name,
    ':email' => $email,
]);

// Log audit
logAudit($userId, null, 'create', 'user', $userId, null, [
    'email' => $email, 
    'role' => 'student',
    'classroom_student_id' => $studentId,
    'registration_status' => 'pending'
]);

successResponse([
    'user_id' => $userId,
    'email' => $email,
    'full_name' => $name,
    'student_id' => $studentId,
    'role' => 'student',
    'status' => 'pending',
    'message' => 'Account created! Please wait for admin approval before logging in.',
], 'Registration successful');