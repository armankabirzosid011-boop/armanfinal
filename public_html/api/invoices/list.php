<?php
/**
 * Invoices API - List
 * 
 * GET /api/invoices/list.php?patient_id=123&status=issued&page=1&limit=20
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
        $where[] = 'i.patient_id = :patient_id';
        $params[':patient_id'] = (int)$patientId;
    }
    
    $status = getParam('status', '');
    if ($status) {
        $where[] = 'i.status = :status';
        $params[':status'] = $status;
    }
    
    $whereClause = $where ? 'WHERE ' . implode(' AND ', $where) : '';
    
    $countStmt = $db->prepare("SELECT COUNT(*) as total FROM invoices i $whereClause");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetch()['total'];
    
    $stmt = $db->prepare("
        SELECT i.*, p.full_name as patient_name, p.register_number,
               u.full_name as created_by_name
        FROM invoices i
        LEFT JOIN patients p ON i.patient_id = p.id
        LEFT JOIN users u ON i.created_by = u.id
        $whereClause
        ORDER BY i.invoice_date DESC, i.created_at DESC
        LIMIT :limit OFFSET :offset
    ");
    
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $pagination['limit'], PDO::PARAM_INT);
    $stmt->bindValue(':offset', $pagination['offset'], PDO::PARAM_INT);
    $stmt->execute();
    
    $invoices = $stmt->fetchAll();
    
    // Get invoice items for each invoice
    foreach ($invoices as &$invoice) {
        $itemStmt = $db->prepare('SELECT * FROM invoice_items WHERE invoice_id = :invoice_id');
        $itemStmt->execute([':invoice_id' => $invoice['id']]);
        $invoice['items'] = $itemStmt->fetchAll();
        $invoice['id'] = (int)$invoice['id'];
        $invoice['subtotal'] = (float)$invoice['subtotal'];
        $invoice['discount'] = (float)$invoice['discount'];
        $invoice['tax'] = (float)$invoice['tax'];
        $invoice['total'] = (float)$invoice['total'];
        $invoice['paid_amount'] = (float)$invoice['paid_amount'];
        $invoice['due_amount'] = (float)$invoice['due_amount'];
    }
    
    paginatedResponse($invoices, $total, $pagination['page'], $pagination['limit']);
} catch (\Exception $e) {
    error_log('List invoices error: ' . $e->getMessage());
    errorResponse('Failed to fetch invoices', 500);
}
