<?php
/**
 * Suspend a classroom student API
 * POST /api/classroom/students/suspend
 * 
 * Admin suspends a student account.
 * Changes status from 'approved' to 'suspended'.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('POST');
requireAdmin();

$input = getJsonInput();

// Validate required fields
$missing = validateRequired($input, ['student_id']);
if ($missing) {
    errorResponse('Missing required fields', 400, [
        'missing_fields' => $missing,
    ]);
}

$studentId = (int)$input['student_id'];

try {
    $db = Database::getInstance();
    
    // Check if student exists and is not already suspended
    $stmt = $db->prepare(''
        . 'SELECT cs.id, cs.user_id, cs.student_id, cs.full_name, cs.status, '
        . 'u.email, u.full_name as user_full_name '
        . 'FROM classroom_students cs '
        . 'JOIN users u ON cs.user_id = u.id '
        . 'WHERE cs.id = :student_id AND cs.status != "suspended"'
    );
    $stmt->execute([':student_id' => $studentId]);
    $student = $stmt->fetch();
    
    if (!$student) {
        errorResponse('Student not found or already suspended.', 404);
    }
    
    // Update student status to suspended
    $updateStmt = $db->prepare(''
        . 'UPDATE classroom_students SET '
        . 'status = "suspended", '
        . 'suspended_at = NOW(), '
        . 'rejected_at = NULL '
        . 'WHERE id = :student_id'
    );
    $updateStmt->execute([':student_id' => $studentId]);
    
    // Also update the user's status
    $userUpdate = $db->prepare(''
        . 'UPDATE users SET '
        . 'is_active = 0 '
        . 'WHERE id = :user_id'
    );
    $userUpdate->execute([':user_id' => $student['user_id']]);
    
    // Log audit
    logAudit($student['user_id'], null, 'suspend', 'student', $studentId, null, [
        'action' => 'suspend',
        'student_id' => $student['student_id'],
        'suspended_by' => 'admin',
    ]);
    
    successResponse([
        'student_id' => $studentId,
        'student_student_id' => $student['student_id'],
        'full_name' => $student['full_name'],
        'new_status' => 'suspended',
        'message' => 'Student has been suspended.',
    ], 'Student suspended successfully');
    
} catch (\Exception $e) {
    error_log('Suspend student error: ' . $e->getMessage());
    errorResponse('Failed to suspend student. Please try again.', 500);
}