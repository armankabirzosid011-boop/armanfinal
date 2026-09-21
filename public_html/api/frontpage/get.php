<?php
/**
 * Front Page Get API
 * 
 * GET /api/frontpage/get.php
 * 
 * Retrieves the front page content (siteConfig + doctorContentOverrides).
 * This endpoint is public - no authentication required for reading.
 * 
 * Query params:
 *   key (optional) - "siteConfig", "doctorContentOverrides", or "all" (default)
 * 
 * Response:
 *   { "success": true, "data": { ... } }
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';

handleCors();
requireMethod('GET');

$key = getParam('key', 'all');

try {
    $db = Database::getInstance();
    
    if ($key === 'all') {
        // Return both siteConfig and doctorContentOverrides
        $stmt = $db->prepare("SELECT setting_key, setting_value FROM site_settings WHERE setting_key IN ('siteConfig', 'doctorContentOverrides')");
        $stmt->execute();
        $rows = $stmt->fetchAll();
        
        $result = [];
        foreach ($rows as $row) {
            $result[$row['setting_key']] = json_decode($row['setting_value'], true);
        }
        
        // Also get the combined frontPageContent if available (for backwards compatibility)
        $stmt2 = $db->prepare("SELECT setting_value FROM site_settings WHERE setting_key = 'frontPageContent'");
        $stmt2->execute();
        $combined = $stmt2->fetchColumn();
        
        if ($combined) {
            $combinedData = json_decode($combined, true);
            if (is_array($combinedData)) {
                $result = array_merge($result, $combinedData);
            }
        }
        
        // If nothing found, return empty objects
        if (empty($result)) {
            $result = [
                'siteConfig' => new stdClass(),
                'doctorContentOverrides' => new stdClass(),
            ];
        }
        
        successResponse($result);
    } else {
        // Validate key format
        if (!preg_match('/^[a-zA-Z0-9_\-]+$/', $key)) {
            errorResponse('Invalid key format.', 400);
        }
        
        $stmt = $db->prepare('SELECT setting_value FROM site_settings WHERE setting_key = :key');
        $stmt->execute([':key' => $key]);
        $value = $stmt->fetchColumn();
        
        if ($value === false) {
            // Return empty object for missing key
            successResponse(new stdClass());
        } else {
            $decoded = json_decode($value, true);
            // PHP quirk: json_decode('{}', true) returns [] — fix it
            if (is_array($decoded) && empty($decoded)) {
                $decoded = new stdClass();
            }
            successResponse($decoded);
        }
    }
} catch (\Exception $e) {
    error_log('Front page get error: ' . $e->getMessage());
    // Return default empty content on error
    successResponse([
        'siteConfig' => new stdClass(),
        'doctorContentOverrides' => new stdClass(),
    ]);
}
