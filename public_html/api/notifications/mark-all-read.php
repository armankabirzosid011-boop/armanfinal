<?php
require_once __DIR__ . "/../database.php";
require_once __DIR__ . "/../helpers.php";
require_once __DIR__ . "/../auth/middleware.php";
handleCors();
requireMethod("POST");
$user = requireAuth();
$unread = 0;
try {
    $db = Database::getInstance();
    $stmt = $db->prepare("UPDATE notifications SET is_read = 1, read_at = NOW() WHERE user_id = :user_id AND is_read = :unread");
    $stmt->execute([":user_id" => $user["id"], ":unread" => $unread]);
    successResponse(null, "All notifications marked as read");
} catch (\Exception $e) {
    error_log("Mark all read error: " . $e->getMessage());
    errorResponse("Failed to mark notifications as read", 500);
}
