<?php
/**
 * Assign Patient to Bed API
 * POST /api/beds/assign.php
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$missing = validateRequired($input, ['bedId', 'patientId']);
if ($missing) errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
try {
    $db = Database::getInstance();
    $bedStmt = $db->prepare('SELECT * FROM beds WHERE id = :id');
    $bedStmt->execute([':id' => (int)$input['bedId']]);
    $bed = $bedStmt->fetch();
    if (!$bed) errorResponse('Bed not found', 404);
    if ($bed['status'] !== 'available') errorResponse('Bed is not available', 409);
    $db->beginTransaction();
    $stmt = $db->prepare('UPDATE beds SET current_patient_id = :patient_id, status = :status, updated_at = NOW() WHERE id = :id');
    $stmt->execute([':patient_id' => (int)$input['patientId'], ':status' => 'occupied', ':id' => (int)$input['bedId']]);
    $db->commit();
    $fetchStmt = $db->prepare('SELECT b.*, p.full_name as patient_name FROM beds b LEFT JOIN patients p ON b.current_patient_id = p.id WHERE b.id = :id');
    $fetchStmt->execute([':id' => (int)$input['bedId']]);
    $updated = $fetchStmt->fetch();
    logAudit($user['id'], (int)$input['patientId'], 'update', 'bed', (int)$input['bedId'], $bed, $updated);
    successResponse($updated, 'Patient assigned to bed successfully');
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) $db->rollBack();
    error_log('Assign bed error: ' . $e->getMessage());
    errorResponse('Failed to assign bed', 500);
}
