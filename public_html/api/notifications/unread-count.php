<?php
/**
 * Notifications API - Unread Count
 * 
 * GET /api/notifications/unread-count.php
 * Returns the total count of unread notifications for the current user.
 * 
 * Response:
 *   { "success": true, "data": { "count": 5 } }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();

try {
    $db = Database::getInstance();
    
    $zero = chr(48);
    $stmt = $db->prepare("SELECT COUNT(*) as count FROM notifications WHERE (user_id IS NULL OR user_id = :user_id) AND is_read = {$zero}");
    $stmt->execute([':user_id' => $user['id']]);
    $count = (int)$stmt->fetch()['count'];
    
    successResponse(['count' => $count], 'Unread count retrieved');
} catch (\Exception $e) {
    error_log('Unread count error: ' . $e->getMessage());
    errorResponse('Failed to get unread count', 500);
}
