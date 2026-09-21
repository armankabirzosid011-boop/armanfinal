<?php
/**
 * API Helper Functions
 *
 * Common utilities for all API endpoints.
 */

require_once __DIR__ . '/config_loader.php';
require_once __DIR__ . '/response.php';
require_once __DIR__ . '/database.php';
require_once __DIR__ . '/db_helper.php';

// ─── Response Helpers ─────────────────────────────────────────────────────
// All endpoints ultimately return via the standard Response class.
// These legacy helpers are retained as thin aliases so existing endpoints
// automatically conform to the Response::ok()/Response::error() architecture.

function jsonResponse(mixed $data, int $statusCode = 200): void {
    if (is_array($data) && isset($data['success'])) {
        if ($data['success']) {
            Response::ok($data['data'] ?? null, $data['message'] ?? 'Success', $statusCode ?: 200);
        }
        Response::error($data['message'] ?? 'Error', $statusCode ?: 400, $data['errors'] ?? null);
    }
    Response::sendJson($data, $statusCode);
}

function successResponse(mixed $data = null, string $message = 'Success'): void {
    Response::ok($data, $message, 200);
}

function errorResponse(string $message, int $statusCode = 400, mixed $errors = null): void {
    Response::error($message, $statusCode, $errors);
}

// ─── Request Helpers ──────────────────────────────────────────────────────

function getJsonInput(): array {
    $raw = file_get_contents('php://input');
    if (empty($raw)) return [];
    $data = json_decode($raw, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        errorResponse('Invalid JSON input', 400);
    }
    return $data ?? [];
}

function getParam(string $key, mixed $default = null): mixed {
    // Check GET, POST, then JSON body
    if (isset($_GET[$key])) return $_GET[$key];
    if (isset($_POST[$key])) return $_POST[$key];
    
    static $jsonInput = null;
    if ($jsonInput === null) {
        $jsonInput = getJsonInput();
    }
    return $jsonInput[$key] ?? $default;
}

function getMethod(): string {
    // For CLI (php -r, cron jobs), return 'CLI' so requireMethod() passes through
    return $_SERVER['REQUEST_METHOD'] ?? 'CLI';
}

function requireMethod(string ...$methods): void {
    $method = getMethod();
    // Allow CLI mode to pass through for cron jobs / maintenance scripts
    if ($method === 'CLI') return;
    if (!in_array($method, $methods)) {
        errorResponse('Method not allowed. Allowed: ' . implode(', ', $methods), 405);
    }
}

// ─── Rate Limiting ─────────────────────────────────────────────────────────

function checkRateLimit(string $identifier = '', int $maxAttempts = 100, int $windowSeconds = 60): void {
    if (empty($identifier)) {
        $identifier = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    }
    
    // Use provided limits or fall back to configuration defaults
    if ($maxAttempts <= 0) $maxAttempts = RATE_LIMIT_MAX;
    if ($windowSeconds <= 0) $windowSeconds = RATE_LIMIT_WINDOW;
    
    $rateLimitDir = __DIR__ . '/../../server-data/ratelimit';
    if (!is_dir($rateLimitDir)) {
        mkdir($rateLimitDir, 0755, true);
    }
    
    $file = $rateLimitDir . '/' . md5($identifier) . '.json';
    
    $data = ['count' => 0, 'reset' => time() + $windowSeconds];
    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true);
        if ($existing && isset($existing['reset'])) {
            if (time() < $existing['reset']) {
                $data = $existing;
            }
        }
    }
    
    $data['count']++;
    
    if ($data['count'] > $maxAttempts) {
        $retryAfter = $data['reset'] - time();
        header('Retry-After: ' . $retryAfter);
        errorResponse('Rate limit exceeded. Try again later.', 429, [
            'retry_after' => $retryAfter,
            'limit' => $maxAttempts,
            'window' => $windowSeconds,
        ]);
    }
    
    file_put_contents($file, json_encode($data), LOCK_EX);
}

// ─── Input Validation ──────────────────────────────────────────────────────

function validateRequired(array $data, array $fields): ?array {
    $missing = [];
    foreach ($fields as $field) {
        if (!isset($data[$field]) || (is_string($data[$field]) && trim($data[$field]) === '')) {
            $missing[] = $field;
        }
    }
    return empty($missing) ? null : $missing;
}

