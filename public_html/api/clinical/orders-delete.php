<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['id'] ?? null);
if (!$id) errorResponse('Order ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT * FROM investigations WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    if (!$existing) errorResponse('Order not found', 404);
    $stmt = $db->prepare("UPDATE investigations SET status = 'cancelled', updated_at = NOW() WHERE id = :id");
    $stmt->execute([':id' => $id]);
    logAudit($user['id'], $existing['patient_id'], 'delete', 'order', $id, $existing, null);
    successResponse(null, 'Order cancelled successfully');
} catch (\Exception $e) {
    error_log('Delete order error: ' . $e->getMessage());
    errorResponse('Failed to cancel order', 500);
}
