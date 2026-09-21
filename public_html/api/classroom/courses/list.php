<?php
/**
 * List classroom courses API
 * GET /api/classroom/courses
 * 
 * Lists courses with optional filtering by category, difficulty, status, and search.
 * Publicly accessible for students to browse.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('GET');

// Optional filters
$category = getParam('category');
$difficulty = getParam('difficulty');
$status = getParam('status');
$search = getParam('search');
$page = max(1, (int)getParam('page', 1));
$limit = min(100, max(1, (int)getParam('limit', 12)));
$offset = ($page - 1) * $limit;

try {
    $db = Database::getInstance();
    
    $query = '
        SELECT c.*, u.full_name as instructor_name, u.photo_url as instructor_photo
        FROM classroom_courses c
        JOIN users u ON c.instructor_id = u.id
    ';
    
    $countQuery = '
        SELECT COUNT(*) as total
        FROM classroom_courses c
        JOIN users u ON c.instructor_id = u.id
    ';
    
    $params = [];
    $countParams = [];
    
    // Apply filters
    $whereClauses = [];
    
    if (!empty($category)) {
        $whereClauses[] = 'c.category = :category';
        $params[':category'] = $category;
        $countParams[':category'] = $category;
    }
    
    if (!empty($difficulty)) {
        $whereClauses[] = 'c.difficulty = :difficulty';
        $params[':difficulty'] = $difficulty;
        $countParams[':difficulty'] = $difficulty;
    }
    
    if (!empty($status)) {
        $whereClauses[] = 'c.status = :status';
        $params[':status'] = $status;
        $countParams[':status'] = $status;
    }
    
    if (!empty($search)) {
        $whereClauses[] = '(c.title LIKE :search OR c.description LIKE :search)';
        $params[':search'] = '%' . $search . '%';
        $countParams[':search'] = '%' . $search . '%';
    }
    
    if (!empty($whereClauses)) {
        $query .= ' WHERE ' . implode(' AND ', $whereClauses);
        $countQuery .= ' WHERE ' . implode(' AND ', $whereClauses);
    }
    
    $query .= ' ORDER BY c.created_at DESC LIMIT :limit OFFSET :offset';
    $params[':limit'] = $limit;
    $params[':offset'] = $offset;
    
    // Add params to count query too (though not used for offset)
    foreach ($countParams as $param => $value) {
        // Already included in where clauses
    }
    
    $countStmt = $db->prepare($countQuery);
    foreach ($countParams as $param => $value) {
        $countStmt->bindValue($param, $value);
    }
    $countStmt->execute();
    $total = (int)$countStmt->fetchColumn();
    
    $stmt = $db->prepare($query);
    
    // Bind parameters
    foreach ($params as $param => $value) {
        $stmt->bindValue($param, $value);
    }
    
    $stmt->execute();
    $courses = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get total pages
    $totalPages = ceil($total / $limit);
    
    successResponse([
        'courses' => $courses,
        'pagination' => [
            'page' => $page,
            'limit' => $limit,
            'total' => $total,
            'total_pages' => $totalPages,
            'has_more' => $page < $totalPages,
        ],
    ], 'Courses retrieved successfully');
    
} catch (\Exception $e) {
    error_log('List courses error: ' . $e->getMessage());
    errorResponse('Failed to retrieve courses. Please try again.', 500);
}