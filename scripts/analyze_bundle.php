<?php
$data = file_get_contents('/home/drarmank/public_html/assets/index-DJeWhCy-.js');
echo "size: " . strlen($data) . "\n";
$markers = ['upsertPatient', 'createPatient', 'medicare_patients', 'phpAuthToken', 'sync.php', '.php', 'fetch(', 'localStorage', 'medicare_sync_queue', 'canister', 'actor', 'apiClient', 'patients/create', '/api/patients', 'registerPatient', 'savePatient'];
foreach ($markers as $m) {
    echo $m . ": " . substr_count($data, $m) . "\n";
}
echo "\n=== first upsertPatient ctx ===\n";
$pos = strpos($data, 'upsertPatient');
if ($pos !== false) {
    echo substr($data, max(, $pos-300), 800) . "\n";
}
echo "\n=== first createPatient ctx ===\n";
$pos = strpos($data, 'createPatient');
if ($pos !== false) {
    echo substr($data, max(, $pos-300), 800) . "\n";
}
echo "\n=== first medicare_patients ctx ===\n";
$pos = strpos($data, 'medicare_patients');
if ($pos !== false) {
    echo substr($data, max(, $pos-200), 600) . "\n";
}
echo "\n=== phpAuthToken ctx ===\n";
$pos = strpos($data, 'phpAuthToken');
if ($pos !== false) {
    echo substr($data, max(, $pos-200), 500) . "\n";
} else {
    echo "NOT FOUND\n";
}
