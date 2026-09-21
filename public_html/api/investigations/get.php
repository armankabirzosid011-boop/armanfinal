<?php
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('GET');
$user = requireAuth();
$id = (int)($_GET['id'] ?? null);
if (!$id) errorResponse('Investigation ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT i.*, u.full_name as ordered_by_name FROM investigations i LEFT JOIN users u ON i.ordered_by = u.id WHERE i.id = :id');
    $stmt->execute([':id' => $id]);
    $inv = $stmt->fetch();
    if (!$inv) errorResponse('Investigation not found', 404);
    successResponse($inv);
} catch (\Exception $e) {
    error_log('Get investigation error: ' . $e->getMessage());
    errorResponse('Failed to fetch investigation', 500);
}
