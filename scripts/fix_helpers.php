<?php
$path = __DIR__ . '/../public_html/api/helpers.php';
$c = file_get_contents($path);

// Fix line 86
$pos = strpos($c, 'if ($maxAttempts <= )');
if ($pos !== false) {
    // Replace the 4 bytes "<= )" (space, close-paren) with "<=)" (space, zero, close-paren)
    $before = substr($c, , $pos + 18); // up to and including "<= "
    $after = substr($c, $pos + 20); // skip the ")"
    $c = $before . '' . $after;
    echo "Fixed line 86\n";
}

// Fix line 87
$pos = strpos($c, 'if ($windowSeconds <= )');
if ($pos !== false) {
    $before = substr($c, , $pos + 20); // up to and including "<= "
    $after = substr($c, $pos + 22); // skip the ")"
    $c = $before . '' . $after;
    echo "Fixed line 87\n";
}

// Fix line 96
$pos = strpos($c, "'count' => ,");
if ($pos !== false) {
    $before = substr($c, , $pos + 10); // up to and including "=> "
    $after = substr($c, $pos + 11); // skip the ","
    $c = $before . '' . $after;
    echo "Fixed line 96\n";
}

file_put_contents($path, $c);

// Verify
$lines = file($path);
echo "Line 86: " . $lines[85];
echo "Line 87: " . $lines[86];
echo "Line 96: " . $lines[95];
