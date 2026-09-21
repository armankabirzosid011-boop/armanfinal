<?php
/**
 * List classroom announcements API
 * GET /api/classroom/announcements
 * 
 * Lists announcements for a specific course or all courses.
 * Publicly accessible for published courses.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('GET');

$courseId = getParam('course_id'); // Optional - if specified, only show course announcements
$page = max(1, (int)getParam('page', 1));
$limit = min(50, max(1, (int)getParam('limit', 10)));
$offset = ($page - 1) * $limit;
$onlyActive = getParam('only_active') === 'true';

try {
    $db = Database::getInstance();
    
    $countQuery = '
        SELECT COUNT(*) as total
        FROM classroom_announcements
    ';
    $listQuery = '
        SELECT id, course_id, title, content, content_bn, is_pinned, is_active, created_at
        FROM classroom_announcements
    ';
    
    $countParams = [];
    $listParams = [];
    
    // Apply filters
    if (!empty($courseId)) {
        $courseId = (int)$courseId;
        $countQuery .= ' WHERE course_id = :course_id';
        $listQuery .= ' WHERE course_id = :course_id';
        $countParams[':course_id'] = $courseId;
        $listParams[':course_id'] = $courseId;
    }
    
    if (!empty($onlyActive)) {
        if (!empty($courseId)) {
            $countQuery .= ' AND ';
            $listQuery .= ' AND ';
        } else {
            $countQuery .= ' WHERE ';
            $listQuery .= ' WHERE ';
        }
        $countQuery .= ' is_active = 1';
        $listQuery .= ' IS_ACTIVE_PLACEHOLDER';
        $listParams[':is_active'] = 1;
    }
    
    $listQuery .= ' ORDER BY is_pinned DESC, created_at DESC LIMIT :limit OFFSET :offset';
    $listParams[':limit'] = $limit;
    $listParams[':offset'] = $offset;
    
    // Execute count query
    $countStmt = $db->prepare($countQuery);
    foreach ($countParams as $param => $value) {
        $countStmt->bindValue($param, $value);
    }
    $countStmt->execute();
    $total = (int)$countStmt->fetchColumn();
    
    // Execute list query
    $listQuery = str_replace('IS_ACTIVE_PLACEHOLDER', '', $listQuery);
    // Actually let me redo this more cleanly
    
    $finalListQuery = '
        SELECT id, course_id, title, content, content_bn, is_pinned, is_active, created_at
        FROM classroom_announcements
    ';
    $finalCountQuery = '
        SELECT COUNT(*) as total
        FROM classroom_announcements
    ';
    
    $whereClauses = [];
    $finalParams = [];
    
    if (!empty($courseId)) {
        $courseId = (int)$courseId;
        $whereClauses[] = 'course_id = :course_id';
        $finalParams[':course_id'] = $courseId;
    }
    
    if (!empty($onlyActive)) {
        $whereClauses[] = 'is_active = 1';
    }
    
    if (!empty($whereClauses)) {
        $finalListQuery .= ' WHERE ' . implode(' AND ', $whereClauses);
        $finalCountQuery .= ' WHERE ' . implode(' AND ', $whereClauses);
    }
    
    $finalListQuery .= ' ORDER BY is_pinned DESC, created_at DESC LIMIT :limit OFFSET :offset';
    $finalParams[':limit'] = $limit;
    $finalParams[':offset'] = $offset;
    
    $listStmt = $db->prepare($finalListQuery);
    foreach ($finalParams as $param => $value) {
        $listStmt->bindValue($param, $value);
    }
    $listStmt->execute();
    $announcements = $listStmt->fetchAll(PDO::FETCH_ASSOC);
    
    $countStmt = $db->prepare($finalCountQuery);
    foreach ($finalParams as $param => $value) {
        $countStmt->bindValue($param, $value);
    }
    $countStmt->execute();
    $total = (int)$countStmt->fetchColumn();
    
    successResponse([
        'announcements' => $announcements,
        'pagination' => [
            'page' => $page,
            'limit' => $limit,
            'total' => $total,
            'total_pages' => ceil($total / $limit),
            'has_more' => $page < ceil($total / $limit),
        ],
    ], 'Announcements retrieved successfully');
    
} catch (\Exception $e) {
    error_log('List announcements error: ' . $e->getMessage());
    errorResponse('Failed to retrieve announcements. Please try again.', 500);
}