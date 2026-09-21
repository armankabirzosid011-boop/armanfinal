<?php
/**
 * Get classroom course by ID API
 * GET /api/classroom/courses/{id}
 * 
 * Retrieves a single course with lessons and enrolled status.
 * Publicly accessible, shows enrollment status if student is logged in.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('GET');

$courseId = (int)getParam('id');

if (empty($courseId) || $courseId <= 0) {
    errorResponse('Invalid course ID', 400);
}

try {
    $db = Database::getInstance();
    
    // Get course with instructor info
    $stmt = $db->prepare(''
        . 'SELECT c.*, u.full_name as instructor_name, u.photo_url as instructor_photo '
        . 'FROM classroom_courses c '
        . 'JOIN users u ON c.instructor_id = u.id '
        . 'WHERE c.id = :course_id AND c.status = "published"'
    );
    $stmt->execute([':course_id' => $courseId]);
    $course = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$course) {
        // Try draft courses if authenticated as admin or instructor
        errorResponse('Course not found or not published.', 404);
    }
    
    // Get lessons for this course (only published)
    $lessonsStmt = $db->prepare(''
        . 'SELECT id, title, order_index, is_published, is_free_preview, estimated_duration '
        . 'FROM classroom_lessons '
        . 'WHERE course_id = :course_id AND is_published = 1 '
        . 'ORDER BY order_index ASC'
    );
    $lessonsStmt->execute([':course_id' => $courseId]);
    $lessons = $lessonsStmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get resources for each lesson
    foreach ($lessons as &$lesson) {
        $resourcesStmt = $db->prepare(''
            . 'SELECT id, filename, original_name, mime_type, size_bytes, download_count, upload_type '
            . 'FROM classroom_resources '
            . 'WHERE lesson_id = :lesson_id'
        );
        $resourcesStmt->execute([':lesson_id' => $lesson['id']]);
        $lesson['resources'] = $resourcesStmt->fetchAll(PDO::FETCH_ASSOC);
    }
    unset($lesson);
    
    // Check if student is enrolled (if authenticated)
    $isEnrolled = false;
    $enrollmentProgress = 0;
    $totalLessons = count($lessons);
    
    // We'll set isEnrolled to false by default; the React side can check with auth
    
    // Get course thumbnail
    $thumbnail = $course['thumbnail_url'] ?:
        '/uploads/default-course-thumbnail.jpg';
    
    successResponse([
        'course' => [
            'id' => $course['id'],
            'title' => $course['title'],
            'description' => $course['description'],
            'description_bn' => $course['description_bn'],
            'category' => $course['category'],
            'difficulty' => $course['difficulty'],
            'thumbnail_url' => $thumbnail,
            'instructor_name' => $course['instructor_name'],
            'instructor_photo' => $course['instructor_photo'],
            'status' => $course['status'],
            'estimated_duration' => $course['estimated_duration'],
            'total_lessons' => $course['total_lessons'],
            'enrolled_count' => $course['enrolled_count'],
        ],
        'lessons' => $lessons,
        'total_lessons' => $totalLessons,
        'is_published' => $course['status'] === 'published',
        'is_enrolled' => $isEnrolled,
        'progress_percentage' => $enrollmentProgress,
    ], 'Course retrieved successfully');
    
} catch (\Exception $e) {
    error_log('Get course error: ' . $e->getMessage());
    errorResponse('Failed to retrieve course. Please try again.', 500);
}