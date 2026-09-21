<?php
/**
 * Create Patient API
 * 
 * POST /api/patients/create.php
 * Body: { fullName, nameBn, dateOfBirth, gender, phone, email, address, bloodGroup, weight, height, patientType, photo? }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

// Validate required fields
$missing = validateRequired($input, ['fullName', 'gender']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

$fullName = sanitizeString($input['fullName']);
$nameBn = isset($input['nameBn']) ? sanitizeString($input['nameBn']) : null;
$dateOfBirth = $input['dateOfBirth'] ?? null;
$gender = in_array($input['gender'], ['male', 'female', 'other']) ? $input['gender'] : 'male';
$phone = isset($input['phone']) ? sanitizePhone($input['phone']) : null;
$email = isset($input['email']) ? sanitizeEmail($input['email']) : null;
$address = isset($input['address']) ? sanitizeString($input['address']) : null;
$bloodGroup = isset($input['bloodGroup']) ? sanitizeString($input['bloodGroup']) : null;
$weight = isset($input['weight']) ? floatval($input['weight']) : null;
$height = isset($input['height']) ? floatval($input['height']) : null;
$patientType = in_array($input['patientType'] ?? 'outdoor', ['outdoor', 'indoor', 'emergency', 'admitted']) ? $input['patientType'] : 'outdoor';
$photoUrl = isset($input['photo']) ? sanitizeString($input['photo']) : null;

// Validate email format
if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    errorResponse('Invalid email format', 400);
}

try {
    $db = Database::getInstance();
    
    // Check for duplicate phone
    if ($phone) {
        $stmt = $db->prepare('SELECT id FROM patients WHERE phone = :phone LIMIT 1');
        $stmt->execute([':phone' => $phone]);
        if ($stmt->fetch()) {
            errorResponse('A patient with this phone number already exists', 409, [
                'field' => 'phone',
                'duplicate' => true,
            ]);
        }
    }
    
    // Check for duplicate email
    if ($email) {
        $stmt = $db->prepare('SELECT id FROM patients WHERE email = :email LIMIT 1');
        $stmt->execute([':email' => $email]);
        if ($stmt->fetch()) {
            errorResponse('A patient with this email already exists', 409, [
                'field' => 'email',
                'duplicate' => true,
            ]);
        }
    }
    
    // Generate register number
    $year = date('Y');
    $month = date('m');
    $countStmt = $db->prepare('SELECT COUNT(*) as cnt FROM patients WHERE YEAR(created_at) = :year');
    $countStmt->execute([':year' => $year]);
    $count = (int)$countStmt->fetch()['cnt'] + 1;
    $registerNumber = sprintf('REG-%s%s-%04d', $year, $month, $count);
    
    $db->beginTransaction();
    
    // Read allergies, chronic_conditions, past_surgical_history (camelCase input)
    $allergies = isset($input['allergies']) ? $input['allergies'] : [];
    $chronicConditions = isset($input['chronicConditions']) ? $input['chronicConditions'] : [];
    $pastSurgicalHistory = isset($input['pastSurgicalHistory']) ? sanitizeString($input['pastSurgicalHistory']) : null;
    
    $stmt = $db->prepare('
        INSERT INTO patients (
            register_number, full_name, name_bn, date_of_birth, gender,
            phone, email, address, blood_group, weight, height,
            allergies, chronic_conditions, past_surgical_history,
            patient_type, photo_url, registration_complete, created_by
        ) VALUES (
            :register_number, :full_name, :name_bn, :date_of_birth, :gender,
            :phone, :email, :address, :blood_group, :weight, :height,
            :allergies, :chronic_conditions, :past_surgical_history,
            :patient_type, :photo_url, 1, :created_by
        )
    ');
    
    $stmt->execute([
        ':register_number' => $registerNumber,
        ':full_name' => $fullName,
        ':name_bn' => $nameBn,
        ':date_of_birth' => $dateOfBirth,
        ':gender' => $gender,
        ':phone' => $phone,
        ':email' => $email,
        ':address' => $address,
        ':blood_group' => $bloodGroup,
        ':weight' => $weight,
        ':height' => $height,
        ':allergies' => json_encode($allergies),
        ':chronic_conditions' => json_encode($chronicConditions),
        ':past_surgical_history' => $pastSurgicalHistory,
        ':patient_type' => $patientType,
        ':photo_url' => $photoUrl,
        ':created_by' => $user['id'],
    ]);
    
    $patientId = (int)$db->lastInsertId();
    
    // Fetch the created patient
    $fetchStmt = $db->prepare('SELECT * FROM patients WHERE id = :id');
    $fetchStmt->execute([':id' => $patientId]);
    $patient = $fetchStmt->fetch();
    
    $db->commit();
    
    logAudit($user['id'], $patientId, 'create', 'patient', $patientId, null, $patient);
    
    successResponse($patient, 'Patient registered successfully');
    
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Create patient error: ' . $e->getMessage());
    errorResponse('Failed to register patient', 500);
}
