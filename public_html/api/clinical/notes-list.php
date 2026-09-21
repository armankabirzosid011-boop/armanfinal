<?php
/**
 * Clinical Notes API - List
 * 
 * GET /api/clinical/notes-list.php?patient_id=123&type=soap
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();
$patientId = (int)getParam('patient_id', 0);

if (!$patientId) {
    errorResponse('Patient ID is required', 400);
}

$noteType = getParam('type', '');

try {
    $db = Database::getInstance();
    
    $where = 'WHERE patient_id = :patient_id';
    $params = [':patient_id' => $patientId];
    
    if ($noteType) {
        $where .= ' AND note_type = :note_type';
        $params[':note_type'] = $noteType;
    }
    
    $stmt = $db->prepare("
        SELECT cn.*, u.full_name as created_by_name
        FROM clinical_notes cn
        LEFT JOIN users u ON cn.created_by = u.id
        $where
        ORDER BY cn.created_at DESC
        LIMIT 100
    ");
    $stmt->execute($params);
    $notes = $stmt->fetchAll();
    
    successResponse($notes);
} catch (\Exception $e) {
    error_log('List clinical notes error: ' . $e->getMessage());
    errorResponse('Failed to fetch clinical notes', 500);
}
