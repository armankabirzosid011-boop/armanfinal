<?php
/**
 * Dr. Arman Kabir Care - Server-Side Data Sync API
 * 
 * Provides persistent storage for the app data.
 * Data is stored as JSON files in a secure directory outside public_html.
 * Each user's data is keyed by their email address (hashed).
 */

require_once __DIR__ . '/config_loader.php';
require_once __DIR__ . '/response.php';
require_once __DIR__ . '/helpers.php';

handleCors();
requireMethod('POST', 'GET');

// Rate limiting: max 100 requests per minute per IP
checkRateLimit('sync_' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 100, 60);

// Configuration
$data_dir = dirname(__DIR__, 2) . '/server-data';
if (!is_dir($data_dir)) {
    mkdir($data_dir, 0755, true);
}

try {
    // Parse request
    $input = getJsonInput();
    $action = $input['action'] ?? ($_POST['action'] ?? $_GET['action'] ?? '');
    $user_key = $input['user_key'] ?? ($_POST['user_key'] ?? $_GET['user_key'] ?? '');
    $payload = $input['payload'] ?? ($_POST['payload'] ?? '');

    // Validate user_key
    if (empty($user_key)) {
        Response::error('user_key is required', 400);
    }

    // Sanitize user_key - only allow email-like or alphanumeric
    if (!preg_match('/^[a-zA-Z0-9@._\-+]+$/', $user_key)) {
        Response::error('Invalid user_key format', 400);
    }

    // Prevent directory traversal
    if (strpos($user_key, '..') !== false || strpos($user_key, '/') !== false) {
        Response::error('Invalid user_key', 400);
    }

    // Hash the user_key for the filename
    $file_hash = hash('sha256', $user_key);
    $data_file = $data_dir . '/' . $file_hash . '.json';

    /**
     * Handle save action
     */
    if ($action === 'save') {
        if (empty($payload)) {
            Response::error('payload is required for save', 400);
        }

        // Decode payload if it's a JSON string
        if (is_string($payload)) {
            $data = json_decode($payload, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                Response::error('Invalid JSON payload', 400);
            }
        } else {
            $data = $payload;
        }

        if (!is_array($data)) {
            Response::error('Invalid payload structure', 400);
        }

        // Validate max payload size (5MB)
        $payload_size = strlen(json_encode($data));
        if ($payload_size > 5 * 1024 * 1024) {
            Response::error('Payload too large (max 5MB)', 413);
        }

        // Read existing data if any
        $existing = [];
        if (file_exists($data_file)) {
            $existing_content = file_get_contents($data_file);
            if ($existing_content) {
                $existing = json_decode($existing_content, true) ?? [];
            }
        }

        // Merge: existing data merged with new payload
        // If payload contains a key with null value, it means delete that key
        foreach ($data as $key => $value) {
            if ($value === null) {
                unset($existing[$key]);
            } else {
                $existing[$key] = $value;
            }
        }

        // Add metadata
        $existing['_meta'] = [
            'last_saved' => date('c'),
            'user_key' => substr($user_key, 0, 3) . '***' . substr($user_key, -3),
            'ip' => $_SERVER['REMOTE_ADDR'] ?? ''
        ];

        // Write atomically
        $temp_file = $data_file . '.tmp';
        if (file_put_contents($temp_file, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX) !== false) {
            rename($temp_file, $data_file);
            chmod($data_file, 0644);

            Response::ok([
                'keys_count' => count($existing),
            ], 'Data saved successfully');
        } else {
            Response::error('Failed to save data', 500);
        }
    }

    /**
     * Handle load action
     */
    if ($action === 'load') {
        if (!file_exists($data_file)) {
            // No data yet - return empty
            Response::ok(new stdClass(), 'No data found for this user');
        }

        $content = file_get_contents($data_file);
        if ($content === false) {
            Response::error('Failed to read data', 500);
        }

        $data = json_decode($content, true);
        if ($data === null) {
            Response::error('Corrupted data file', 500);
        }

        Response::ok($data, 'Data loaded successfully');
    }

    /**
     * Handle delete action
     */
    if ($action === 'delete') {
        if (file_exists($data_file)) {
            unlink($data_file);
        }
        Response::ok(null, 'Data deleted successfully');
    }

    /**
     * Handle health check
     */
    if ($action === 'health') {
        Response::ok([
            'status' => 'ok',
            'server_time' => date('c'),
            'php_version' => phpversion(),
            'data_dir_exists' => is_dir($data_dir),
            'data_dir_writable' => is_writable($data_dir),
        ]);
    }

    // If no valid action was matched
    Response::error('Invalid action. Valid actions: save, load, delete, health', 400);

} catch (Throwable $e) {
    error_log('Sync API error: ' . $e->getMessage());
    Response::error('Sync failed. Please try again.', 500);
}