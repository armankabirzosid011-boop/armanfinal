<?php
/**
 * Create Clinical Order API
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$missing = validateRequired($input, ['patientId', 'orderType', 'description']);
if ($missing) errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('INSERT INTO investigations (patient_id, visit_id, test_name, test_category, instructions, status, ordered_by) VALUES (:patient_id, :visit_id, :test_name, :test_category, :instructions, :status, :ordered_by)');
    $stmt->execute([
        ':patient_id' => (int)$input['patientId'],
        ':visit_id' => isset($input['visitId']) ? (int)$input['visitId'] : null,
        ':test_name' => sanitizeString($input['description']),
        ':test_category' => sanitizeString($input['orderType']),
        ':instructions' => $input['instructions'] ?? null,
        ':status' => 'ordered',
        ':ordered_by' => $user['id'],
    ]);
    $orderId = (int)$db->lastInsertId();
    $fetchStmt = $db->prepare('SELECT * FROM investigations WHERE id = :id');
    $fetchStmt->execute([':id' => $orderId]);
    $order = $fetchStmt->fetch();
    logAudit($user['id'], (int)$input['patientId'], 'create', 'order', $orderId, null, $order);
    successResponse($order, 'Order created successfully');
} catch (\Exception $e) {
    error_log('Create order error: ' . $e->getMessage());
    errorResponse('Failed to create order', 500);
}
