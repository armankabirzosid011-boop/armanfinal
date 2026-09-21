<?php
/**
 * Reject a classroom student API
 * POST /api/classroom/students/reject
 * 
 * Admin rejects a pending or approved student account.
 * Changes status from 'pending' to 'rejected'.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('POST');
requireAdmin();

$input = getJsonInput();

// Validate required fields
$missing = validateRequired($input, ['student_id', 'reason']);
if ($missing) {
    errorResponse('Missing required fields', 400, [
        'missing_fields' => $missing,
    ]);
}

$studentId = (int)$input['student_id'];
$reason = trim($input['reason']);

try {
    $db = Database::getInstance();
    
    // Check if student exists
    $stmt = $db->prepare(''
        . 'SELECT cs.id, cs.user_id, cs.student_id, cs.full_name, cs.status, '
        . 'u.email, u.full_name as user_full_name '
        . 'FROM classroom_students cs '
        . 'JOIN users u ON cs.user_id = u.id '
        . 'WHERE cs.id = :student_id'
    );
    $stmt->execute([':student_id' => $studentId]);
    $student = $stmt->fetch();
    
    if (!$student) {
        errorResponse('Student not found.', 404);
    }
    
    // Update student status to rejected
    $updateStmt = $db->prepare(''
        . 'UPDATE classroom_students SET '
        . 'status = "rejected", '
        . 'rejected_at = NOW(), '
        . 'approval_date = NULL '
        . 'WHERE id = :student_id'
    );
    $updateStmt->execute([':student_id' => $studentId]);
    
    // Also update the user's registration_status
    $userUpdate = $db->prepare(''
        . 'UPDATE users SET '
        . 'registration_status = "rejected", '
        . 'is_active = 0 '
        . 'WHERE id = :user_id'
    );
    $userUpdate->execute([':user_id' => $student['user_id']]);
    
    // Log audit
    logAudit($student['user_id'], null, 'reject', 'student', $studentId, null, [
        'action' => 'reject',
        'student_id' => $student['student_id'],
        'reason' => $reason,
        'rejected_by' => 'admin',
    ]);
    
    successResponse([
        'student_id' => $studentId,
        'student_student_id' => $student['student_id'],
        'full_name' => $student['full_name'],
        'new_status' => 'rejected',
        'message' => 'Student has been rejected.',
    ], 'Student rejected successfully');
    
} catch (\Exception $e) {
    error_log('Reject student error: ' . $e->getMessage());
    errorResponse('Failed to reject student. Please try again.', 500);
}