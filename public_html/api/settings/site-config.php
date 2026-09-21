<?php
/**
 * Site Configuration API
 * 
 * GET /api/settings/site-config.php     — Retrieve site config and doctor content overrides
 * POST /api/settings/site-config.php    — Update site config and/or doctor content overrides
 * 
 * This endpoint is used by the frontend landingService (useSiteConfig, useDoctorContent hooks).
 * 
 * Request body (POST, JSON):
 *   { "siteConfig": { ... }, "doctorContentOverrides": { ... } }
 * 
 * Response (GET):
 *   { "success": true, "data": { "heroSection": {...}, "aboutSection": {...}, ... } }
 * 
 * Response (POST):
 *   { "success": true, "data": { "siteConfig": {...}, "doctorContentOverrides": {...}, "updated_at": "..." }, "message": "..." }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();

$method = $_SERVER['REQUEST_METHOD'];

try {
    $db = Database::getInstance();

    if ($method === 'GET') {
        // ── GET: Retrieve site config ──────────────────────────────────────────
        
        $stmt = $db->prepare("SELECT setting_key, setting_value FROM site_settings WHERE setting_key IN ('siteConfig', 'doctorContentOverrides')");
        $stmt->execute();
        $rows = $stmt->fetchAll();

        $siteConfig = null;
        $doctorContentOverrides = null;

        foreach ($rows as $row) {
            $decoded = json_decode($row['setting_value'], true);
            if ($row['setting_key'] === 'siteConfig') {
                $siteConfig = $decoded;
            } elseif ($row['setting_key'] === 'doctorContentOverrides') {
                $doctorContentOverrides = $decoded;
            }
        }

        // Merge doctorContentOverrides into siteConfig for backward compatibility
        if ($siteConfig && $doctorContentOverrides) {
            $siteConfig['doctorContentOverrides'] = $doctorContentOverrides;
        } elseif ($doctorContentOverrides) {
            $siteConfig = ['doctorContentOverrides' => $doctorContentOverrides];
        }

        // If nothing found, return a minimal default
        if (!$siteConfig) {
            $siteConfig = new stdClass();
        }

        successResponse($siteConfig);

    } elseif ($method === 'POST') {
        // ── POST: Update site config ────────────────────────────────────────────
        
        $user = getAuthUser();
        $userId = $user ? $user['id'] : null;

        $input = getJsonInput();

        if (empty($input)) {
            errorResponse('No content provided to save.', 400);
        }

        $now = date('Y-m-d H:i:s');

        // Save siteConfig if present
        if (isset($input['siteConfig'])) {
            $siteConfigJson = json_encode($input['siteConfig'], JSON_UNESCAPED_UNICODE);
            $stmt = $db->prepare('
                INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_by, updated_at)
                VALUES (:key, :value, :group, :desc, :user_id, :now)
                ON DUPLICATE KEY UPDATE
                    setting_value = VALUES(setting_value),
                    setting_group = VALUES(setting_group),
                    updated_by = VALUES(updated_by),
                    updated_at = VALUES(updated_at)
            ');
            $stmt->execute([
                ':key' => 'siteConfig',
                ':value' => $siteConfigJson,
                ':group' => 'frontpage',
                ':desc' => 'Site configuration for landing page',
                ':user_id' => $userId,
                ':now' => $now,
            ]);
        }

        // Save doctorContentOverrides if present
        if (isset($input['doctorContentOverrides'])) {
            $overridesJson = json_encode($input['doctorContentOverrides'], JSON_UNESCAPED_UNICODE);
            $stmt = $db->prepare('
                INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_by, updated_at)
                VALUES (:key, :value, :group, :desc, :user_id, :now)
                ON DUPLICATE KEY UPDATE
                    setting_value = VALUES(setting_value),
                    setting_group = VALUES(setting_group),
                    updated_by = VALUES(updated_by),
                    updated_at = VALUES(updated_at)
            ');
            $stmt->execute([
                ':key' => 'doctorContentOverrides',
                ':value' => $overridesJson,
                ':group' => 'frontpage',
                ':desc' => 'Doctor content overrides for landing page',
                ':user_id' => $userId,
                ':now' => $now,
            ]);
        }

        // Log audit if user is authenticated
        if ($userId) {
            logAudit($userId, null, 'update', 'site_config', null, null, [
                'keys_saved' => array_keys($input),
            ]);
        }

        successResponse([
            'siteConfig' => $input['siteConfig'] ?? null,
            'doctorContentOverrides' => $input['doctorContentOverrides'] ?? null,
            'updated_at' => $now,
        ], 'Site configuration saved successfully');

    } else {
        errorResponse('Method not allowed', 405);
    }
} catch (\Exception $e) {
    error_log('Site config error: ' . $e->getMessage());
    errorResponse('Failed to process site configuration', 500);
}
