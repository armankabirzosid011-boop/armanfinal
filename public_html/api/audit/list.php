<?php
/**
 * Audit Logs API - List
 * 
 * GET /api/audit/list.php?patient_id=123&page=1&limit=50
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('GET');

$user = requireAdmin();
$pagination = getPaginationParams();

try {
    $db = Database::getInstance();
    
    $where = [];
    $params = [];
    
    $patientId = getParam('patient_id', '');
    if ($patientId) {
        $where[] = 'al.patient_id = :patient_id';
        $params[':patient_id'] = (int)$patientId;
    }
    
    $userId = getParam('user_id', '');
    if ($userId) {
        $where[] = 'al.user_id = :user_id';
        $params[':user_id'] = (int)$userId;
    }
    
    $action = getParam('action', '');
    if ($action) {
        $where[] = 'al.action = :action';
        $params[':action'] = $action;
    }
    
    $entityType = getParam('entity_type', '');
    if ($entityType) {
        $where[] = 'al.entity_type = :entity_type';
        $params[':entity_type'] = $entityType;
    }
    
    $whereClause = $where ? 'WHERE ' . implode(' AND ', $where) : '';
    
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM audit_logs al $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    
    $stmt = $db->prepare("
        SELECT al.*, u.full_name as user_name, u.email as user_email,
               pt.full_name as patient_name
        FROM audit_logs al
        LEFT JOIN users u ON al.user_id = u.id
        LEFT JOIN patients pt ON al.patient_id = pt.id
        $whereClause
        ORDER BY al.created_at DESC
        LIMIT :limit OFFSET :offset
    ");
    
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    
    $logs = $stmt->fetchAll();
    
    paginatedResponse($logs, $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List audit logs error: ' . $e->getMessage());
    errorResponse('Failed to fetch audit logs', 500);
}
