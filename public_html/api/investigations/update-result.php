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
$result = $input['result'] ?? null;
if (!$result) errorResponse('Result is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT * FROM investigations WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    if (!$existing) errorResponse('Investigation not found', 404);
    $stmt = $db->prepare("UPDATE investigations SET result = :result, result_date = :result_date, status = 'completed', updated_at = NOW() WHERE id = :id");
    $stmt->execute([':result' => $result, ':result_date' => $input['result_date'] ?? date('Y-m-d H:i:s'), ':id' => $id]);
    $fetchStmt = $db->prepare('SELECT * FROM investigations WHERE id = :id');
    $fetchStmt->execute([':id' => $id]);
    $updated = $fetchStmt->fetch();
    logAudit($user['id'], $existing['patient_id'], 'update', 'investigation', $id, $existing, $updated);
    successResponse($updated, 'Investigation result updated successfully');
} catch (\Exception $e) {
    error_log('Update investigation result error: ' . $e->getMessage());
    errorResponse('Failed to update investigation result', 500);
}
