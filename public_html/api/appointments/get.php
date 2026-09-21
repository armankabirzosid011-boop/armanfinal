<?php
/**
 * Get Single Appointment API
 * 
 * GET /api/appointments/get.php?id=1
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();
$id = (int)($_GET['id'] ?? null);

if (!$id) {
    errorResponse('Appointment ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('
        SELECT a.*, u.full_name as doctor_name, p.full_name as patient_name, p.phone as patient_phone
        FROM appointments a
        LEFT JOIN users u ON a.doctor_id = u.id
        LEFT JOIN patients p ON a.patient_id = p.id
        WHERE a.id = :id
    ');
    $stmt->execute([':id' => $id]);
    $appointment = $stmt->fetch();
    
    if (!$appointment) {
        errorResponse('Appointment not found', 404);
    }
    
    successResponse($appointment);
    
} catch (\Exception $e) {
    error_log('Get appointment error: ' . $e->getMessage());
    errorResponse('Failed to fetch appointment', 500);
}
