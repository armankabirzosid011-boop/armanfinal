<?php
/**
 * Get Pending Patient Logins API
 * 
 * GET /api/auth/patients/pending.php
 * Headers: Authorization: Bearer <staff-token>
 * 
 * Returns all patient logins with 'pending' status.
 */

require_once __DIR__ . '/../../database.php';
require_once __DIR__ . '/../../helpers.php';
require_once __DIR__ . '/../middleware.php';

handleCors();
requireMethod('GET');

$user = requireAuth();

try {
    $db = Database::getInstance();
    
    $stmt = $db->query('
        SELECT pl.id, pl.patient_id, pl.phone, pl.status, pl.created_at,
               p.full_name, p.name_bn, p.register_number, p.gender, p.date_of_birth, p.photo_url
        FROM patient_login pl
        JOIN patients p ON pl.patient_id = p.id
        WHERE pl.status = "pending"
        ORDER BY pl.created_at DESC
    ');
    $patients = $stmt->fetchAll();
    
    // Sanitize output
    $result = array_map(function ($p) {
        return [
            'id' => (int)$p['id'],
            'patient_id' => (int)$p['patient_id'],
            'phone' => $p['phone'],
            'status' => $p['status'],
            'full_name' => $p['full_name'],
            'name_bn' => $p['name_bn'],
            'register_number' => $p['register_number'],
            'gender' => $p['gender'],
            'date_of_birth' => $p['date_of_birth'],
            'photo_url' => $p['photo_url'],
            'created_at' => $p['created_at'],
        ];
    }, $patients);
    
    successResponse([
        'patients' => $result,
    ], 'Pending patients retrieved');
    
} catch (\Exception $e) {
    error_log('Get pending patients error: ' . $e->getMessage());
    errorResponse('Failed to fetch pending patients', 500);
}
