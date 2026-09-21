<?php
/**
 * Staff / Users List API
 * 
 * GET /api/staff/list.php?role=doctor&page=1&limit=50
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
    
    $where = ['is_active = 1'];
    $params = [];
    
    $role = getParam('role', '');
    if ($role) {
        $where[] = 'role = :role';
        $params[':role'] = $role;
    }
    
    $whereClause = 'WHERE ' . implode(' AND ', $where);
    
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM users $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    
    $stmt = $db->prepare("
        SELECT id, email, full_name, name_bn, role, specialization, phone, photo_url, signature_url, bmdc_registration
        FROM users
        $whereClause
        ORDER BY full_name ASC
        LIMIT :limit OFFSET :offset
    ");
    
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    
    $staff = $stmt->fetchAll();
    
    paginatedResponse($staff, $total, $pagination['page'], $pagination['limit']);
    
} catch (\Exception $e) {
    error_log('List staff error: ' . $e->getMessage());
    errorResponse('Failed to fetch staff', 500);
}
