<?php
/**
 * Create Clinical Encounter (Visit) API
 * POST /api/clinical/encounters-create.php
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$missing = validateRequired($input, ['patientId', 'visitType']);
if ($missing) errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('INSERT INTO visits (patient_id, visit_type, visit_date, chief_complaint, history_of_present_illness, physical_examination, diagnosis, notes, created_by) VALUES (:patient_id, :visit_type, :visit_date, :chief_complaint, :hpi, :pe, :diagnosis, :notes, :created_by)');
    $stmt->execute([
        ':patient_id' => (int)$input['patientId'],
        ':visit_type' => $input['visitType'],
        ':visit_date' => $input['visitDate'] ?? date('Y-m-d'),
        ':chief_complaint' => $input['chiefComplaint'] ?? null,
        ':hpi' => $input['historyOfPresentIllness'] ?? null,
        ':pe' => $input['physicalExamination'] ?? null,
        ':diagnosis' => $input['diagnosis'] ?? null,
        ':notes' => $input['notes'] ?? null,
        ':created_by' => $user['id'],
    ]);
    $encounterId = (int)$db->lastInsertId();
    $fetchStmt = $db->prepare('SELECT v.*, u.full_name as doctor_name FROM visits v LEFT JOIN users u ON v.created_by = u.id WHERE v.id = :id');
    $fetchStmt->execute([':id' => $encounterId]);
    $encounter = $fetchStmt->fetch();
    logAudit($user['id'], (int)$input['patientId'], 'create', 'encounter', $encounterId, null, $encounter);
    successResponse($encounter, 'Encounter created successfully');
} catch (\Exception $e) {
    error_log('Create encounter error: ' . $e->getMessage());
    errorResponse('Failed to create encounter', 500);
}
