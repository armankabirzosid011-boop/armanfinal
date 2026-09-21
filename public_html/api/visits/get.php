<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('GET');
$user = requireAuth();
$id = (int)($_GET['id'] ?? null);
if (!$id) errorResponse('Visit ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT v.*, p.full_name as patient_name, p.phone as patient_phone, u.full_name as doctor_name FROM visits v LEFT JOIN patients p ON v.patient_id = p.id LEFT JOIN users u ON v.created_by = u.id WHERE v.id = :id');
    $stmt->execute([':id' => $id]);
    $visit = $stmt->fetch();
    if (!$visit) errorResponse('Visit not found', 404);
    $visit['vital_signs'] = !empty($visit['vital_signs']) ? json_decode($visit['vital_signs'], true) : null;
    successResponse($visit);
} catch (\Exception $e) {
    error_log('Get visit error: ' . $e->getMessage());
    errorResponse('Failed to fetch visit', 500);
}
