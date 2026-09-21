<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('GET');
$user = requireAuth();
$pagination = getPaginationParams();
try {
    $db = Database::getInstance();
    $patientId = getParam('patientId', '');
    $where = ['p.status IN (\'pending\', \'unpaid\', \'overdue\')'];
    $params = [];
    if ($patientId) { $where[] = 'p.patient_id = :patient_id'; $params[':patient_id'] = (int)$patientId; }
    $whereClause = 'WHERE ' . implode(' AND ', $where);
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM payments p $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    $stmt = $db->prepare("SELECT p.*, pt.full_name as patient_name FROM payments p LEFT JOIN patients pt ON p.patient_id = pt.id $whereClause ORDER BY p.created_at DESC LIMIT :limit OFFSET :offset");
    foreach ($params as $key => $val) $stmt->bindValue($key, $val);
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    paginatedResponse($stmt->fetchAll(), $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List outstanding payments error: ' . $e->getMessage());
    errorResponse('Failed to fetch outstanding payments', 500);
}
