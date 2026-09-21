<?php
/**
 * Create Investigation API
 * 
 * POST /api/investigations/create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['patient_id', 'test_name']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

try {
    $db = Database::getInstance();
    
    // Verify patient exists
    $check = $db->prepare('SELECT id FROM patients WHERE id = :id');
    $check->execute([':id' => (int)$input['patient_id']]);
    if (!$check->fetch()) {
        errorResponse('Patient not found', 404);
    }
    
    $stmt = $db->prepare('
        INSERT INTO investigations (patient_id, visit_id, test_name, test_category, instructions, status, ordered_by)
        VALUES (:patient_id, :visit_id, :test_name, :test_category, :instructions, :status, :ordered_by)
    ');
    
    $stmt->execute([
        ':patient_id' => (int)$input['patient_id'],
        ':visit_id' => isset($input['visit_id']) ? (int)$input['visit_id'] : null,
        ':test_name' => $input['test_name'],
        ':test_category' => $input['test_category'] ?? null,
        ':instructions' => $input['instructions'] ?? null,
        ':status' => 'ordered',
        ':ordered_by' => $user['id'],
    ]);
    
    $investigationId = (int)$db->lastInsertId();
    
    // Fetch created investigation
    $fetchStmt = $db->prepare('SELECT * FROM investigations WHERE id = :id');
    $fetchStmt->execute([':id' => $investigationId]);
    $investigation = $fetchStmt->fetch();
    
    logAudit($user['id'], $input['patient_id'], 'create', 'investigation', $investigationId);
    
    successResponse($investigation, 'Investigation ordered successfully');
    
} catch (\Exception $e) {
    error_log('Create investigation error: ' . $e->getMessage());
    errorResponse('Failed to order investigation', 500);
}
