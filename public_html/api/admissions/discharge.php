<?php
/**
 * Discharge Patient API
 * POST /api/admissions/discharge.php
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['id'] ?? null);
if (!$id) errorResponse('Admission ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT * FROM admissions WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $admission = $stmt->fetch();
    if (!$admission) errorResponse('Admission not found', 404);
    $db->beginTransaction();
    $updateStmt = $db->prepare('UPDATE admissions SET discharge_date = :discharge_date, discharge_summary = :summary, status = :status, updated_at = NOW() WHERE id = :id');
    $updateStmt->execute([':discharge_date' => date('Y-m-d H:i:s'), ':summary' => $input['dischargeSummary'] ?? null, ':status' => 'discharged', ':id' => $id]);
    $db->prepare("UPDATE patients SET patient_type = 'outdoor' WHERE id = :id")->execute([':id' => $admission['patient_id']]);
    // Release bed if assigned
    $db->prepare("UPDATE beds SET current_patient_id = NULL, status = 'cleaning', updated_at = NOW() WHERE current_patient_id = :pid")->execute([':pid' => $admission['patient_id']]);
    $db->commit();
    logAudit($user['id'], $admission['patient_id'], 'update', 'admission', $id, $admission, null);
    successResponse(null, 'Patient discharged successfully');
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) $db->rollBack();
    error_log('Discharge error: ' . $e->getMessage());
    errorResponse('Failed to discharge patient', 500);
}
