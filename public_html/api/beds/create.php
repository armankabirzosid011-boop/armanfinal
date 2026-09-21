<?php
/**
 * Create Bed API
 * POST /api/beds/create.php
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$missing = validateRequired($input, ['ward', 'bedNumber']);
if ($missing) errorResponse('Missing required fields', 400, ['missing_fields' => $missing]);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('INSERT INTO beds (ward, bed_number, bed_type, status, notes) VALUES (:ward, :bed_number, :bed_type, :status, :notes)');
    $stmt->execute([
        ':ward' => sanitizeString($input['ward']),
        ':bed_number' => sanitizeString($input['bedNumber']),
        ':bed_type' => in_array($input['bedType'] ?? 'general', ['general','semi_private','private','icu','ccu','hdu']) ? $input['bedType'] : 'general',
        ':status' => in_array($input['status'] ?? 'available', ['available','occupied','reserved','maintenance','cleaning']) ? $input['status'] : 'available',
        ':notes' => $input['notes'] ?? null,
    ]);
    $bedId = (int)$db->lastInsertId();
    $fetchStmt = $db->prepare('SELECT * FROM beds WHERE id = :id');
    $fetchStmt->execute([':id' => $bedId]);
    $bed = $fetchStmt->fetch();
    logAudit($user['id'], null, 'create', 'bed', $bedId, null, $bed);
    successResponse($bed, 'Bed created successfully');
} catch (\Exception $e) {
    error_log('Create bed error: ' . $e->getMessage());
    errorResponse('Failed to create bed', 500);
}
