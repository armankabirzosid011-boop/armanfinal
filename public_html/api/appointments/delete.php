<?php
/**
 * Delete/Cancel Appointment API
 * 
 * POST /api/appointments/delete.php
 * Body: { id }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();
$input = getJsonInput();

$id = (int)($input['id'] ?? null);
if (!$id) {
    errorResponse('Appointment ID is required', 400);
}

try {
    $db = Database::getInstance();
    
    $stmt = $db->prepare('SELECT * FROM appointments WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $existing = $stmt->fetch();
    
    if (!$existing) {
        errorResponse('Appointment not found', 404);
    }
    
    // Soft-delete: set status to cancelled
    $stmt = $db->prepare("UPDATE appointments SET status = 'cancelled', updated_at = NOW() WHERE id = :id");
    $stmt->execute([':id' => $id]);
    
    logAudit($user['id'], null, 'delete', 'appointment', $id, $existing, null);
    
    successResponse(null, 'Appointment cancelled successfully');
    
} catch (\Exception $e) {
    error_log('Delete appointment error: ' . $e->getMessage());
    errorResponse('Failed to cancel appointment', 500);
}
