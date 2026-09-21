<?php
/**
 * Release Bed API
 * POST /api/beds/release.php
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['bedId'] ?? null);
if (!$id) errorResponse('Bed ID is required', 400);
try {
    $db = Database::getInstance();
    $bedStmt = $db->prepare('SELECT * FROM beds WHERE id = :id');
    $bedStmt->execute([':id' => $id]);
    $bed = $bedStmt->fetch();
    if (!$bed) errorResponse('Bed not found', 404);
    $stmt = $db->prepare('UPDATE beds SET current_patient_id = NULL, status = :status, notes = :notes, updated_at = NOW() WHERE id = :id');
    $stmt->execute([':status' => $input['status'] ?? 'cleaning', ':notes' => $input['notes'] ?? null, ':id' => $id]);
    $fetchStmt = $db->prepare('SELECT * FROM beds WHERE id = :id');
    $fetchStmt->execute([':id' => $id]);
    $updated = $fetchStmt->fetch();
    logAudit($user['id'], null, 'update', 'bed', $id, $bed, $updated);
    successResponse($updated, 'Bed released successfully');
} catch (\Exception $e) {
    error_log('Release bed error: ' . $e->getMessage());
    errorResponse('Failed to release bed', 500);
}
