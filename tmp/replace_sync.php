<?php
$content = file_get_contents("/home/drarmank/public_html/assets/index-DJeWhCy-.js");

$old = 'function saveFrontPageContentWithSync(actor) {
  const allContent = {};
  const fpKeys = ["siteConfig", "doctorContentOverrides"];
  for (const k2 of fpKeys) {
    try {
      const raw = localStorage.getItem(k2);
      if (raw) allContent[k2] = JSON.parse(raw);
    } catch {
    }
  }
  if (navigator.onLine) {
    fetch("/api/frontpage/save.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allContent)
    }).then(r => {
      if (r.ok) {
        localStorage.setItem(LAST_SYNC_KEY, (/* @__PURE__ */ new Date()).toISOString());
      } else {
        console.warn("[sync] saveFrontPageContent PHP returned", r.status);
      }
    }).catch(err => {
      console.warn("[sync] saveFrontPageContent PHP failed:", err);
    });
  }
  localStorage.setItem(LAST_SYNC_KEY, (/* @__PURE__ */ new Date()).toISOString());
}';

$new = 'const CONTENT_OFFLINE_QUEUE_KEY = "medicare_content_offline_queue";
function getContentOfflineQueue() {
  try {
    const raw = localStorage.getItem(CONTENT_OFFLINE_QUEUE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function setContentOfflineQueue(queue) {
  try {
    localStorage.setItem(CONTENT_OFFLINE_QUEUE_KEY, JSON.stringify(queue));
  } catch {
  }
}
function addToContentOfflineQueue(payload, updatedAt) {
  const queue = getContentOfflineQueue();
  queue.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    payload,
    updatedAt: updatedAt || new Date().toISOString(),
    retryCount: 0,
    queuedAt: new Date().toISOString()
  });
  setContentOfflineQueue(queue);
}
async function processContentOfflineQueue() {
  let queue = getContentOfflineQueue();
  if (queue.length === 0) return;
  const remaining = [];
  for (const entry of queue) {
    try {
      const response = await fetch("/api/frontpage/save.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry.payload)
      });
      if (!response.ok) {
        entry.retryCount++;
        if (entry.retryCount < 5) {
          remaining.push(entry);
        }
        continue;
      }
      const json = await response.json();
      if (json && json.success && json.data && json.data.updated_at) {
        localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
        for (const [k2, v2] of Object.entries(entry.payload)) {
          const existing = localStorage.getItem(k2);
          if (existing) {
            try {
              const parsed = JSON.parse(existing);
              if (parsed._updatedAt && parsed._updatedAt > entry.updatedAt) {
                remaining.push(entry);
                continue;
              }
            } catch {}
          }
          localStorage.setItem(k2, JSON.stringify(v2));
        }
      }
    } catch {
      entry.retryCount++;
      if (entry.retryCount < 5) {
        remaining.push(entry);
      }
    }
  }
  setContentOfflineQueue(remaining);
}
async function saveFrontPageContentWithSync(actor) {
  const allContent = {};
  const fpKeys = ["siteConfig", "doctorContentOverrides"];
  for (const k2 of fpKeys) {
    try {
      const raw = localStorage.getItem(k2);
      if (raw) allContent[k2] = JSON.parse(raw);
    } catch {
    }
  }
  if (!navigator.onLine) {
    addToContentOfflineQueue(allContent);
    return;
  }
  try {
    const response = await fetch("/api/frontpage/save.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allContent)
    });
    if (response.ok) {
      const json = await response.json();
      if (json && json.success && json.data && json.data.updated_at) {
        localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
      }
    } else {
      console.warn("[sync] saveFrontPageContent PHP returned", response.status);
      addToContentOfflineQueue(allContent);
    }
  } catch (err) {
    console.warn("[sync] saveFrontPageContent PHP failed:", err);
    addToContentOfflineQueue(allContent);
  }
}';

if (strpos($content, $old) !== false) {
    $content = str_replace($old, $new, $content);
    file_put_contents("/home/drarmank/public_html/assets/index-DJeWhCy-.js", $content);
    echo "Replacement successful\n";
} else {
    echo "Old string not found\n";
    // Find the exact text
    $pos = strpos($content, "function saveFrontPageContentWithSync");
    echo "Position: $pos\n";
    $excerpt = substr($content, $pos, 500);
    echo $excerpt . "\n";
    echo "---END---\n";
}
