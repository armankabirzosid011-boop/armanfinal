<?php
/**
 * Appointments API - Update
 * 
 * POST /api/appointments/update.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$id = (int)($input['id'] ?? 0);
if (!$id) {
    errorResponse('Appointment ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    $updates = [];
    $params = [':id' => $id];
    
    // Validate status if provided
    if (isset($input['status'])) {
        $allowedStatuses = ['scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'cancelled', 'no_show'];
        if (!in_array($input['status'], $allowedStatuses)) {
            errorResponse('Invalid appointment status. Allowed: ' . implode(', ', $allowedStatuses), 400);
        }
    }
    
    $allowedFields = [
        'status' => 'status',
        'appointment_time' => 'appointment_time',
        'chief_complaint' => 'chief_complaint',
        'notes' => 'notes',
        'patient_id' => 'patient_id',
        'patient_name' => 'patient_name',
        'patient_phone' => 'patient_phone',
        'serial_number' => 'serial_number',
    ];
    
    // Validate status value if provided
    if (isset($input['status'])) {
        $allowedStatuses = ['scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'cancelled', 'no_show'];
        if (!in_array($input['status'], $allowedStatuses)) {
            errorResponse('Invalid appointment status. Allowed: ' . implode(', ', $allowedStatuses), 400);
        }
    }
    
    foreach ($allowedFields as $inputKey => $dbField) {
        if (isset($input[$inputKey])) {
            $updates[] = "$dbField = :$dbField";
            $params[":$dbField"] = $input[$inputKey];
        }
    }
    
    if (empty($updates)) {
        errorResponse('No fields to update', 400);
    }
    
    $updates[] = 'updated_at = NOW()';
    $updateStr = implode(', ', $updates);
    
    $stmt = $db->prepare("UPDATE appointments SET $updateStr WHERE id = :id");
    $stmt->execute($params);
    
    logAudit($user['id'], null, 'update', 'appointment', $id);
    
    successResponse(null, 'Appointment updated successfully');
} catch (\Exception $e) {
    error_log('Update appointment error: ' . $e->getMessage());
    errorResponse('Failed to update appointment', 500);
}
