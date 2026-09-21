<?php
$f = '/home/drarmank/public_html/api/helpers.php';
$c = file_get_contents($f);
// Replace the wrong regex [-9] with correct [-9]
$c = str_replace("preg_match('/[-9]/', \$password)", "preg_match('/[-9]/', \$password)", $c);
file_put_contents($f, $c);
echo "Done. Checking:\n";
system("grep -n 'number' $f");
