<?php
/**
 * Payments API - Create
 * 
 * POST /api/payments/create.php
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$missing = validateRequired($input, ['patient_id', 'payment_type', 'amount', 'payment_date']);
if ($missing) {
    errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
}

try {
    $db = Database::getInstance();
    $db->beginTransaction();
    
    $stmt = $db->prepare('
        INSERT INTO payments (patient_id, payment_type, payment_method, amount, discount, reference_number, payment_date, notes, received_by)
        VALUES (:patient_id, :payment_type, :payment_method, :amount, :discount, :reference_number, :payment_date, :notes, :received_by)
    ');
    
    $stmt->execute([
        ':patient_id' => (int)$input['patient_id'],
        ':payment_type' => $input['payment_type'],
        ':payment_method' => $input['payment_method'] ?? 'cash',
        ':amount' => (float)$input['amount'],
        ':discount' => (float)($input['discount'] ?? 0),
        ':reference_number' => $input['reference_number'] ?? null,
        ':payment_date' => $input['payment_date'],
        ':notes' => $input['notes'] ?? null,
        ':received_by' => $user['id'],
    ]);
    
    $paymentId = (int)$db->lastInsertId();
    
    // If invoice_id is provided, link the payment to the invoice
    if (isset($input['invoice_id'])) {
        $linkStmt = $db->prepare('INSERT INTO payment_invoices (payment_id, invoice_id, amount) VALUES (:payment_id, :invoice_id, :amount)');
        $linkStmt->execute([
            ':payment_id' => $paymentId,
            ':invoice_id' => (int)$input['invoice_id'],
            ':amount' => (float)$input['amount'],
        ]);
        
        // Update invoice paid amount
        $updateInvoice = $db->prepare('UPDATE invoices SET paid_amount = paid_amount + :amount WHERE id = :id');
        $updateInvoice->execute([
            ':amount' => (float)$input['amount'],
            ':id' => (int)$input['invoice_id'],
        ]);
    }
    
    $db->commit();
    
    logAudit($user['id'], (int)$input['patient_id'], 'create', 'payment', $paymentId);
    
    successResponse(['id' => $paymentId], 'Payment recorded successfully');
} catch (\Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log('Create payment error: ' . $e->getMessage());
    errorResponse('Failed to record payment', 500);
}
