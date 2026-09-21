<?php
$f = "/home/drarmank/public_html/api/settings/save-multiple.php";
$c = file_get_contents($f);
// Fix: $saved = ; -> $saved = ;
$c = str_replace('$saved = ;', '$saved = ;', $c);
file_put_contents($f, $c);
echo "Fixed: " . filesize($f) . " bytes\n";
echo shell_exec("php -l " . escapeshellarg($f) . " 2>&1");
