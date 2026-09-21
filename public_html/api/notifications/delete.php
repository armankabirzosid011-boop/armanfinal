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
    $stmt = $db->prepare('DELETE FROM notifications WHERE id = :id AND user_id = :user_id');
    $stmt->execute([':id' => $id, ':user_id' => $user['id']]);
    successResponse(null, 'Notification deleted successfully');
} catch (\Exception $e) {
    error_log('Delete notification error: ' . $e->getMessage());
    errorResponse('Failed to delete notification', 500);
}
