<?php
/**
 * List Prescriptions API
 * 
 * GET /api/prescriptions/list.php?patient_id=123
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();
$patientId = (int)getParam('patient_id', 0);

if (!$patientId) {
    errorResponse('Patient ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('
        SELECT p.*, u.full_name as doctor_name,
               (SELECT JSON_ARRAYAGG(JSON_OBJECT(
                   "id", pm.id, "name", pm.name, "dose", pm.dose,
                   "frequency", pm.frequency, "duration", pm.duration,
                   "instructions", pm.instructions, "drug_form", pm.drug_form,
                   "route", pm.route, "is_prn", pm.is_prn,
                   "prn_condition", pm.prn_condition,
                   "iv_im_dose_format", pm.iv_im_dose_format,
                   "loading_dose", pm.loading_dose,
                   "maintenance_dose", pm.maintenance_dose,
                   "infusion_rate", pm.infusion_rate,
                   "infusion_unit", pm.infusion_unit,
                   "sort_order", pm.sort_order
               ) ORDER BY pm.sort_order ASC)
               FROM prescription_medications pm WHERE pm.prescription_id = p.id) as medications
        FROM prescriptions p
        LEFT JOIN users u ON p.created_by = u.id
        WHERE p.patient_id = :patient_id
        ORDER BY p.prescription_date DESC, p.created_at DESC
    ');
    $stmt->execute([':patient_id' => $patientId]);
    $prescriptions = $stmt->fetchAll();
    
    foreach ($prescriptions as &$rx) {
        $rx['medications'] = json_decode($rx['medications'] ?? '[]', true) ?: [];
    }
    
    successResponse($prescriptions);
    
} catch (\Exception $e) {
    error_log('List prescriptions error: ' . $e->getMessage());
    errorResponse('Failed to fetch prescriptions', 500);
}
