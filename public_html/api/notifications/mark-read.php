<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['id'] ?? null);
if (!$id) errorResponse('Notification ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare("UPDATE notifications SET is_read = 1, read_at = NOW() WHERE id = :id AND user_id = :user_id");
    $stmt->execute([':id' => $id, ':user_id' => $user['id']]);
    successResponse(null, 'Notification marked as read');
} catch (\Exception $e) {
    error_log('Mark read notification error: ' . $e->getMessage());
    errorResponse('Failed to mark notification as read', 500);
}
