<?php
/**
 * Get quiz by ID API
 * GET /api/classroom/quizzes/{id}
 * 
 * Retrieves a quiz with questions and options.
 * Students can see questions but not correct answers before submission.
 * After submission, results are shown.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('GET');

$quizId = (int)getParam('id');

if (empty($quizId) || $quizId <= 0) {
    errorResponse('Invalid quiz ID', 400);
}

try {
    $db = Database::getInstance();
    
    // Get quiz with course and lesson info
    $stmt = $db->prepare(''
        . 'SELECT q.*, c.title as course_title, l.title as lesson_title '
        . 'FROM classroom_quizzes q '
        . 'JOIN classroom_courses c ON q.course_id = c.id '
        . 'LEFT JOIN classroom_lessons l ON q.lesson_id = l.id '
        . 'WHERE q.id = :quiz_id'
    );
    $stmt->execute([':quiz_id' => $quizId]);
    $quiz = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$quiz) {
        errorResponse('Quiz not found.', 404);
    }
    
    // Get questions with options (but mark correct as unknown until submission)
    $questionsStmt = $db->prepare(''
        . 'SELECT qq.id, qq.question_text, qq.question_text_bn, qq.points, '
        . 'qq.explanation, qq.explanation_bn, qq.order_index '
        . 'FROM classroom_quiz_questions qq '
        . 'WHERE qq.quiz_id = :quiz_id '
        . 'ORDER BY qq.order_index ASC'
    );
    $questionsStmt->execute([':quiz_id' => $quizId]);
    $questions = $questionsStmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get options for each question
    foreach ($questions as &$question) {
        $optionsStmt = $db->prepare(''
            . 'SELECT id, option_text, option_text_bn, is_correct, order_index '
            . 'FROM classroom_quiz_options '
            . 'WHERE question_id = :question_id '
            . 'ORDER BY order_index ASC'
        );
        $optionsStmt->execute([':question_id' => $question['id']]);
        $question['options'] = $optionsStmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Remove is_correct from options - this is the key security measure
        // The frontend should NOT see which option is correct
        foreach ($question['options'] as &$option) {
            unset($option['is_correct']);
        }
        unset($option);
    }
    unset($question);
    
    successResponse([
        'quiz' => [
            'id' => $quiz['id'],
            'title' => $quiz['title'],
            'description' => $quiz['description'],
            'course_title' => $quiz['course_title'],
            'lesson_title' => $quiz['lesson_title'],
            'passing_score' => $quiz['passing_score'],
            'time_limit' => $quiz['time_limit'],
            'attempts_allowed' => $quiz['attempts_allowed'],
        ],
        'questions' => $questions,
        'total_questions' => count($questions),
    ], 'Quiz retrieved successfully');
    
} catch (\Exception $e) {
    error_log('Get quiz error: ' . $e->getMessage());
    errorResponse('Failed to retrieve quiz. Please try again.', 500);
}