<?php
/**
 * Investigations API - List
 * 
 * GET /api/investigations/list.php?patient_id=123
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
        SELECT i.*, u.full_name as ordered_by_name,
               (SELECT JSON_ARRAYAGG(JSON_OBJECT("id", ir.id, "parameter_name", ir.parameter_name, "result_value", ir.result_value, "reference_range", ir.reference_range, "unit", ir.unit, "is_abnormal", ir.is_abnormal, "recorded_at", ir.recorded_at))
                FROM investigation_results ir WHERE ir.investigation_id = i.id) as results
        FROM investigations i
        LEFT JOIN users u ON i.ordered_by = u.id
        WHERE i.patient_id = :patient_id
        ORDER BY i.ordered_at DESC
    ');
    $stmt->execute([':patient_id' => $patientId]);
    $investigations = $stmt->fetchAll();
    
    foreach ($investigations as &$inv) {
        $inv['results'] = json_decode($inv['results'] ?? '[]', true) ?: [];
    }
    
    successResponse($investigations);
} catch (\Exception $e) {
    error_log('List investigations error: ' . $e->getMessage());
    errorResponse('Failed to fetch investigations', 500);
}
