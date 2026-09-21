<?php
/**
 * List Vitals API
 * 
 * GET /api/vitals/list.php?patient_id=123
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
        SELECT v.*, u.full_name as recorded_by_name
        FROM vital_signs v
        LEFT JOIN users u ON v.recorded_by = u.id
        WHERE v.patient_id = :patient_id
        ORDER BY v.recorded_at DESC
    ');
    $stmt->execute([':patient_id' => $patientId]);
    $vitals = $stmt->fetchAll();
    
    successResponse($vitals ?: []);
    
} catch (\Exception $e) {
    error_log('List vitals error: ' . $e->getMessage());
    errorResponse('Failed to fetch vitals', 500);
}
