#!/usr/bin/env php
<?php
/**
 * Fix missing storage imports in all source files.
 */
$srcDir = realpath(__DIR__ . '/..');
$files = [];
$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($srcDir));
foreach ($it as $f) {
    if (!$f->isFile()) continue;
    $ext = pathinfo($f->getFilename(), PATHINFO_EXTENSION);
    if ($ext !== 'ts' && $ext !== 'tsx') continue;
    $path = $f->getPathname();
    if (strpos($path, 'storageAdapter') !== false) continue;
    if (strpos($path, 'node_modules') !== false) continue;
    if (strpos($path, 'scripts') !== false) continue;
    $c = file_get_contents($path);
    if ($c === false) continue;
    if (strpos($c, 'storage.getItem') !== false || strpos($c, 'storage.setItem') !== false ||
        strpos($c, 'storage.removeItem') !== false || strpos($c, 'storage.clear') !== false) {
        if (strpos($c, 'storageAdapter') === false) {
            $files[] = $path;
        }
    }
}
echo 'Files needing import: ' . count($files) . "\n";

function calcImportPath($file, $src) {
    $dir = dirname(realpath($file));
    $src = realpath($src);
    $rel = '';
    $cur = $dir;
    while ($cur !== $src && strlen($cur) > strlen($src)) {
        $rel .= '../';
        $cur = dirname($cur);
    }
    return $rel . 'lib/storageAdapter';
}

$zero = ;
foreach ($files as $path) {
    $content = file_get_contents($path);
    $lines = explode("\n", $content);
    $last = -1;
    foreach ($lines as $i => $line) {
        if (preg_match('/^import /', trim($line))) $last = $i;
    }
    $imp = 'import { storage } from "' . calcImportPath($path, $srcDir) . '";';
    if ($last >= $zero) {
        array_splice($lines, $last + 1, $zero, [$imp]);
        $new = implode("\n", $lines);
    } else {
        $new = $imp . "\n" . $content;
    }
    file_put_contents($path, $new);
    echo '  + ' . str_replace($srcDir . '/', '', $path) . "\n";
}
echo "Done\n";
