<?php
$file = 'public_html/assets/index-DJeWhCy-.js';
echo "Reading file...\n";
$content = file_get_contents($file);
echo "File size: " . strlen($content) . "\n";

$old = 'if (typeof actor.getFrontPageContent === "function") {
        const maybeContent = await actor.getFrontPageContent();
        const raw = Array.isArray(maybeContent) && maybeContent.length > 0 ? maybeContent[0] : typeof maybeContent === "string" ? maybeContent : null;
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            if (parsed.siteConfig) {
              localStorage.setItem(
                "siteConfig",
                JSON.stringify(parsed.siteConfig)
              );
            }
            if (parsed.doctorContentOverrides) {
              localStorage.setItem(
                "doctorContentOverrides",
                JSON.stringify(parsed.doctorContentOverrides)
              );
            }
          } catch {
          }
        }
      }';

$new = 'if (navigator.onLine) {
        try {
          const resp = await fetch("/api/frontpage/get.php");
          if (resp.ok) {
            const json = await resp.json();
            if (json.success && json.data) {
              if (json.data.siteConfig) {
                localStorage.setItem("siteConfig", JSON.stringify(json.data.siteConfig));
              }
              if (json.data.doctorContentOverrides) {
                localStorage.setItem("doctorContentOverrides", JSON.stringify(json.data.doctorContentOverrides));
              }
            }
          }
        } catch (e) {
          console.warn("[sync] Failed to load frontpage content from PHP:", e);
        }
      }';

$pos = strpos($content, $old);
if ($pos !== false) {
    $content = str_replace($old, $new, $content, $count);
    echo "Replaced: $count occurrences\n";
    file_put_contents($file, $content);
    echo "File written successfully\n";
} else {
    echo "Pattern NOT found - searching for getFrontPageContent...\n";
    $pos2 = strpos($content, 'getFrontPageContent');
    if ($pos2 !== false) {
        echo "Found at position $pos2. Context:\n";
        echo substr($content, $pos2 - 100, 500) . "\n";
    } else {
        echo "getFrontPageContent NOT found\n";
    }
}
