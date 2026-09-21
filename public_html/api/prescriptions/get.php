<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('GET');
$user = requireAuth();
$id = (int)($_GET['id'] ?? null);
if (!$id) errorResponse('Prescription ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT pr.*, p.full_name as patient_name, u.full_name as doctor_name FROM prescriptions pr LEFT JOIN patients p ON pr.patient_id = p.id LEFT JOIN users u ON pr.prescribed_by = u.id WHERE pr.id = :id');
    $stmt->execute([':id' => $id]);
    $prescription = $stmt->fetch();
    if (!$prescription) errorResponse('Prescription not found', 404);
    successResponse($prescription);
} catch (\Exception $e) {
    error_log('Get prescription error: ' . $e->getMessage());
    errorResponse('Failed to fetch prescription', 500);
}
