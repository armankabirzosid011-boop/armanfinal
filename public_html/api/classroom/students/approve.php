<?php
/**
 * Approve a classroom student API
 * POST /api/classroom/students/approve
 * 
 * Admin approves a pending student account.
 * Changes status from 'pending' to 'approved'.
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
    
    // Check if student exists and is pending
    $stmt = $db->prepare(''
        . 'SELECT cs.id, cs.user_id, cs.student_id, cs.full_name, cs.status, '
        . 'u.email, u.full_name as user_full_name '
        . 'FROM classroom_students cs '
        . 'JOIN users u ON cs.user_id = u.id '
        . 'WHERE cs.id = :student_id AND cs.status = "pending"'
    );
    $stmt->execute([':student_id' => $studentId]);
    $student = $stmt->fetch();
    
    if (!$student) {
        errorResponse('Student not found or not in pending status.', 404);
    }
    
    // Update student status to approved
    $updateStmt = $db->prepare(''
        . 'UPDATE classroom_students SET '
        . 'status = "approved", '
        . 'approval_date = NOW(), '
        . 'rejected_at = NULL, '
        . 'suspended_at = NULL '
        . 'WHERE id = :student_id'
    );
    $updateStmt->execute([':student_id' => $studentId]);
    
    // Also update the user's registration_status
    $userUpdate = $db->prepare(''
        . 'UPDATE users SET '
        . 'registration_status = "approved", '
        . 'approved_by = NULL, '
        . 'approved_at = NOW(), '
        . 'is_active = 1 '
        . 'WHERE id = :user_id'
    );
    $userUpdate->execute([':user_id' => $student['user_id']]);
    
    // Log audit
    logAudit($student['user_id'], null, 'approve', 'student', $studentId, null, [
        'action' => 'approve',
        'student_id' => $student['student_id'],
        'approved_by' => 'admin',
    ]);
    
    successResponse([
        'student_id' => $studentId,
        'student_student_id' => $student['student_id'],
        'full_name' => $student['full_name'],
        'new_status' => 'approved',
        'message' => 'Student has been approved and can now access classroom content.',
    ], 'Student approved successfully');
    
} catch (\Exception $e) {
    error_log('Approve student error: ' . $e->getMessage());
    errorResponse('Failed to approve student. Please try again.', 500);
}