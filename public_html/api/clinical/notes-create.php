<?php
/**
 * Clinical Notes API - Create
 * 
 * POST /api/clinical/notes-create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['patient_id', 'note_type']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('
        INSERT INTO clinical_notes (patient_id, visit_id, note_type, subjective, objective, assessment, plan, additional_notes, created_by)
        VALUES (:patient_id, :visit_id, :note_type, :subjective, :objective, :assessment, :plan, :additional_notes, :created_by)
    ');
    
    $stmt->execute([
        ':patient_id' => (int)$input['patient_id'],
        ':visit_id' => isset($input['visit_id']) ? (int)$input['visit_id'] : null,
        ':note_type' => $input['note_type'],
        ':subjective' => $input['subjective'] ?? null,
        ':objective' => $input['objective'] ?? null,
        ':assessment' => $input['assessment'] ?? null,
        ':plan' => $input['plan'] ?? null,
        ':additional_notes' => $input['additional_notes'] ?? null,
        ':created_by' => $user['id'],
    ]);
    
    $noteId = (int)$db->lastInsertId();
    
    logAudit($user['id'], (int)$input['patient_id'], 'create', 'clinical_note', $noteId);
    
    successResponse(['id' => $noteId], 'Clinical note created successfully');
} catch (\Exception $e) {
    error_log('Create clinical note error: ' . $e->getMessage());
    errorResponse('Failed to create clinical note', 500);
}
