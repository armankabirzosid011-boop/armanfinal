<?php
$mysqli = new mysqli("127.0.0.1", "drarmank_drarmank_care_user", "zosid01197247219", "drarmank_drarmank_care");
$stmt = $mysqli->describe("patients");
$cols = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo "patients table columns:\n";
foreach ($cols as $col) {
    echo "  " . $col["Field"] . " (" . $col["Type"] . ")\n";
}
$result = $mysqli->query("SELECT COUNT(*) as cnt FROM patients");
$row = $result->fetch_assoc();
echo "\npatients row count: " . $row["cnt"] . "\n";
$result2 = $mysqli->query("SELECT * FROM patients LIMIT 3");
while ($row2 = $result2->fetch_assoc()) {
    echo "\nSample patient:\n";
    foreach ($row2 as $k => $v) {
        echo "  " . $k . ": " . print_r($v, true) . "\n";
    }
}
$mysqli->close();
?>