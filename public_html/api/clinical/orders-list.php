<?php
/**
 * List Clinical Orders API
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
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM investigations $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    $stmt = $db->prepare("SELECT i.*, u.full_name as ordered_by_name FROM investigations i LEFT JOIN users u ON i.ordered_by = u.id $whereClause ORDER BY i.created_at DESC LIMIT :limit OFFSET :offset");
    foreach ($params as $key => $val) $stmt->bindValue($key, $val);
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    paginatedResponse($stmt->fetchAll(), $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List orders error: ' . $e->getMessage());
    errorResponse('Failed to fetch orders', 500);
}
