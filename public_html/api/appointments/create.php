<?php
/**
 * Create Appointment API
 * 
 * POST /api/appointments/create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['appointment_date']);
if ($missing) {
    errorResponse('Missing required fields: appointment_date', 400, ['missing_fields' => $missing]);
}

// Validate appointment type
$allowedTypes = ['regular', 'emergency', 'follow-up', 'consultation'];
$appointmentType = $input['type'] ?? 'regular';
if (!in_array($appointmentType, $allowedTypes)) {
    errorResponse('Invalid appointment type. Allowed: ' . implode(', ', $allowedTypes), 400);
}

// Validate appointment status
$allowedStatuses = ['scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'cancelled', 'no_show'];
$appointmentStatus = $input['status'] ?? 'scheduled';
if (!in_array($appointmentStatus, $allowedStatuses)) {
    errorResponse('Invalid appointment status. Allowed: ' . implode(', ', $allowedStatuses), 400);
}

try {
    $db = Database::getInstance();
    
    // Generate serial number for the day
    $date = $input['appointment_date'];
    $doctorId = isset($input['doctor_id']) ? (int)$input['doctor_id'] : null;
    
    // Use separate query for serial number to avoid PDO duplicate named parameter issue
    $serialSql = 'SELECT COALESCE(MAX(serial_number), 0) + 1 as next_serial FROM appointments WHERE appointment_date = :date';
    $serialParams = [':date' => $date];
    if ($doctorId) {
        $serialSql .= ' AND doctor_id = :did';
        $serialParams[':did'] = $doctorId;
    } else {
        $serialSql .= ' AND doctor_id IS NULL';
    }
    $serialStmt = $db->prepare($serialSql);
    $serialStmt->execute($serialParams);
    $serialNumber = (int)$serialStmt->fetch()['next_serial'];
    
    $stmt = $db->prepare('
        INSERT INTO appointments (patient_id, patient_name, patient_phone, doctor_id, appointment_date, appointment_time, serial_number, `type`, `status`, chief_complaint, notes, is_public_request, created_by)
        VALUES (:patient_id, :patient_name, :patient_phone, :doctor_id, :appointment_date, :appointment_time, :serial_number, :appt_type, :appt_status, :chief_complaint, :notes, :is_public_request, :created_by)
    ');
    
    $stmt->execute([
        ':patient_id' => isset($input['patient_id']) ? (int)$input['patient_id'] : null,
        ':patient_name' => $input['patient_name'] ?? null,
        ':patient_phone' => $input['patient_phone'] ?? null,
        ':doctor_id' => $doctorId,
        ':appointment_date' => $date,
        ':appointment_time' => $input['appointment_time'] ?? null,
        ':serial_number' => $serialNumber,
        ':appt_type' => $appointmentType,
        ':appt_status' => $appointmentStatus,
        ':chief_complaint' => $input['chief_complaint'] ?? null,
        ':notes' => $input['notes'] ?? null,
        ':is_public_request' => isset($input['is_public_request']) ? (int)$input['is_public_request'] : 0,
        ':created_by' => $user['id'],
    ]);
    
    $appointmentId = (int)$db->lastInsertId();
    
    logAudit($user['id'], null, 'create', 'appointment', $appointmentId);
    
    successResponse(['id' => $appointmentId, 'serial_number' => $serialNumber], 'Appointment created successfully');
    
} catch (\Exception $e) {
    error_log('Create appointment error: ' . $e->getMessage());
    errorResponse('Failed to create appointment', 500);
}