function sanitizeString(string $value): string {
    $value = strip_tags($value);
    $value = trim($value);
    return htmlspecialchars($value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function sanitizeEmail(string $email): string {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    return filter_var($email, FILTER_VALIDATE_EMAIL) ? strtolower($email) : '';
}

function sanitizePhone(string $phone): string {
    // Allow digits, +, -, (, ), and spaces
    return preg_replace('/[^0-9+\-\(\) ]/', '', trim($phone));
}

// ─── Password Validation ───────────────────────────────────────────────────

function validatePasswordStrength(string $password): ?string {
    if (strlen($password) < 8) {
        return 'Password must be at least 8 characters long';
    }
    if (!preg_match('/[A-Z]/', $password)) {
        return 'Password must contain at least one uppercase letter';
    }
    if (!preg_match('/[a-z]/', $password)) {
        return 'Password must contain at least one lowercase letter';
    }
    if (!preg_match('/[0-9]/', $password)) {
        return 'Password must contain at least one number';
    }
    if (!preg_match('/[!@#$%^&*()_\-+={}[\]|:;"\'<>,.?\/~`]/', $password)) {
        return 'Password must contain at least one special character';
    }
    return null; // Password is strong
}

// ─── Pagination ────────────────────────────────────────────────────────────

function getPaginationParams(): array {
    $page = max(1, (int) getParam('page', 1));
    $limit = min(100, max(1, (int) getParam('limit', 20)));
    $offset = ($page - 1) * $limit;
    
    return [
        'page' => $page,
        'limit' => $limit,
        'offset' => $offset,
    ];
}

function paginatedResponse(array $items, int $total, int $page, int $limit): void {
    $totalPages = ceil($total / $limit);
    
    successResponse([
        'items' => $items,
        'pagination' => [
            'page' => $page,
            'limit' => $limit,
            'total' => $total,
            'total_pages' => $totalPages,
            'has_more' => $page < $totalPages,
        ],
    ]);
}

// ─── File Upload Helpers ───────────────────────────────────────────────────

function handleFileUpload(string $fieldName, string $subDir = ''): ?string {
    if (!isset($_FILES[$fieldName]) || $_FILES[$fieldName]['error'] !== UPLOAD_ERR_OK) {
        return null;
    }
    
    $file = $_FILES[$fieldName];
    
    // Validate file size
    if ($file['size'] > MAX_UPLOAD_SIZE) {
        errorResponse('File too large. Maximum: ' . (MAX_UPLOAD_SIZE / 1024 / 1024) . 'MB', 413);
    }
    
    // Validate extension
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, ALLOWED_EXTENSIONS)) {
        errorResponse('File type not allowed. Allowed: ' . implode(', ', ALLOWED_EXTENSIONS), 415);
    }
    
    // Validate MIME type
    $allowedMimes = [
        'image/jpeg', 'image/png', 'image/gif', 'image/webp',
        'application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    if (!in_array($mimeType, $allowedMimes)) {
        errorResponse('Invalid file type (MIME: ' . $mimeType . ')', 415);
    }
    
    // Create upload directory
    $uploadDir = UPLOAD_DIR . '/' . ($subDir ? $subDir . '/' : '');
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    
    // Generate unique filename
    $filename = uniqid() . '_' . bin2hex(random_bytes(8)) . '.' . $ext;
    $filepath = $uploadDir . $filename;
    
    if (!move_uploaded_file($file['tmp_name'], $filepath)) {
        errorResponse('Failed to save uploaded file', 500);
    }
    
    return UPLOAD_URL . '/' . ($subDir ? $subDir . '/' : '') . $filename;
}

// ─── Logging ───────────────────────────────────────────────────────────────

function logAudit(
    int|null $userId,
    int|null $patientId,
    string $action,
    string $entityType,
    int|null $entityId = null,
    mixed $oldValues = null,
    mixed $newValues = null
): void {
    try {
        $db = Database::getInstance();
        // Use null for unauthenticated actions — FK is ON DELETE SET NULL
        // Verify user_id exists in users table to prevent FK violations
        $safeUserId = null;
        if ($userId !== null && $userId > 0) {
            $checkStmt = $db->prepare('SELECT 1 FROM users WHERE id = ?');
            $checkStmt->execute([$userId]);
            if ($checkStmt->fetchColumn()) {
                $safeUserId = $userId;
            }
        }
        // Verify patient_id exists in patients table if provided
        $safePatientId = null;
        if ($patientId !== null && $patientId > 0) {
            $checkStmt = $db->prepare('SELECT 1 FROM patients WHERE id = ?');
            $checkStmt->execute([$patientId]);
            if ($checkStmt->fetchColumn()) {
                $safePatientId = $patientId;
            }
        }
        $stmt = $db->prepare('
            INSERT INTO audit_logs (user_id, patient_id, action, entity_type, entity_id, old_values, new_values, ip_address, user_agent)
            VALUES (:user_id, :patient_id, :action, :entity_type, :entity_id, :old_values, :new_values, :ip_address, :user_agent)
        ');
        $stmt->execute([
            ':user_id' => $safeUserId,
            ':patient_id' => $safePatientId,
            ':action' => $action,
            ':entity_type' => $entityType,
            ':entity_id' => $entityId,
            ':old_values' => $oldValues ? json_encode($oldValues) : null,
            ':new_values' => $newValues ? json_encode($newValues) : null,
            ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? ($_SERVER['SERVER_ADDR'] ?? '127.0.0.1'),
            ':user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'CLI',
        ]);
    } catch (\Exception $e) {
        error_log('Audit log failed: ' . $e->getMessage());
    }
}

// ─── CORS & Pre-flight ─────────────────────────────────────────────────────

function handleCors(): void {
    // CORS is handled in .htaccess, but ensure pre-flight works
    $method = $_SERVER['REQUEST_METHOD'] ?? '';
    if ($method === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}