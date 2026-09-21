<?php
/**
 * List classroom students API
 * GET /api/classroom/students
 * 
 * Lists students with optional filtering by status.
 * Admin only.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('GET');
requireAdmin();

// Optional status filter
$status = getParam('status'); // pending, approved, rejected, suspended

try {
    $db = Database::getInstance();
    
    $query = '
        SELECT cs.id, cs.student_id, cs.full_name, cs.name_bn, cs.email, 
               cs.phone, cs.gender, cs.status, cs.approval_date, 
               cs.rejected_at, cs.suspended_at,
               u.email as user_email, u.full_name as user_full_name,
               u.role, u.is_active, u.created_at
        FROM classroom_students cs
        JOIN users u ON cs.user_id = u.id
    ';
    
    $params = [];
    
    if (!empty($status) && in_array($status, ['pending', 'approved', 'rejected', 'suspended'])) {
        $query .= ' WHERE cs.status = :status ';
        $params[':status'] = $status;
    }
    
    $query .= ' ORDER BY cs.status, cs.created_at DESC';
    
    $stmt = $db->prepare($query);
    
    // Bind parameters
    foreach ($params as $param => $value) {
        $stmt->bindValue($param, $value);
    }
    
    $stmt->execute();
    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get counts for each status
    $countStmt = $db->prepare(''
        . 'SELECT status, COUNT(*) as count '
        . 'FROM classroom_students '
        . 'GROUP BY status'
    );
    $countStmt->execute();
    $statusCounts = $countStmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Organize counts by status
    $counts = [];
    foreach ($statusCounts as $row) {
        $counts[$row['status']] = (int)$row['count'];
    }
    
    successResponse([
        'students' => $students,
        'status_counts' => $counts,
        'total' => count($students),
    ], 'Students retrieved successfully');
    
} catch (\Exception $e) {
    error_log('List students error: ' . $e->getMessage());
    errorResponse('Failed to retrieve students. Please try again.', 500);
}