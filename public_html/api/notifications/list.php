<?php
/**
 * Notifications API - List
 * 
 * GET /api/notifications/list.php?patient_id=123&unread_only=1
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
    
    $where = ['(n.user_id IS NULL OR n.user_id = :user_id)'];
    $params = [':user_id' => $user['id']];
    
    $patientId = getParam('patient_id', '');
    if ($patientId) {
        $where[] = 'n.patient_id = :patient_id';
        $params[':patient_id'] = (int)$patientId;
    }
    
    if (getParam('unread_only', '')) {
        $where[] = 'n.is_read = 0';
    }
    
    $type = getParam('type', '');
    if ($type) {
        $where[] = 'n.type = :type';
        $params[':type'] = $type;
    }
    
    $whereClause = 'WHERE ' . implode(' AND ', $where);
    
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM notifications n $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    
    $stmt = $db->prepare("
        SELECT n.*, u.full_name as created_by_name
        FROM notifications n
        LEFT JOIN users u ON n.created_by = u.id
        $whereClause
        ORDER BY n.created_at DESC
        LIMIT :limit OFFSET :offset
    ");
    
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    
    $notifications = $stmt->fetchAll();
    
    paginatedResponse($notifications, $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List notifications error: ' . $e->getMessage());
    errorResponse('Failed to fetch notifications', 500);
}
