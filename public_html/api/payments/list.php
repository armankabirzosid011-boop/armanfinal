<?php
/**
 * Payments API - List
 * 
 * GET /api/payments/list.php?patient_id=123&page=1&limit=20
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
    
    $where = [];
    $params = [];
    
    $patientId = getParam('patient_id', '');
    if ($patientId) {
        $where[] = 'p.patient_id = :patient_id';
        $params[':patient_id'] = (int)$patientId;
    }
    
    $type = getParam('type', '');
    if ($type) {
        $where[] = 'p.payment_type = :type';
        $params[':type'] = $type;
    }
    
    $dateFrom = getParam('date_from', '');
    if ($dateFrom) {
        $where[] = 'p.payment_date >= :date_from';
        $params[':date_from'] = $dateFrom;
    }
    
    $dateTo = getParam('date_to', '');
    if ($dateTo) {
        $where[] = 'p.payment_date <= :date_to';
        $params[':date_to'] = $dateTo;
    }
    
    $whereClause = $where ? 'WHERE ' . implode(' AND ', $where) : '';
    
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM payments p $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    
    $stmt = $db->prepare("
        SELECT p.*, 
               pt.full_name as patient_name, pt.register_number,
               u.full_name as received_by_name
        FROM payments p
        LEFT JOIN patients pt ON p.patient_id = pt.id
        LEFT JOIN users u ON p.received_by = u.id
        $whereClause
        ORDER BY p.payment_date DESC, p.created_at DESC
        LIMIT :limit OFFSET :offset
    ");
    
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    
    $payments = $stmt->fetchAll();
    
    paginatedResponse($payments, $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List payments error: ' . $e->getMessage());
    errorResponse('Failed to fetch payments', 500);
}
