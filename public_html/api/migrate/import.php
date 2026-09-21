<?php
/**
 * Data Migration Script: localStorage → MySQL
 * 
 * POST /api/migrate/import.php
 * Admin-only endpoint to import legacy localStorage data into MySQL.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAdmin();
$input = getJsonInput();

if (empty($input)) {
    errorResponse('No data provided', 400);
}

try {
    $db = Database::getInstance();
    $db->beginTransaction();
    
    $stats = [
        'patients_imported' => 0,
        'patients_skipped' => 0,
        'visits_imported' => 0,
        'prescriptions_imported' => 0,
        'appointments_imported' => 0,
    ];
    
    // ─── Import Patients ─────────────────────────────────────────────────
    if (isset($input['patients']) && is_array($input['patients'])) {
        $stmt = $db->prepare('
            INSERT INTO patients (full_name, name_bn, date_of_birth, gender, phone, email, address, blood_group, weight, height, patient_type, status, created_at)
            VALUES (:full_name, :name_bn, :date_of_birth, :gender, :phone, :email, :address, :blood_group, :weight, :height, :patient_type, :status, :created_at)
            ON DUPLICATE KEY UPDATE id=id
        ');
        
        foreach ($input['patients'] as $patient) {
            $fullName = $patient['fullName'] ?? $patient['full_name'] ?? '';
            if (empty($fullName)) continue;
            
            $check = $db->prepare('SELECT id FROM patients WHERE full_name = :fn AND (phone = :ph OR (:ph IS NULL AND phone IS NULL)) LIMIT 1');
            $check->execute([':fn' => $fullName, ':ph' => $patient['phone'] ?? null]);
            if ($check->fetch()) {
                $stats['patients_skipped']++;
                continue;
            }
            
            $stmt->execute([
                ':full_name' => $fullName,
                ':name_bn' => $patient['nameBn'] ?? $patient['name_bn'] ?? null,
                ':date_of_birth' => $patient['dateOfBirth'] ?? null,
                ':gender' => $patient['gender'] ?? 'male',
                ':phone' => $patient['phone'] ?? null,
                ':email' => $patient['email'] ?? null,
                ':address' => $patient['address'] ?? null,
                ':blood_group' => $patient['bloodGroup'] ?? $patient['blood_group'] ?? null,
                ':weight' => $patient['weight'] ?? null,
                ':height' => $patient['height'] ?? null,
                ':patient_type' => $patient['patientType'] ?? $patient['patient_type'] ?? 'outdoor',
                ':status' => $patient['status'] ?? 'Active',
                ':created_at' => $patient['createdAt'] ?? date('Y-m-d H:i:s'),
            ]);
            $stats['patients_imported']++;
        }
    }
    
    // ─── Import Visits ──────────────────────────────────────────────────
    if (isset($input['visits']) && is_array($input['visits'])) {
        $stmt = $db->prepare('
            INSERT INTO visits (patient_id, visit_date, chief_complaint, history_of_present_illness, physical_examination, diagnosis, notes, visit_type, created_at)
            VALUES (:patient_id, :visit_date, :chief_complaint, :hpI, :pe, :diagnosis, :notes, :visit_type, :created_at)
        ');
        
        foreach ($input['visits'] as $visit) {
            $stmt->execute([
                ':patient_id' => (int)($visit['patientId'] ?? $visit['patient_id'] ?? 0),
                ':visit_date' => $visit['visitDate'] ?? $visit['visit_date'] ?? date('Y-m-d'),
                ':chief_complaint' => $visit['chiefComplaint'] ?? $visit['chief_complaint'] ?? '',
                ':hpI' => $visit['historyOfPresentIllness'] ?? $visit['history_of_present_illness'] ?? null,
                ':pe' => $visit['physicalExamination'] ?? $visit['physical_examination'] ?? null,
                ':diagnosis' => $visit['diagnosis'] ?? null,
                ':notes' => $visit['notes'] ?? null,
                ':visit_type' => $visit['visitType'] ?? $visit['visit_type'] ?? 'outpatient',
                ':created_at' => $visit['createdAt'] ?? date('Y-m-d H:i:s'),
            ]);
            $stats['visits_imported']++;
        }
    }
    
    // ─── Import Prescriptions ───────────────────────────────────────────
    if (isset($input['prescriptions']) && is_array($input['prescriptions'])) {
        foreach ($input['prescriptions'] as $rx) {
            $rxStmt = $db->prepare('
                INSERT INTO prescriptions (patient_id, visit_id, prescription_date, diagnosis, notes, created_at)
                VALUES (:patient_id, :visit_id, :rx_date, :diagnosis, :notes, :created_at)
            ');
            $rxStmt->execute([
                ':patient_id' => (int)($rx['patientId'] ?? $rx['patient_id'] ?? 0),
                ':visit_id' => isset($rx['visitId']) ? (int)$rx['visitId'] : null,
                ':rx_date' => $rx['prescriptionDate'] ?? $rx['prescription_date'] ?? date('Y-m-d'),
                ':diagnosis' => $rx['diagnosis'] ?? null,
                ':notes' => $rx['notes'] ?? null,
                ':created_at' => $rx['createdAt'] ?? date('Y-m-d H:i:s'),
            ]);
            
            $prescriptionId = (int)$db->lastInsertId();
            
            if (isset($rx['medications']) && is_array($rx['medications'])) {
                $medStmt = $db->prepare('
                    INSERT INTO prescription_medications (prescription_id, name, dose, frequency, duration, instructions, sort_order)
                    VALUES (:pid, :name, :dose, :frequency, :duration, :instructions, :sort_order)
                ');
                
                foreach ($rx['medications'] as $idx => $med) {
                    $medStmt->execute([
                        ':pid' => $prescriptionId,
                        ':name' => $med['name'] ?? '',
                        ':dose' => $med['dose'] ?? null,
                        ':frequency' => $med['frequency'] ?? null,
                        ':duration' => $med['duration'] ?? null,
                        ':instructions' => $med['instructions'] ?? null,
                        ':sort_order' => $idx,
                    ]);
                }
            }
            $stats['prescriptions_imported']++;
        }
    }
    
    // ─── Import Appointments ────────────────────────────────────────────
    if (isset($input['appointments']) && is_array($input['appointments'])) {
        $stmt = $db->prepare('
            INSERT INTO appointments (patient_id, patient_name, patient_phone, doctor_id, appointment_date, appointment_time, serial_number, type, status, chief_complaint, notes, created_at)
            VALUES (:patient_id, :patient_name, :patient_phone, :doctor_id, :app_date, :app_time, :serial, :appt_type, :appt_status, :complaint, :notes, :created_at)
        ');
        
        foreach ($input['appointments'] as $apt) {
            $stmt->execute([
                ':patient_id' => isset($apt['patientId']) ? (int)$apt['patientId'] : null,
                ':patient_name' => $apt['patientName'] ?? $apt['patient_name'] ?? null,
                ':patient_phone' => $apt['patientPhone'] ?? $apt['patient_phone'] ?? null,
                ':doctor_id' => isset($apt['doctorId']) ? (int)$apt['doctorId'] : null,
                ':app_date' => $apt['appointmentDate'] ?? $apt['appointment_date'] ?? date('Y-m-d'),
                ':app_time' => $apt['appointmentTime'] ?? $apt['appointment_time'] ?? null,
                ':serial' => $apt['serialNumber'] ?? $apt['serial_number'] ?? null,
                ':appt_type' => $apt['type'] ?? 'regular',
                ':appt_status' => $apt['status'] ?? 'scheduled',
                ':complaint' => $apt['chiefComplaint'] ?? $apt['chief_complaint'] ?? null,
                ':notes' => $apt['notes'] ?? null,
                ':created_at' => $apt['createdAt'] ?? date('Y-m-d H:i:s'),
            ]);
            $stats['appointments_imported']++;
        }
    }
    
    $db->commit();
    
    logAudit($user['id'], null, 'migrate', 'data', null, null, $stats);
    
    successResponse($stats, 'Data migration completed successfully');
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Migration error: ' . $e->getMessage());
    errorResponse('Migration failed: ' . $e->getMessage(), 500);
}
