<?php
/**
 * Approve Patient Login API
 * 
 * POST /api/auth/patients/approve.php
 * Headers: Authorization: Bearer <staff-token>
 * Body: { "patient_login_id": 123 }
 * 
 * Staff/doctors can approve pending patient registrations.
 */

require_once __DIR__ . '/../../database.php';
require_once __DIR__ . '/../../helpers.php';
require_once __DIR__ . '/../middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();

$input = getJsonInput();
$missing = validateRequired($input, ['patient_login_id']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$patientLoginId = (int)$input['patient_login_id'];

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('
        SELECT pl.*, p.full_name, p.register_number 
        FROM patient_login pl
        JOIN patients p ON pl.patient_id = p.id
        WHERE pl.id = :id
        LIMIT 1
    ');
    $stmt->execute([':id' => $patientLoginId]);
    $patientLogin = $stmt->fetch();
    
    if (!$patientLogin) {
        errorResponse('Patient login record not found', 404);
    }
    
    if ($patientLogin['status'] !== 'pending') {
        errorResponse('Patient is not in pending status. Current status: ' . $patientLogin['status'], 400);
    }
    
    // Approve
    $stmt = $db->prepare('UPDATE patient_login SET status = "approved", approved_by = :approved_by, approved_at = NOW() WHERE id = :id');
    $stmt->execute([
        ':approved_by' => $user['id'],
        ':id' => $patientLoginId,
    ]);
    
    successResponse([
        'patient_login_id' => $patientLoginId,
        'patient_name' => $patientLogin['full_name'],
        'register_number' => $patientLogin['register_number'],
        'status' => 'approved',
    ], 'Patient approved successfully');
    
} catch (\Exception $e) {
    error_log('Patient approval error: ' . $e->getMessage());
    errorResponse('Failed to approve patient', 500);
}
