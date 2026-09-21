<?php
/**
 * Notifications API - Create
 * 
 * POST /api/notifications/create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['title', 'type']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('
        INSERT INTO notifications (user_id, patient_id, type, title, message, link_url, created_by)
        VALUES (:user_id, :patient_id, :notif_type, :title, :message, :link_url, :created_by)
    ');
    
    $stmt->execute([
        ':user_id' => isset($input['user_id']) ? (int)$input['user_id'] : null,
        ':patient_id' => isset($input['patient_id']) ? (int)$input['patient_id'] : null,
        ':notif_type' => $input['type'],
        ':title' => $input['title'],
        ':message' => $input['message'] ?? null,
        ':link_url' => $input['link_url'] ?? $input['link'] ?? null,
        ':created_by' => $user['id'],
    ]);
    
    $notificationId = (int)$db->lastInsertId();
    
    successResponse(['id' => $notificationId], 'Notification created');
} catch (\Exception $e) {
    error_log('Create notification error: ' . $e->getMessage());
    errorResponse('Failed to create notification', 500);
}
