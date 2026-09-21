<?php
require_once __DIR__ . "/../database.php";
require_once __DIR__ . "/../helpers.php";
require_once __DIR__ . "/../auth/middleware.php";
handleCors();
requireMethod("GET");
$user = requireAuth();
try {
    $db = Database::getInstance();
    $from = getParam("from", "");
    $to = getParam("to", "");
    $conditions = ["p.status = 'completed'"];
    $params = [];
    if ($from) { $conditions[] = 'p.payment_date >= :from_date'; $params[':from_date'] = $from; }
    if ($to) { $conditions[] = 'p.payment_date <= :to_date'; $params[':to_date'] = $to; }
    $whereClause = 'WHERE ' . implode(' AND ', $conditions);
    $sql = "SELECT COUNT(*) as total_transactions, COALESCE(SUM(p.amount), 0) as total_income, COALESCE(AVG(p.amount), 0) as average_amount FROM payments p $whereClause";
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $stats = $stmt->fetch();
    successResponse($stats);
} catch (\Exception $e) {
    error_log("Total income error: " . $e->getMessage());
    errorResponse("Failed to calculate total income", 500);
}
