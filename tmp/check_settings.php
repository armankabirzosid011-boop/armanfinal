<?php
$pdo = new PDO("mysql:host=127.0.0.1;dbname=drarmank_drarmank_care", "drarmank_drarmank_care_user", "zosid01197247219");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$stmt = $pdo->query("SELECT * FROM site_settings WHERE setting_group = 'general' LIMIT 10");
while ($row = $stmt->fetch(PDO_ASSOC)) {
    echo $row["setting_key"] . " => " . substr(json_encode($row["setting_value"]), 0, 60) . "\n";
}