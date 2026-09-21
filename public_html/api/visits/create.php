<?php
/**
 * Create Visit API
 * 
 * POST /api/visits/create.php
 * Reads camelCase field names from frontend.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['patientId', 'visitType']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

// Validate visit type
$allowedVisitTypes = ['outpatient', 'inpatient', 'emergency', 'follow-up', 'admitted'];
$visitType = $input['visitType'];
if (!in_array($visitType, $allowedVisitTypes)) {
    errorResponse('Invalid visit type. Allowed: ' . implode(', ', $allowedVisitTypes), 400);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('
        INSERT INTO visits (patient_id, visit_type, visit_date, chief_complaint, vital_signs, history_of_present_illness, physical_examination, diagnosis, notes, created_by)
        VALUES (:patient_id, :visit_type, :visit_date, :chief_complaint, :vital_signs, :hpI, :pe, :diagnosis, :notes, :created_by)
    ');
    
    $vitalSigns = isset($input['vitalSigns']) ? json_encode($input['vitalSigns']) : null;
    
    $stmt->execute([
        ':patient_id' => (int)$input['patientId'],
        ':visit_type' => $visitType,
        ':visit_date' => $input['visitDate'] ?? date('Y-m-d'),
        ':chief_complaint' => $input['chiefComplaint'] ?? null,
        ':vital_signs' => $vitalSigns,
        ':hpI' => $input['historyOfPresentIllness'] ?? null,
        ':pe' => $input['physicalExamination'] ?? null,
        ':diagnosis' => $input['diagnosis'] ?? null,
        ':notes' => $input['notes'] ?? null,
        ':created_by' => $user['id'],
    ]);
    
    $visitId = (int)$db->lastInsertId();
    
    // Fetch created visit
    $fetchStmt = $db->prepare('SELECT v.*, u.full_name as doctor_name FROM visits v LEFT JOIN users u ON v.created_by = u.id WHERE v.id = :id');
    $fetchStmt->execute([':id' => $visitId]);
    $visit = $fetchStmt->fetch();
    
    // Decode vital_signs JSON
    if ($visit && isset($visit['vital_signs'])) {
        $visit['vital_signs'] = json_decode($visit['vital_signs'], true);
    }
    
    logAudit($user['id'], $visit['patient_id'], 'create', 'visit', $visitId);
    
    successResponse($visit, 'Visit created successfully');
    
} catch (\Exception $e) {
    error_log('Create visit error: ' . $e->getMessage());
    errorResponse('Failed to create visit', 500);
}
