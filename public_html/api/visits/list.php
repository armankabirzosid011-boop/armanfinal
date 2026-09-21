<?php
/**
 * List Visits API
 * 
 * GET /api/visits/list.php?patient_id=123&page=1&limit=20
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

$pagination = getPaginationParams();

try {
    $db = Database::getInstance();
    
    // Count total
    $countStmt = $db->prepare('SELECT COUNT(*) as total FROM visits WHERE patient_id = :patient_id');
    $countStmt->execute([':patient_id' => $patientId]);
    $total = (int)$countStmt->fetch()['total'];
    
    // Get visits
    $stmt = $db->prepare('
        SELECT v.*, u.full_name as doctor_name
        FROM visits v
        LEFT JOIN users u ON v.created_by = u.id
        WHERE v.patient_id = :patient_id
        ORDER BY v.visit_date DESC, v.created_at DESC
        LIMIT :limit OFFSET :offset
    ');
    $stmt->bindValue(':patient_id', $patientId, PDO::PARAM_INT);
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    
    $visits = $stmt->fetchAll();
    
    // Decode vital_signs JSON
    foreach ($visits as &$v) {
        $v['vital_signs'] = !empty($v['vital_signs']) ? json_decode($v['vital_signs'], true) : null;
    }
    
    paginatedResponse($visits, $total, $pagination['page'], $pagination['limit']);
    
} catch (\Exception $e) {
    error_log('List visits error: ' . $e->getMessage());
    errorResponse('Failed to fetch visits', 500);
}
