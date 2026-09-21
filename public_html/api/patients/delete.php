<?php
/**
 * Delete Patient API
 * 
 * POST /api/patients/delete.php
 * Body: { id: 123 }
 * Only admin can delete patients.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAdmin();
$input = getJsonInput();

$id = (int)($input['id'] ?? 0);
if (!$id) {
    errorResponse('Patient ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    // Fetch existing patient
    $stmt = $db->prepare('SELECT id, full_name, register_number FROM patients WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    
    if (!$existing) {
        errorResponse('Patient not found', 404);
    }
    
    // Begin transaction for cascading delete
    $db->beginTransaction();
    
    // Delete related records first (foreign keys handle most via CASCADE)
    $tables = ['visits', 'prescriptions', 'appointments', 'vital_signs', 'clinical_notes', 'investigations', 'payments', 'invoices', 'referrals', 'chat_messages', 'teleconsults', 'consent_forms', 'medication_admin_records', 'drug_reminders'];
    foreach ($tables as $table) {
        $db->prepare("DELETE FROM $table WHERE patient_id = :id")->execute([':id' => $id]);
    }
    
    // Delete patient
    $stmt = $db->prepare('DELETE FROM patients WHERE id = :id');
    $stmt->execute([':id' => $id]);
    
    $db->commit();
    
    logAudit($user['id'], $id, 'delete', 'patient', $id, $existing);
    
    successResponse(null, 'Patient and all related records deleted successfully');
    
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Delete patient error: ' . $e->getMessage());
    errorResponse('Failed to delete patient', 500);
}
