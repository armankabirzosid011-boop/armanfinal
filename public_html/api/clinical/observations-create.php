<?php
/**
 * Create Observation API
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$missing = validateRequired($input, ['patientId', 'observationType', 'value']);
if ($missing) errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('INSERT INTO vital_signs (patient_id, visit_id, recorded_by, recorded_at) VALUES (:patient_id, :visit_id, :recorded_by, NOW())');
    $stmt->execute([':patient_id' => (int)$input['patientId'], ':visit_id' => isset($input['visitId']) ? (int)$input['visitId'] : null, ':recorded_by' => $user['id']]);
    $obsId = (int)$db->lastInsertId();
    $fetchStmt = $db->prepare('SELECT * FROM vital_signs WHERE id = :id');
    $fetchStmt->execute([':id' => $obsId]);
    $obs = $fetchStmt->fetch();
    logAudit($user['id'], (int)$input['patientId'], 'create', 'observation', $obsId, null, $obs);
    successResponse($obs, 'Observation recorded successfully');
} catch (\Exception $e) {
    error_log('Create observation error: ' . $e->getMessage());
    errorResponse('Failed to record observation', 500);
}
