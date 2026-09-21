<?php
/**
 * List Admissions API
 * GET /api/admissions/list.php?status=admitted
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
    $status = getParam('status', '');
    if ($status) { $where[] = 'a.status = :status'; $params[':status'] = $status; }
    $patientId = getParam('patientId', '');
    if ($patientId) { $where[] = 'a.patient_id = :patient_id'; $params[':patient_id'] = (int)$patientId; }
    $whereClause = 'WHERE ' . implode(' AND ', $where);
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM admissions a $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    $stmt = $db->prepare("SELECT a.*, u.full_name as doctor_name, p.full_name as patient_name, p.phone as patient_phone FROM admissions a LEFT JOIN users u ON a.admitting_doctor = u.id LEFT JOIN patients p ON a.patient_id = p.id $whereClause ORDER BY a.created_at DESC LIMIT :limit OFFSET :offset");
    foreach ($params as $key => $val) $stmt->bindValue($key, $val);
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    paginatedResponse($stmt->fetchAll(), $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List admissions error: ' . $e->getMessage());
    errorResponse('Failed to fetch admissions', 500);
}
