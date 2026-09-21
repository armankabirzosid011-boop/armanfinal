<?php
/**
 * Create Admission API
 * POST /api/admissions/create.php
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$missing = validateRequired($input, ['patientId']);
if ($missing) errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('INSERT INTO admissions (patient_id, admission_date, ward, bed_number, department, admitting_doctor, diagnosis_at_admission, status, created_by) VALUES (:patient_id, :admission_date, :ward, :bed_number, :department, :admitting_doctor, :diagnosis, :status, :created_by)');
    $stmt->execute([
        ':patient_id' => (int)$input['patientId'],
        ':admission_date' => $input['admissionDate'] ?? date('Y-m-d H:i:s'),
        ':ward' => $input['ward'] ?? null,
        ':bed_number' => $input['bedNumber'] ?? null,
        ':department' => $input['department'] ?? null,
        ':admitting_doctor' => isset($input['admittingDoctor']) ? (int)$input['admittingDoctor'] : null,
        ':diagnosis' => $input['diagnosis'] ?? null,
        ':status' => 'admitted',
        ':created_by' => $user['id'],
    ]);
    $admissionId = (int)$db->lastInsertId();
    $fetchStmt = $db->prepare('SELECT a.*, u.full_name as doctor_name, p.full_name as patient_name FROM admissions a LEFT JOIN users u ON a.admitting_doctor = u.id LEFT JOIN patients p ON a.patient_id = p.id WHERE a.id = :id');
    $fetchStmt->execute([':id' => $admissionId]);
    $admission = $fetchStmt->fetch();
    // Update patient type
    $db->prepare("UPDATE patients SET patient_type = 'admitted' WHERE id = :id")->execute([':id' => (int)$input['patientId']]);
    logAudit($user['id'], (int)$input['patientId'], 'create', 'admission', $admissionId, null, $admission);
    successResponse($admission, 'Patient admitted successfully');
} catch (\Exception $e) {
    error_log('Create admission error: ' . $e->getMessage());
    errorResponse('Failed to admit patient', 500);
}
