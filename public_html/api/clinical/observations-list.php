<?php
/**
 * List Observations (Vital Signs) API
 * GET /api/clinical/observations-list.php?patientId=1
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('GET');
$user = requireAuth();
$pagination = getPaginationParams();
try {
    $db = Database::getInstance();
    $where = ['1=1'];
    $params = [];
    $patientId = getParam('patientId', '');
    if ($patientId) { $where[] = 'patient_id = :patient_id'; $params[':patient_id'] = (int)$patientId; }
    $whereClause = 'WHERE ' . implode(' AND ', $where);
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM vital_signs $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    $stmt = $db->prepare("SELECT * FROM vital_signs $whereClause ORDER BY recorded_at DESC LIMIT :limit OFFSET :offset");
    foreach ($params as $key => $val) $stmt->bindValue($key, $val);
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    paginatedResponse($stmt->fetchAll(), $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List observations error: ' . $e->getMessage());
    errorResponse('Failed to fetch observations', 500);
}
