<?php
/**
 * List lessons for a course API
 * GET /api/classroom/lessons
 * 
 * Lists lessons for a specific course with filtering.
 * Publicly accessible for published courses.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('GET');

$courseId = (int)getParam('course_id');

if (empty($courseId) || $courseId <= 0) {
    errorResponse('Invalid course ID', 400);
}

try {
    $db = Database::getInstance();
    
    // Check course exists and is published
    $courseStmt = $db->prepare('SELECT id, title, status FROM classroom_courses WHERE id = :course_id');
    $courseStmt->execute([':course_id' => $courseId]);
    $course = $courseStmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$course) {
        errorResponse('Course not found.', 404);
    }
    
    if ($course['status'] !== 'published') {
        errorResponse('Course is not published.', 403);
    }
    
    // Get lessons for this course
    $lessonsStmt = $db->prepare(''
        . 'SELECT id, title, content, content_bn, video_url, video_thumbnail_url, '
        . 'order_index, is_published, is_free_preview, estimated_duration '
        . 'FROM classroom_lessons '
        . 'WHERE course_id = :course_id '
        . 'ORDER BY order_index ASC'
    );
    $lessonsStmt->execute([':course_id' => $courseId]);
    $lessons = $lessonsStmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get resources for each lesson
    foreach ($lessons as &$lesson) {
        $resourcesStmt = $db->prepare(''
            . 'SELECT id, filename, original_name, mime_type, size_bytes, download_count, upload_type, title, description '
            . 'FROM classroom_resources '
            . 'WHERE lesson_id = :lesson_id'
        );
        $resourcesStmt->execute([':lesson_id' => $lesson['id']]);
        $lesson['resources'] = $resourcesStmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Count completed resources (for UI display)
        $lesson['resource_count'] = count($lesson['resources']);
    }
    unset($lesson);
    
    successResponse([
        'course_id' => $courseId,
        'course_title' => $course['title'],
        'lessons' => $lessons,
        'total_lessons' => count($lessons),
        'published_lessons' => count(array_filter($lessons, fn($l) => $l['is_published'])),
        'free_preview_lessons' => count(array_filter($lessons, fn($l) => $l['is_free_preview'])),
    ], 'Lessons retrieved successfully');
    
} catch (\Exception $e) {
    error_log('List lessons error: ' . $e->getMessage());
    errorResponse('Failed to retrieve lessons. Please try again.', 500);
}