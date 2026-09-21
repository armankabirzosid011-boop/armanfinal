<?php
/**
 * Vitals API - Create
 * 
 * POST /api/vitals/create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['patient_id']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('
        INSERT INTO vital_signs (patient_id, visit_id, blood_pressure_systolic, blood_pressure_diastolic, pulse, temperature, oxygen_saturation, respiratory_rate, weight, height, recorded_by)
        VALUES (:patient_id, :visit_id, :bp_sys, :bp_dia, :pulse, :temp, :spo2, :rr, :weight, :height, :recorded_by)
    ');
    
    $stmt->execute([
        ':patient_id' => (int)$input['patient_id'],
        ':visit_id' => isset($input['visit_id']) ? (int)$input['visit_id'] : null,
        ':bp_sys' => $input['blood_pressure_systolic'] ?? null,
        ':bp_dia' => $input['blood_pressure_diastolic'] ?? null,
        ':pulse' => $input['pulse'] ?? null,
        ':temp' => $input['temperature'] ?? null,
        ':spo2' => $input['oxygen_saturation'] ?? null,
        ':rr' => $input['respiratory_rate'] ?? null,
        ':weight' => $input['weight'] ?? null,
        ':height' => $input['height'] ?? null,
        ':recorded_by' => $user['id'],
    ]);
    
    $vitalId = (int)$db->lastInsertId();
    
    successResponse(['id' => $vitalId], 'Vitals recorded successfully');
    
} catch (\Exception $e) {
    error_log('Create vitals error: ' . $e->getMessage());
    errorResponse('Failed to record vitals', 500);
}
