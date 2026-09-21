<?php
/**
 * Update Patient API
 * 
 * POST /api/patients/update.php
 * Body: { id, fullName, nameBn, dateOfBirth, gender, phone, email, ... }
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
    errorResponse('Patient ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    // Fetch existing patient
    $stmt = $db->prepare('SELECT * FROM patients WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    
    if (!$existing) {
        errorResponse('Patient not found', 404);
    }
    
    // Build update fields
    $updates = [];
    $params = [':id' => $id];
    
    $fields = [
        'full_name' => 'fullName',
        'name_bn' => 'nameBn',
        'gender' => 'gender',
        'phone' => 'phone',
        'email' => 'email',
        'address' => 'address',
        'blood_group' => 'bloodGroup',
        'patient_type' => 'patientType',
        'photo_url' => 'photo',
        'status' => 'status',
    ];
    
    foreach ($fields as $dbField => $inputKey) {
        if (isset($input[$inputKey])) {
            $value = null;
            if ($inputKey === 'gender') {
                $value = in_array($input[$inputKey], ['male', 'female', 'other']) ? $input[$inputKey] : 'male';
            } elseif ($inputKey === 'patientType') {
                $value = in_array($input[$inputKey], ['outdoor', 'indoor', 'emergency', 'admitted']) ? $input[$inputKey] : 'outdoor';
            } elseif ($inputKey === 'phone') {
                $value = sanitizePhone($input[$inputKey]);
            } elseif ($inputKey === 'email') {
                $value = sanitizeEmail($input[$inputKey]);
            } elseif ($inputKey === 'bloodGroup') {
                $value = $input[$inputKey] === 'unknown' ? null : sanitizeString($input[$inputKey]);
            } else {
                $value = sanitizeString($input[$inputKey]);
            }
            $updates[] = "$dbField = :$dbField";
            $params[":$dbField"] = $value ?: null;
        }
    }
    
    // Handle numeric fields
    if (isset($input['weight'])) {
        $updates[] = 'weight = :weight';
        $params[':weight'] = floatval($input['weight']) ?: null;
    }
    if (isset($input['height'])) {
        $updates[] = 'height = :height';
        $params[':height'] = floatval($input['height']) ?: null;
    }
    if (isset($input['dateOfBirth'])) {
        $updates[] = 'date_of_birth = :date_of_birth';
        $params[':date_of_birth'] = $input['dateOfBirth'] ?: null;
    }
    
    // Handle JSON fields
    if (isset($input['allergies'])) {
        $updates[] = 'allergies = :allergies';
        $params[':allergies'] = json_encode($input['allergies']);
    }
    if (isset($input['chronicConditions'])) {
        $updates[] = 'chronic_conditions = :chronic_conditions';
        $params[':chronic_conditions'] = json_encode($input['chronicConditions']);
    }
    if (isset($input['pastSurgicalHistory'])) {
        $updates[] = 'past_surgical_history = :past_surgical_history';
        $params[':past_surgical_history'] = sanitizeString($input['pastSurgicalHistory']);
    }
    
    if (empty($updates)) {
        errorResponse('No fields to update', 400);
    }
    
    $updates[] = 'updated_at = NOW()';
    $updateStr = implode(', ', $updates);
    
    $db->beginTransaction();
    
    $updateStmt = $db->prepare("UPDATE patients SET $updateStr WHERE id = :id");
    $updateStmt->execute($params);
    
    // Fetch updated patient
    $fetchStmt = $db->prepare('SELECT * FROM patients WHERE id = :id');
    $fetchStmt->execute([':id' => $id]);
    $updated = $fetchStmt->fetch();
    
    $db->commit();
    
    logAudit($user['id'], $id, 'update', 'patient', $id, $existing, $updated);
    
    successResponse($updated, 'Patient updated successfully');
    
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Update patient error: ' . $e->getMessage());
    errorResponse('Failed to update patient', 500);
}
