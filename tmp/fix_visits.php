<?php
$path = '/home/drarmank/source_build/dr.armankabir-main/src/frontend/src/services/visits.ts';
$content = file_get_contents($path);

$zero = '';
$fixes = [
    "toNumber(v) ?? " => "toNumber(v) ?? " . $zero,
    ".split('T')[]" => ".split('T')[" . $zero . "]",
];

$count = ;
foreach ($fixes as $search => $replace) {
    $c = ;
    $content = str_replace($search, $replace, $content, $c);
    $count += $c;
}

file_put_contents($path, $content);
echo "Fixed {$count} zero values\n";
