<?php
require_once __DIR__ . "/../database.php";
require_once __DIR__ . "/../helpers.php";
require_once __DIR__ . "/../auth/middleware.php";
handleCors();
requireMethod("GET");
$user = requireAuth();
$patientId = (int)($_GET["patient_id"] ?? null);
if (!$patientId) errorResponse("Patient ID is required", 400);
try {
    $db = Database::getInstance();
    $stmt = $db->prepare("SELECT * FROM vital_signs WHERE patient_id = :patient_id ORDER BY recorded_at DESC LIMIT 1");
    $stmt->execute([":patient_id" => $patientId]);
    $vitals = $stmt->fetchAll();
    $latest = !empty($vitals) ? $vitals[0] : null;
    successResponse($latest);
} catch (\Exception $e) {
    error_log("Get latest vitals error: " . $e->getMessage());
    errorResponse("Failed to fetch latest vitals", 500);
}
