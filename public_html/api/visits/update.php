<?php
/**
 * Update Visit API
 * 
 * POST /api/visits/update.php
 * Reads camelCase field names from frontend.
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$id = (int)($input['id'] ?? 0);
if (!$id) errorResponse('Visit ID is required', 400);

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('SELECT * FROM visits WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    
    if (!$existing) errorResponse('Visit not found', 404);
    
    $stmt = $db->prepare('
        UPDATE visits SET 
            visit_date = :visit_date, 
            visit_type = :visit_type, 
            chief_complaint = :chief_complaint, 
            vital_signs = :vital_signs,
            history_of_present_illness = :hpi, 
            physical_examination = :pe, 
            diagnosis = :diagnosis, 
            notes = :notes, 
            updated_at = NOW() 
        WHERE id = :id
    ');
    
    $vitalSigns = isset($input['vitalSigns']) ? json_encode($input['vitalSigns']) : ($existing['vital_signs'] ?? null);
    
    $stmt->execute([
        ':visit_date' => $input['visitDate'] ?? $existing['visit_date'],
        ':visit_type' => $input['visitType'] ?? $existing['visit_type'],
        ':chief_complaint' => $input['chiefComplaint'] ?? $existing['chief_complaint'],
        ':vital_signs' => $vitalSigns,
        ':hpi' => $input['historyOfPresentIllness'] ?? $existing['history_of_present_illness'],
        ':pe' => $input['physicalExamination'] ?? $existing['physical_examination'],
        ':diagnosis' => $input['diagnosis'] ?? $existing['diagnosis'],
        ':notes' => $input['notes'] ?? $existing['notes'],
        ':id' => $id,
    ]);
    
    $fetchStmt = $db->prepare('SELECT v.*, u.full_name as doctor_name FROM visits v LEFT JOIN users u ON v.created_by = u.id WHERE v.id = :id');
    $fetchStmt->execute([':id' => $id]);
    $updated = $fetchStmt->fetch();
    
    // Decode vital_signs JSON
    if ($updated && isset($updated['vital_signs'])) {
        $updated['vital_signs'] = json_decode($updated['vital_signs'], true);
    }
    
    logAudit($user['id'], $existing['patient_id'], 'update', 'visit', $id, $existing, $updated);
    successResponse($updated, 'Visit updated successfully');
    
} catch (\Exception $e) {
    error_log('Update visit error: ' . $e->getMessage());
    errorResponse('Failed to update visit', 500);
}
