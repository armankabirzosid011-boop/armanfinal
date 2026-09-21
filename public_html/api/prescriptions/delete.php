<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['id'] ?? null);
if (!$id) errorResponse('Prescription ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT * FROM prescriptions WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    if (!$existing) errorResponse('Prescription not found', 404);
    $stmt = $db->prepare('DELETE FROM prescriptions WHERE id = :id');
    $stmt->execute([':id' => $id]);
    logAudit($user['id'], $existing['patient_id'], 'delete', 'prescription', $id, $existing, null);
    successResponse(null, 'Prescription deleted successfully');
} catch (\Exception $e) {
    error_log('Delete prescription error: ' . $e->getMessage());
    errorResponse('Failed to delete prescription', 500);
}
