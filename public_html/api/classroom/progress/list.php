<?php
/**
 * List student progress API
 * GET /api/classroom/progress
 * 
 * Lists progress for a specific student across their enrolled courses.
 * Requires authentication as the student.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('GET');
requireAuth();

$studentId = (int)($user = requireAuth())['id']; // This won't work - need to get student_id differently

// Actually, we need to get the student_id from the classroom_students table
// The user from requireAuth() gives us the user_id (from users table)
// We need to map that to classroom_students id

try {
    $db = Database::getInstance();
    
    // Get classroom student ID from user ID
    $studentStmt = $db->prepare('SELECT id, student_id FROM classroom_students WHERE user_id = :user_id');
    $studentStmt->execute([':user_id' => $studentId]);
    $classroomStudent = $studentStmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$classroomStudent) {
        errorResponse('Student profile not found.', 404);
    }
    
    // Get progress for this student across all enrollments
    $progressStmt = $db->prepare(''
        . 'SELECT ce.id as enrollment_id, ce.course_id, c.title as course_title, '
        . 'c.category, c.thumbnail_url, '
        . 'cp.progress_percentage, cp.completed, cp.last_accessed_at, cp.completed_at, '
        . 'ce.enrolled_at, ce.status as enrollment_status '
        . 'FROM classroom_enrollments ce '
        . 'JOIN classroom_courses c ON ce.course_id = c.id '
        . 'LEFT JOIN classroom_lesson_progress cp ON cp.enrollment_id = ce.id '
        . 'WHERE ce.student_id = :student_id '
        . 'ORDER BY ce.enrolled_at DESC'
    );
    $progressStmt->execute([':student_id' => $classroomStudent['id']]);
    $progress = $progressStmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get overall summary
    $summaryStmt = $db->prepare(''
        . 'SELECT '
        . 'COUNT(ce.id) as total_courses, '
        . 'SUM(CASE WHEN ce.status = "completed" THEN 1 ELSE 0 END) as completed_courses, '
        . 'AVG(cp.progress_percentage) as average_progress '
        . 'FROM classroom_enrollments ce '
        . 'LEFT JOIN classroom_lesson_progress cp ON cp.enrollment_id = ce.id '
        . 'WHERE ce.student_id = :student_id'
    );
    $summaryStmt->execute([':student_id' => $classroomStudent['id']]);
    $summary = $summaryStmt->fetch(PDO::FETCH_ASSOC);
    
    successResponse([
        'student_id' => $classroomStudent['student_id'],
        'student_name' => $classroomStudent['full_name'],
        'progress' => $progress,
        'summary' => [
            'total_courses' => (int)($summary['total_courses'] ?? 0),
            'completed_courses' => (int)($summary['completed_courses'] ?? 0),
            'average_progress' => round((float)($summary['average_progress'] ?? 0), 1),
        ],
    ], 'Student progress retrieved successfully');
    
} catch (\Exception $e) {
    error_log('List progress error: ' . $e->getMessage());
    errorResponse('Failed to retrieve progress. Please try again.', 500);
}