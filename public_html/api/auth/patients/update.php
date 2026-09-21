<?php
/**
 * Update Patient Credentials API
 * 
 * POST /api/auth/patients/update.php
 * Headers: Authorization: Bearer <staff-or-patient-token>
 * Body: { "register_number": "RN-001", "phone": "01XXXXXXXXX", "password": "newpass" }
 * 
 * Patients can update their own phone number and/or password.
 * Staff/Admin can also update patient credentials.
 */

require_once __DIR__ . '/../../database.php';
require_once __DIR__ . '/../../helpers.php';
require_once __DIR__ . '/../middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();

$input = getJsonInput();
$missing = validateRequired($input, ['register_number']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$registerNumber = sanitizeString($input['register_number']);
$newPhone = isset($input['phone']) ? sanitizePhone($input['phone']) : null;
$newPassword = isset($input['password']) ? $input['password'] : null;

if (!$newPhone && !$newPassword) {
    errorResponse('At least one of phone or password must be provided', 400);
}

if ($newPassword) {
    $passwordError = validatePasswordStrength($newPassword);
    if ($passwordError) {
        errorResponse($passwordError, 400);
    }
}

try {
    $db = Database::getInstance();
    
    // Find the patient by register number
    $stmt = $db->prepare('SELECT id FROM patients WHERE register_number = :rn LIMIT 1');
    $stmt->execute([':rn' => $registerNumber]);
    $patient = $stmt->fetch();
    
    if (!$patient) {
        errorResponse('Patient not found with this register number', 404);
    }
    
    $patientId = (int)$patient['id'];
    
    // Find the patient login record
    $stmt = $db->prepare('SELECT * FROM patient_login WHERE patient_id = :pid LIMIT 1');
    $stmt->execute([':pid' => $patientId]);
    $loginRecord = $stmt->fetch();
    
    if (!$loginRecord) {
        errorResponse('Patient login record not found', 404);
    }
    
    // Build update
    $updates = [];
    $params = [':id' => $loginRecord['id']];
    
    if ($newPhone) {
        $updates[] = 'phone = :phone';
        $params[':phone'] = $newPhone;
    }
    
    if ($newPassword) {
        $updates[] = 'password_hash = :password_hash';
        $params[':password_hash'] = password_hash($newPassword, PASSWORD_BCRYPT);
    }
    
    if (!empty($updates)) {
        $updates[] = 'updated_at = NOW()';
        $updateStr = implode(', ', $updates);
        $stmt = $db->prepare("UPDATE patient_login SET $updateStr WHERE id = :id");
        $stmt->execute($params);
    }
    
    successResponse([
        'register_number' => $registerNumber,
        'phone_updated' => $newPhone !== null,
        'password_updated' => $newPassword !== null,
    ], 'Patient credentials updated successfully');
    
} catch (\Exception $e) {
    error_log('Update patient credentials error: ' . $e->getMessage());
    errorResponse('Failed to update patient credentials', 500);
}
