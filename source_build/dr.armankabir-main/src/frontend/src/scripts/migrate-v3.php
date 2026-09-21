#!/usr/bin/env php
<?php
$srcDir = realpath(__DIR__ . "/..");
$files = [];
$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($srcDir));
foreach ($it as $f) {
    if (!$f->isFile()) continue;
    $ext = pathinfo($f->getFilename(), PATHINFO_EXTENSION);
    if ($ext !== "ts" && $ext !== "tsx") continue;
    $path = $f->getPathname();
    if (strpos($path, "storageAdapter") !== false) continue;
    if (strpos($path, "node_modules") !== false) continue;
    if (strpos($path, "scripts") !== false) continue;
    $c = @file_get_contents($path);
    if ($c !== false && strpos($c, "localStorage.") !== false) $files[] = $path;
}
echo "Files with localStorage: " . count($files) . "\n";
function calcImportPath($file, $src) {
    $dir = dirname(realpath($file));
    $src = realpath($src);
    $rel = "";
    $cur = $dir;
    while ($cur !== $src && strlen($cur) > strlen($src)) {
        $rel .= "../";
        $cur = dirname($cur);
    }
    return $rel . "lib/storageAdapter";
}
$total = 0;
foreach ($files as $path) {
    $content = file_get_contents($path);
    $new = $content;
    $hasImport = (strpos($new, "storageAdapter") !== false);
    if (!$hasImport) {
        $lines = explode("\n", $new);
        $last = -1;
        foreach ($lines as $i => $line) {
            if (preg_match("/^import /", trim($line))) $last = $i;
        }
        $imp = "import { storage } from \"" . calcImportPath($path, $srcDir) . "\";";
        if ($last >= 0) {
            array_splice($lines, $last + 1, 0, [$imp]);
            $new = implode("\n", $lines);
        } else {
            $new = $imp . "\n" . $new;
        }
    }
    $cnt = 0;
    $new = str_replace("localStorage.getItem(", "storage.getItem(", $new, $c); $cnt += $c;
    $new = str_replace("localStorage.setItem(", "storage.setItem(", $new, $c); $cnt += $c;
    $new = str_replace("localStorage.removeItem(", "storage.removeItem(", $new, $c); $cnt += $c;
    $new = str_replace("localStorage.clear()", "storage.clear()", $new, $c); $cnt += $c;
    $new = str_replace("localStorage.length", "storage.length", $new, $c); $cnt += $c;
    $new = str_replace("localStorage.key(", "storage.key(", $new, $c); $cnt += $c;
    if ($cnt > 0) {
        file_put_contents($path, $new);
        $total += $cnt;
        $rel = str_replace($srcDir . "/", "", $path);
        echo "  $rel ($cnt)\n";
    }
}
echo "\nTotal replacements: $total\n";
