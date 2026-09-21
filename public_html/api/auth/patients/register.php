<?php
/**
 * Patient Registration API
 * 
 * POST /api/auth/patients/register.php
 * Body: { "register_number": "...", "phone": "...", "password": "..." }
 * 
 * Creates a patient login account with status='pending'.
 * A doctor/nurse must approve before the patient can log in.
 * The register_number must exist in the patients table.
 */

require_once __DIR__ . '/../../database.php';
require_once __DIR__ . '/../../helpers.php';

handleCors();
requireMethod('POST');
checkRateLimit('patient_register_' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));

$input = getJsonInput();

$missing = validateRequired($input, ['register_number', 'phone', 'password']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$registerNumber = trim($input['register_number']);
$phone = sanitizePhone($input['phone']);
$password = $input['password'];

// Validate phone
if (empty($phone)) {
    errorResponse('Invalid phone number', 400);
}

// Validate password
if (strlen($password) < 6) {
    errorResponse('Password must be at least 6 characters', 400);
}

try {
    $db = Database::getInstance();
    
    // Find the patient by register number
    $stmt = $db->prepare('SELECT id, full_name, name_bn, date_of_birth, gender, phone as patient_phone, register_number FROM patients WHERE register_number = :rn LIMIT 1');
    $stmt->execute([':rn' => $registerNumber]);
    $patient = $stmt->fetch();
    
    if (!$patient) {
        errorResponse(
            'Register number not found. Please make sure you enter the exact register number given by the clinic (e.g. 0001/26). Contact the clinic if you need help.',
            404
        );
    }
    
    // Check if phone already registered
    $stmt = $db->prepare('SELECT id, status FROM patient_login WHERE phone = :phone LIMIT 1');
    $stmt->execute([':phone' => $phone]);
    $existingByPhone = $stmt->fetch();
    
    if ($existingByPhone) {
        if ($existingByPhone['status'] === 'rejected') {
            // Re-registration - update the record
            $passwordHash = password_hash($password, PASSWORD_BCRYPT);
            $updateStmt = $db->prepare('
                UPDATE patient_login SET 
                    patient_id = :patient_id,
                    password_hash = :password_hash,
                    full_name = :full_name,
                    name_bn = :name_bn,
                    status = "pending",
                    approved_by = NULL,
                    approved_at = NULL,
                    updated_at = NOW()
                WHERE id = :id
            ');
            $updateStmt->execute([
                ':patient_id' => $patient['id'],
                ':password_hash' => $passwordHash,
                ':full_name' => $patient['full_name'],
                ':name_bn' => $patient['name_bn'],
                ':id' => $existingByPhone['id'],
            ]);
            
            successResponse([
                'message' => 'Your account has been re-submitted for approval. Please wait for doctor approval.',
                'status' => 'pending',
            ], 'Registration updated');
        }
        
        errorResponse('An account with this phone number already exists.', 409);
    }
    
    // Check if register number already has a pending/approved login
    $stmt = $db->prepare('SELECT id, status FROM patient_login WHERE patient_id = :pid LIMIT 1');
    $stmt->execute([':pid' => $patient['id']]);
    $existingByPatient = $stmt->fetch();
    
    if ($existingByPatient) {
        if ($existingByPatient['status'] === 'rejected') {
            // Update the rejected record with new phone
            $passwordHash = password_hash($password, PASSWORD_BCRYPT);
            $updateStmt = $db->prepare('
                UPDATE patient_login SET 
                    phone = :phone,
                    password_hash = :password_hash,
                    full_name = :full_name,
                    name_bn = :name_bn,
                    status = "pending",
                    approved_by = NULL,
                    approved_at = NULL,
                    updated_at = NOW()
                WHERE id = :id
            ');
            $updateStmt->execute([
                ':phone' => $phone,
                ':password_hash' => $passwordHash,
                ':full_name' => $patient['full_name'],
                ':name_bn' => $patient['name_bn'],
                ':id' => $existingByPatient['id'],
            ]);
            
            successResponse([
                'message' => 'Your account has been re-submitted for approval. Please wait for doctor approval.',
                'status' => 'pending',
            ], 'Registration updated');
        }
        
        errorResponse('An account for this register number already exists. Please log in instead.', 409);
    }
    
    // Create new patient login
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    
    $stmt = $db->prepare('
        INSERT INTO patient_login (patient_id, phone, password_hash, full_name, name_bn, status)
        VALUES (:patient_id, :phone, :password_hash, :full_name, :name_bn, "pending")
    ');
    $stmt->execute([
        ':patient_id' => $patient['id'],
        ':phone' => $phone,
        ':password_hash' => $passwordHash,
        ':full_name' => $patient['full_name'],
        ':name_bn' => $patient['name_bn'],
    ]);
    
    successResponse([
        'patient_login_id' => (int)$db->lastInsertId(),
        'message' => 'Account created! Please wait for doctor approval before logging in.',
        'status' => 'pending',
    ], 'Registration successful');
    
} catch (\Exception $e) {
    error_log('Patient registration error: ' . $e->getMessage());
    errorResponse('Registration failed. Please try again.', 500);
}
