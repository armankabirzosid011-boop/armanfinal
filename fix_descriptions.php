<?php
$file = 'public_html/assets/index-DJeWhCy-.js';
$content = file_get_contents($file);
$original = $content;

// 5. Add DialogDescription to sync_conflict dialog
$search = '/* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent,{className:"sm:max-w-md max-h-[80vh] overflow-hidden flex flex-col","data-ocid":"sync_conflict.dialog",children:[/* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader,{children:[/* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle,{className:"flex items-center gap-2",children:[/* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert,{className:"w-5 h-5 text-amber-500"}),"Sync Conflicts (",remaining.length,")"';
$replace = '/* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent,{className:"sm:max-w-md max-h-[80vh] overflow-hidden flex flex-col","data-ocid":"sync_conflict.dialog",children:[/* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription,{className:"sr-only",children:"Sync conflicts - choose which version to keep for each record"}),/* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader,{children:[/* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle,{className:"flex items-center gap-2",children:[/* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert,{className:"w-5 h-5 text-amber-500"}),"Sync Conflicts (",remaining.length,")"';

$pos = strpos($content, $search);
if ($pos !== false) {
    $content = str_replace($search, $replace, $content, $count);
    echo "sync_conflict DialogDescription: replaced $count\n";
} else {
    echo "sync_conflict pattern NOT found\n";
    // Debug
    $pos2 = strpos($content, 'sync_conflict.dialog');
    if ($pos2 !== false) {
        echo "Found sync_conflict.dialog at $pos2\n" . substr($content, $pos2 - 100, 500) . "\n";
    }
}

if ($content !== $original) {
    file_put_contents($file, $content);
    echo "File written\n";
} else {
    echo "No changes\n";
}
