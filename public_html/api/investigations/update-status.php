<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['id'] ?? null);
if (!$id) errorResponse('Investigation ID is required', 400);
$status = $input['status'] ?? null;
if (!$status) errorResponse('Status is required', 400);
$validStatuses = ['ordered', 'pending', 'in_progress', 'completed', 'cancelled'];
if (!in_array($status, $validStatuses)) errorResponse('Invalid status', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT * FROM investigations WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    if (!$existing) errorResponse('Investigation not found', 404);
    $stmt = $db->prepare('UPDATE investigations SET status = :status, updated_at = NOW() WHERE id = :id');
    $stmt->execute([':status' => $status, ':id' => $id]);
    $fetchStmt = $db->prepare('SELECT * FROM investigations WHERE id = :id');
    $fetchStmt->execute([':id' => $id]);
    $updated = $fetchStmt->fetch();
    logAudit($user['id'], $existing['patient_id'], 'update', 'investigation', $id, $existing, $updated);
    successResponse($updated, 'Status updated successfully');
} catch (\Exception $e) {
    error_log('Update investigation status error: ' . $e->getMessage());
    errorResponse('Failed to update investigation status', 500);
}
