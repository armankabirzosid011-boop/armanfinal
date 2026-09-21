<?php
/**
 * Delete Clinical Note API
 */
require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';
handleCors();
requireMethod('POST');
$user = requireAuth();
$input = getJsonInput();
$id = (int)($input['id'] ?? null);
if (!$id) errorResponse('Note ID is required', 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare('SELECT * FROM clinical_notes WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    if (!$existing) errorResponse('Note not found', 404);
    $stmt = $db->prepare('DELETE FROM clinical_notes WHERE id = :id');
    $stmt->execute([':id' => $id]);
    logAudit($user['id'], $existing['patient_id'], 'delete', 'clinical_note', $id, $existing, null);
    successResponse(null, 'Note deleted successfully');
} catch (\Exception $e) {
    error_log('Delete note error: ' . $e->getMessage());
    errorResponse('Failed to delete note', 500);
}
