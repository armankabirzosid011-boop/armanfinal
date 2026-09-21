<?php
/**
 * Update Prescription API
 * 
 * POST /api/prescriptions/update.php
 * Accepts camelCase field names: id, patientId, visitId?, diagnosis, notes, medications[...]
 * Medications are fully replaced (delete all, re-insert).
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$id = (int)($input['id'] ?? 0);
if (!$id) errorResponse('Prescription ID is required', 400);

try {
    $db = Database::getInstance();
    
    // Fetch existing
    $stmt = $db->prepare('SELECT * FROM prescriptions WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    if (!$existing) errorResponse('Prescription not found', 404);
    
    $db->beginTransaction();
    
    // Update prescription fields
    $stmt = $db->prepare('
        UPDATE prescriptions SET 
            visit_id = :visit_id,
            prescription_date = :prescription_date,
            diagnosis = :diagnosis,
            notes = :notes,
            updated_at = NOW()
        WHERE id = :id
    ');
    $stmt->execute([
        ':visit_id' => isset($input['visitId']) ? (int)$input['visitId'] : $existing['visit_id'],
        ':prescription_date' => $input['prescriptionDate'] ?? $existing['prescription_date'],
        ':diagnosis' => $input['diagnosis'] ?? $existing['diagnosis'],
        ':notes' => $input['notes'] ?? $existing['notes'],
        ':id' => $id,
    ]);
    
    // If medications provided, replace all
    if (isset($input['medications']) && is_array($input['medications'])) {
        // Delete old medications
        $db->prepare('DELETE FROM prescription_medications WHERE prescription_id = :pid')->execute([':pid' => $id]);
        
        // Insert new medications
        $medStmt = $db->prepare('
            INSERT INTO prescription_medications (
                prescription_id, name, dose, frequency, duration, instructions,
                drug_form, route, is_prn, prn_condition,
                iv_im_dose_format, loading_dose, maintenance_dose,
                infusion_rate, infusion_unit, sort_order
            ) VALUES (
                :prescription_id, :name, :dose, :frequency, :duration, :instructions,
                :drug_form, :route, :is_prn, :prn_condition,
                :iv_im_dose_format, :loading_dose, :maintenance_dose,
                :infusion_rate, :infusion_unit, :sort_order
            )
        ');
        
        foreach ($input['medications'] as $index => $med) {
            $medStmt->execute([
                ':prescription_id' => $id,
                ':name' => $med['name'] ?? '',
                ':dose' => $med['dose'] ?? null,
                ':frequency' => $med['frequency'] ?? null,
                ':duration' => $med['duration'] ?? null,
                ':instructions' => $med['instructions'] ?? null,
                ':drug_form' => $med['drugForm'] ?? $med['drug_form'] ?? null,
                ':route' => $med['route'] ?? null,
                ':is_prn' => isset($med['isPrn']) ? (int)(filter_var($med['isPrn'], FILTER_VALIDATE_BOOLEAN)) : (isset($med['is_prn']) ? (int)$med['is_prn'] : 0),
                ':prn_condition' => $med['prnCondition'] ?? $med['prn_condition'] ?? null,
                ':iv_im_dose_format' => $med['ivImDoseFormat'] ?? $med['iv_im_dose_format'] ?? null,
                ':loading_dose' => $med['loadingDose'] ?? $med['loading_dose'] ?? null,
                ':maintenance_dose' => $med['maintenanceDose'] ?? $med['maintenance_dose'] ?? null,
                ':infusion_rate' => $med['infusionRate'] ?? $med['infusion_rate'] ?? null,
                ':infusion_unit' => $med['infusionUnit'] ?? $med['infusion_unit'] ?? null,
                ':sort_order' => $index,
            ]);
        }
    }
    
    $db->commit();
    
    logAudit($user['id'], $existing['patient_id'], 'update', 'prescription', $id, $existing);
    successResponse(null, 'Prescription updated successfully');
    
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Update prescription error: ' . $e->getMessage());
    errorResponse('Failed to update prescription', 500);
}
