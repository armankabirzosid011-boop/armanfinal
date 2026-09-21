<?php
/**
 * Invoices API - Create
 * 
 * POST /api/invoices/create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['patient_id', 'items']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

if (!is_array($input['items']) || empty($input['items'])) {
    errorResponse('At least one invoice item is required', 400);
}

try {
    $db = Database::getInstance();
    $db->beginTransaction();
    
    // Generate invoice number
    $year = date('Y');
    $prefix = 'INV-' . $year . '-';
    $countStmt = $db->prepare('SELECT COUNT(*) as c FROM invoices WHERE YEAR(invoice_date) = :year');
    $countStmt->execute([':year' => $year]);
    $count = (int)$countStmt->fetch()['c'] + 1;
    $invoiceNumber = $prefix . str_pad($count, 5, '0', STR_PAD_LEFT);
    
    // Calculate totals
    $subtotal = 0;
    foreach ($input['items'] as $item) {
        $qty = (int)($item['quantity'] ?? 1);
        $price = (float)($item['unit_price'] ?? 0);
        $subtotal += $qty * $price;
    }
    
    $discount = (float)($input['discount'] ?? 0);
    $tax = (float)($input['tax'] ?? 0);
    $total = $subtotal - $discount + $tax;
    
    $stmt = $db->prepare('
        INSERT INTO invoices (patient_id, invoice_number, invoice_date, subtotal, discount, tax, total, status, notes, created_by)
        VALUES (:patient_id, :invoice_number, :invoice_date, :subtotal, :discount, :tax, :total, :status, :notes, :created_by)
    ');
    
    $stmt->execute([
        ':patient_id' => (int)$input['patient_id'],
        ':invoice_number' => $invoiceNumber,
        ':invoice_date' => $input['invoice_date'] ?? date('Y-m-d'),
        ':subtotal' => $subtotal,
        ':discount' => $discount,
        ':tax' => $tax,
        ':total' => $total,
        ':status' => $input['status'] ?? 'issued',
        ':notes' => $input['notes'] ?? null,
        ':created_by' => $user['id'],
    ]);
    
    $invoiceId = (int)$db->lastInsertId();
    
    // Insert items
    $itemStmt = $db->prepare('
        INSERT INTO invoice_items (invoice_id, item_type, description, quantity, unit_price, notes)
        VALUES (:invoice_id, :item_type, :description, :quantity, :unit_price, :notes)
    ');
    
    foreach ($input['items'] as $item) {
        $itemStmt->execute([
            ':invoice_id' => $invoiceId,
            ':item_type' => $item['item_type'] ?? 'service',
            ':description' => $item['description'] ?? '',
            ':quantity' => (int)($item['quantity'] ?? 1),
            ':unit_price' => (float)($item['unit_price'] ?? 0),
            ':notes' => $item['notes'] ?? null,
        ]);
    }
    
    $db->commit();
    
    logAudit($user['id'], (int)$input['patient_id'], 'create', 'invoice', $invoiceId);
    
    successResponse([
        'id' => $invoiceId,
        'invoice_number' => $invoiceNumber,
        'total' => $total,
    ], 'Invoice created successfully');
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Create invoice error: ' . $e->getMessage());
    errorResponse('Failed to create invoice', 500);
}
