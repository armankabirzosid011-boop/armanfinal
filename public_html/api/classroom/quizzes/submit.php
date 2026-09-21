<?php
/**
 * Submit quiz attempt API
 * POST /api/classroom/quizzes/{id}/submit
 * 
 * Submits quiz answers and calculates the score server-side.
 * Never trusts the score submitted by the browser.
 */

require_once __DIR__ . '/../../config_loader.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('POST');
requireAuth();

$quizId = (int)getParam('id');

if (empty($quizId) || $quizId <= 0) {
    errorResponse('Invalid quiz ID', 400);
}

try {
    $db = Database::getInstance();
    $studentId = (int)($user = requireAuth())['id'];
    
    // Check if student is enrolled in the course
    $enrollmentStmt = $db->prepare(''
        . 'SELECT id FROM classroom_enrollments '
        . 'WHERE student_id = :student_id AND course_id = (SELECT course_id FROM classroom_quizzes WHERE id = :quiz_id)'
    );
    $enrollmentStmt->execute([':student_id' => $studentId, ':quiz_id' => $quizId]);
    
    // Also check via classroom_students mapping
    $studentStmt = $db->prepare('SELECT id FROM classroom_students WHERE user_id = :user_id');
    $studentStmt->execute([':user_id' => $studentId]);
    $classroomStudent = $studentStmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$classroomStudent && $enrollmentStmt->fetchColumn() === false) {
        errorResponse('You are not enrolled in this course.', 403);
    }
    
    // Check attempts allowed
    $quizStmt = $db->prepare('SELECT attempts_allowed FROM classroom_quizzes WHERE id = :quiz_id');
    $quizStmt->execute([':quiz_id' => $quizId]);
    $quiz = $quizStmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$quiz) {
        errorResponse('Quiz not found.', 404);
    }
    
    // Check existing attempts
    $attemptsStmt = $db->prepare(''
        . 'SELECT COUNT(*) as attempt_count '
        . 'FROM classroom_quiz_attempts '
        . 'WHERE quiz_id = :quiz_id AND student_id = :student_id'
    );
    $attemptsStmt->execute([':quiz_id' => $quizId, ':student_id' => $studentId]);
    $attempts = $attemptsStmt->fetch(PDO::FETCH_ASSOC);
    
    if ((int)($attempts['attempt_count'] ?? 0) >= ($quiz['attempts_allowed'] ?? 1)) {
        errorResponse('You have reached the maximum number of attempts for this quiz.', 422);
    }
    
    // Get the submitted answers
    $submittedAnswers = getParam('answers');
    
    if (empty($submittedAnswers) || !is_array($submittedAnswers)) {
        errorResponse('No answers provided.', 400);
    }
    
    // Start a transaction
    $db->beginTransaction();
    
    // Insert quiz attempt
    $attemptStmt = $db->prepare(''
        . 'INSERT INTO classroom_quiz_attempts '
        . '(student_id, quiz_id, score, percentage, passed, time_taken_seconds, started_at, submitted_at) '
        . 'VALUES (:student_id, :quiz_id, 0, 0.00, 0, :time_taken, NOW(), NOW)'
    );
    
    // Calculate score server-side
    $totalPoints = 0;
    $earnedPoints = 0;
    
    // Get all questions and correct answers
    $questionsStmt = $db->prepare(''
        . 'SELECT qq.id, qq.points, qo.is_correct '
        . 'FROM classroom_quiz_questions qq '
        . 'JOIN classroom_quiz_options qo ON qo.question_id = qq.id '
        . 'WHERE qq.quiz_id = :quiz_id'
    );
    $questionsStmt->execute([':quiz_id' => $quizId]);
    $questions = $questionsStmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Build a map of correct option IDs per question
    $correctOptions = [];
    foreach ($questions as $question) {
        $totalPoints += $question['points'];
        foreach ($questions as $q) {
            if ($q['id'] === $question['id']) {
                $stmtOptions = $db->prepare('SELECT id FROM classroom_quiz_options WHERE question_id = :question_id AND is_correct = 1');
                $stmtOptions->execute([':question_id' => $question['id']]);
                if ($correctOptionId = $stmtOptions->fetchColumn()) {
                    $correctOptions[$question['id']] = $correctOptionId;
                }
                break;
            }
        }
    }
    
    // Actually, let me redo this more cleanly
    // Get correct answers from database
    $correctAnswerMap = []; // question_id => correct option_id
    
    $correctStmt = $db->prepare(''
        . 'SELECT question_id, id as correct_option_id '
        . 'FROM classroom_quiz_options '
        . 'WHERE is_correct = 1 AND question_id IN (' . implode(',', array_keys(array_flip(array_column($questions, 'id')))) . ')'
    );
    // This is getting complex - let me simplify
    
    // Better approach: get all correct options
    $allCorrectStmt = $db->prepare(''
        . 'SELECT question_id, id as correct_option_id '
        . 'FROM classroom_quiz_options '
        . 'WHERE is_correct = 1 AND quiz_id = :quiz_id'
    );
    $allCorrectStmt->execute([':quiz_id' => $quizId]);
    while ($row = $allCorrectStmt->fetch(PDO::FETCH_ASSOC)) {
        $correctAnswerMap[$row['question_id']] = $row['correct_option_id'];
    }
    
    // Now calculate score based on student's selections
    $earnedPoints = 0;
    
    foreach ($submittedAnswers as $questionId => $selectedOptionId) {
        $questionId = (int)$questionId;
        $selectedOptionId = (int)($selectedOptionId ?? 0);
        
        $questionPoints = 0;
        foreach ($questions as $q) {
            if ($q['id'] === $questionId) {
                $questionPoints = $q['points'];
                break;
            }
        }
        
        // Check if selected option is correct
        $isCorrect = false;
        if (isset($correctAnswerMap[$questionId]) && $correctAnswerMap[$questionId] === $selectedOptionId) {
            $isCorrect = true;
            $earnedPoints += $questionPoints;
        }
    }
    
    $percentage = $totalPoints > 0 ? round(($earnedPoints / $totalPoints) * 100, 2) : 0.00;
    $passed = $percentage >= ($quiz['passing_score'] ?? 80.00);
    
    // Insert the attempt with calculated score
    $attemptResult = $attemptStmt->execute([
        ':student_id' => $studentId,
        ':quiz_id' => $quizId,
        ':time_taken' => getParam('time_taken_seconds', 0),
    ]);
    
    $attemptId = (int)$db->lastInsertId();
    
    // Save student answers
    foreach ($submittedAnswers as $questionId => $selectedOptionId) {
        $questionId = (int)$questionId;
        $selectedOptionId = (int)($selectedOptionId ?? 0);
        
        $isCorrect = isset($correctAnswerMap[$questionId]) && $correctAnswerMap[$questionId] === $selectedOptionId;
        
        $answerStmt = $db->prepare(''
            . 'INSERT INTO classroom_quiz_student_answers '
            . '(attempt_id, question_id, selected_option_id, is_correct, answered_at) '
            . 'VALUES (:attempt_id, :question_id, :selected_option_id, :is_correct, NOW())'
        );
        $answerStmt->execute([
            ':attempt_id' => $attemptId,
            ':question_id' => $questionId,
            ':selected_option_id' => $selectedOptionId,
            ':is_correct' => $isCorrect ? 1 : 0,
        ]);
    }
    
    // Update the attempt with actual score
    $updateAttempt = $db->prepare(''
        . 'UPDATE classroom_quiz_attempts '
        . 'SET score = :score, percentage = :percentage, passed = :passed, submitted_at = NOW() '
        . 'WHERE id = :attempt_id'
    );
    $updateAttempt->execute([
        ':score' => $earnedPoints,
        ':percentage' => $percentage,
        ':passed' => $passed ? 1 : 0,
        ':attempt_id' => $attemptId,
    ]);
    
    // Commit transaction
    $db->commit();
    
    // Log audit
    logAudit($studentId, null, 'quiz_submit', 'quiz', $quizId, null, [
        'attempt_id' => $attemptId,
        'score' => $earnedPoints,
        'percentage' => $percentage,
        'passed' => $passed,
        'quiz_id' => $quizId,
    ]);
    
    successResponse([
        'attempt_id' => $attemptId,
        'score' => $earnedPoints,
        'percentage' => $percentage,
        'passed' => $passed,
        'total_possible' => $totalPoints,
        'questions_answered' => count($submittedAnswers),
    ], 'Quiz submitted successfully');
    
} catch (\Exception $e) {
    // Rollback on error
    if ($db && $db->inTransaction()) {
        $db->rollback();
    }
    error_log('Submit quiz error: ' . $e->getMessage());
    errorResponse('Failed to submit quiz. Please try again.', 500);
}