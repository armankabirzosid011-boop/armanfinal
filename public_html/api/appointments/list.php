<?php
/**
 * List Appointments API
 * 
 * GET /api/appointments/list.php?date=2026-07-11&doctor_id=123&status=scheduled
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
    
    $date = getParam('date', '');
    if ($date) {
        $where[] = 'a.appointment_date = :date';
        $params[':date'] = $date;
    }
    
    $doctorId = getParam('doctor_id', '');
    if ($doctorId) {
        $where[] = 'a.doctor_id = :doctor_id';
        $params[':doctor_id'] = (int)$doctorId;
    }
    
    $patientId = getParam('patient_id', '');
    if ($patientId) {
        $where[] = 'a.patient_id = :patient_id';
        $params[':patient_id'] = (int)$patientId;
    }
    
    $status = getParam('status', '');
    if ($status) {
        $where[] = 'a.status = :status';
        $params[':status'] = $status;
    }
    
    $whereClause = $where ? 'WHERE ' . implode(' AND ', $where) : '';
    
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM appointments a $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    
    $stmt = $db->prepare("
        SELECT a.*, 
               p.full_name as patient_name, p.phone as patient_phone,
               u.full_name as doctor_name
        FROM appointments a
        LEFT JOIN patients p ON a.patient_id = p.id
        LEFT JOIN users u ON a.doctor_id = u.id
        $whereClause
        ORDER BY a.appointment_date DESC, a.appointment_time ASC
        LIMIT :limit OFFSET :offset
    ");
    
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    
    $appointments = $stmt->fetchAll();
    
    paginatedResponse($appointments, $total, $pagination['page'], $pagination['limit']);
    
} catch (\Exception $e) {
    error_log('List appointments error: ' . $e->getMessage());
    errorResponse('Failed to fetch appointments', 500);
}
