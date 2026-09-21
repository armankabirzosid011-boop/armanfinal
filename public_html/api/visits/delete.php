<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['id'] ?? null);
if (!$id) errorResponse('Visit ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT * FROM visits WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    if (!$existing) errorResponse('Visit not found', 404);
    $stmt = $db->prepare('DELETE FROM visits WHERE id = :id');
    $stmt->execute([':id' => $id]);
    logAudit($user['id'], $existing['patient_id'], 'delete', 'visit', $id, $existing, null);
    successResponse(null, 'Visit deleted successfully');
} catch (\Exception $e) {
    error_log('Delete visit error: ' . $e->getMessage());
    errorResponse('Failed to delete visit', 500);
}
