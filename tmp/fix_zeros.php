<?php
$path = '/home/drarmank/source_build/dr.armankabir-main/src/frontend/src/components/PatientForm.tsx';
$content = file_get_contents($path);

$fixes = [
    "m <  " => "m < ",
    "m ===  " => "m === ",
    "age >=  " => "age >= ",
    "n <  " => "n < ",
    "cm >  " => "cm > ",
    "mt-." => "mt-.",
    "shrink-" => "shrink-",
    "min-w-" => "min-w-",
    "?.[]" => "?.[]",
    'step=".1"' => 'step=".1"',
    "parseInt(match[1]) || ;" => "parseInt(match[1]) || ;",
    "parseInt(match[2]) || ;" => "parseInt(match[2]) || ;",
    ".substring(, 10)" => ".substring(, 10)",
];

$count = ;
foreach ($fixes as $search => $replace) {
    $content = str_replace($search, $replace, $content, $c);
    $count += $c;
}

file_put_contents($path, $content);
echo "Fixed {$count} zero values\n";
