<?php
/**
 * Classroom Auth Login API
 * POST /api/classroom/auth/login
 * 
 * Validates credentials and creates a classroom session.
 * Sets secure HttpOnly cookie and returns session token.
 * 
 * After login, student status is checked:
 * - pending: cannot access classroom content
 * - approved: can access classroom content
 * - rejected/suspended: cannot access
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('POST');
checkRateLimit('classroom_login_' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 5, 900);

$input = getJsonInput();

// Validate required fields
$missing = validateRequired($input, ['email', 'password']);
if ($missing) {
    errorResponse('Missing required fields', 400, [
        'missing_fields' => $missing,
    ]);
}

$email = sanitizeEmail($input['email']);
$password = $input['password'];

if (empty($email)) {
    errorResponse('Invalid email address', 400);
}

try {
    $db = Database::getInstance();
    
    // First, find the classroom student record to check status
    $stmtStudent = $db->prepare(''
        . 'SELECT cs.*, u.*, u.password_hash, u.full_name, u.name_bn, u.role, u.is_active, u.registration_status '
        . 'FROM classroom_students cs '
        . 'JOIN users u ON cs.user_id = u.id '
        . 'WHERE u.email = :email '
        . 'LIMIT 1'
    );
    $stmtStudent->execute([':email' => $email]);
    $student = $stmtStudent->fetch();
    
    if (!$student) {
        // Try finding directly in users table (for legacy or different flow)
        $stmtUser = $db->prepare(''
            . 'SELECT u.*, cs.status as student_status, cs.student_id '
            . 'FROM users u '
            . 'LEFT JOIN classroom_students cs ON u.id = cs.user_id '
            . 'WHERE u.email = :email AND u.role = "student" '
            . 'LIMIT 1'
        );
        $stmtUser->execute([':email' => $email]);
        $student = $stmtUser->fetch();
    }
    
    if (!$student) {
        logAudit(null, null, 'failed_login', 'user', null, null, ['email' => $email, 'reason' => 'user_not_found']);
        errorResponse('Invalid email or password', 401);
    }
    
    // Check if user is active
    if (!$student['is_active']) {
        logAudit($student['id'], null, 'failed_login', 'user', $student['id'], null, ['reason' => 'account_deactivated']);
        errorResponse('Account is deactivated. Contact administrator.', 403);
    }
    
    // Check classroom student status
    $studentStatus = $student['student_status'] ?? 'pending';
    
    if ($studentStatus === 'pending') {
        logAudit($student['id'], null, 'failed_login', 'user', $student['id'], null, ['reason' => 'pending_approval']);
        errorResponse('Your account is pending admin approval. Please wait.', 403);
    }
    
    if ($studentStatus === 'rejected') {
        logAudit($student['id'], null, 'failed_login', 'user', $student['id'], null, ['reason' => 'account_rejected']);
        errorResponse('Your account has been rejected. Please contact the admin or re-register.', 403);
    }
    
    if ($studentStatus === 'suspended') {
        logAudit($student['id'], null, 'failed_login', 'user', $student['id'], null, ['reason' => 'account_suspended']);
        errorResponse('Your account has been suspended. Please contact the administrator.', 403);
    }
    
    // Verify password
    if (!password_verify($password, $student['password_hash'])) {
        logAudit($student['id'], null, 'failed_login', 'user', $student['id'], null, ['reason' => 'invalid_password']);
        errorResponse('Invalid email or password', 401);
    }
    
    // Regenerate PHP session ID to prevent session fixation
    if (session_status() === PHP_SESSION_ACTIVE) {
        session_regenerate_id(true);
    }
    
    // Create session in user_sessions table (using the user_id from classroom_students)
    $token = createSession($student['id']);
    
    // Set secure HttpOnly cookie
    $cookieParams = session_get_cookie_params();
    setcookie('session_token', $token, [
        'expires' => time() + SESSION_LIFETIME,
        'path' => '/',
        'domain' => '',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    
    // Update last login
    $updateStmt = $db->prepare('UPDATE users SET last_login_at = NOW() WHERE id = :id');
    $updateStmt->execute([':id' => $student['id']]);
    
    // Log successful login
    logAudit($student['id'], null, 'login', 'user', $student['id']);
    
    // Get student progress data for dashboard
    $progressStmt = $db->prepare(''
        . 'SELECT cp.course_id, cp.progress_percentage, cp.completed_at, c.title as course_title, c.category '
        . 'FROM classroom_progress cp '
        . 'JOIN classroom_enrollments ce ON cp.enrollment_id = ce.id '
        . 'JOIN classroom_courses c ON ce.course_id = c.id '
        . 'WHERE cp.student_id = :student_id '
        . 'ORDER BY cp.last_accessed_at DESC '
        . 'LIMIT 5'
    );
    $progressStmt->execute([':student_id' => $student['id']]);
    $recentProgress = $progressStmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get enrolled courses
    $enrollmentsStmt = $db->prepare(''
        . ' ce.*, c.title as course_title, c.category, c.thumbnail_url '
        . 'FROM classroom_enrollments ce '
        . 'JOIN classroom_courses c ON ce.course_id = c.id '
        . 'WHERE ce.student_id = :student_id AND ce.status = "enrolled" '
        . 'ORDER BY ce.enrolled_at DESC'
    );
    $enrollmentsStmt->execute([':student_id' => $student['id']]);
    $enrolledCourses = $enrollmentsStmt->fetchAll(PDO::FETCH_ASSOC);
    
    successResponse([
        'token' => $token,
        'user' => [
            'id' => (int)$student['id'],
            'email' => $student['email'],
            'full_name' => $student['full_name'],
            'name_bn' => $student['name_bn'],
            'role' => 'student',
            'student_id' => $student['student_id'],
            'photo_url' => $student['photo_url'],
        ],
        'student_status' => $studentStatus,
        'dashboard' => [
            'recent_progress' => $recentProgress,
            'enrolled_courses' => $enrolledCourses,
        ],
    ], 'Login successful');
    
} catch (\Exception $e) {
    error_log('Login error: ' . $e->getMessage());
    errorResponse('Login failed. Please try again.', 500);
}