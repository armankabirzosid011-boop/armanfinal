<?php
/**
 * List Beds API
 * GET /api/beds/list.php?ward=ICU&status=available
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
    $ward = getParam('ward', '');
    if ($ward) { $where[] = 'ward = :ward'; $params[':ward'] = $ward; }
    $status = getParam('status', '');
    if ($status) { $where[] = 'status = :status'; $params[':status'] = $status; }
    $whereClause = 'WHERE ' . implode(' AND ', $where);
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM beds $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    $stmt = $db->prepare("SELECT b.*, p.full_name as patient_name FROM beds b LEFT JOIN patients p ON b.current_patient_id = p.id $whereClause ORDER BY b.ward, b.bed_number LIMIT :limit OFFSET :offset");
    foreach ($params as $key => $val) $stmt->bindValue($key, $val);
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    paginatedResponse($stmt->fetchAll(), $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List beds error: ' . $e->getMessage());
    errorResponse('Failed to fetch beds', 500);
}
