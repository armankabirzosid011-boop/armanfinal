<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('GET');
$user = requireAuth();
$id = (int)($_GET['id'] ?? null);
if (!$id) errorResponse('Payment ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT p.*, pt.full_name as patient_name FROM payments p LEFT JOIN patients pt ON p.patient_id = pt.id WHERE p.id = :id');
    $stmt->execute([':id' => $id]);
    $payment = $stmt->fetch();
    if (!$payment) errorResponse('Payment not found', 404);
    successResponse($payment);
} catch (\Exception $e) {
    error_log('Get payment error: ' . $e->getMessage());
    errorResponse('Failed to fetch payment', 500);
}
