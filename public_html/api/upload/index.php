<?php
/**
 * File Upload API
 * 
 * POST /api/upload/index.php
 * Body: multipart/form-data with file field
 */

require_once __DIR__ . '/../database.php';
require_once __DIR__ . '/../helpers.php';
require_once __DIR__ . '/../auth/middleware.php';

handleCors();
requireMethod('POST');

$user = requireAuth();

if (!isset($_FILES['file'])) {
    errorResponse('No file uploaded', 400);
}

$subDir = getParam('sub_dir', 'general');

try {
    $url = handleFileUpload('file', $subDir);
    
    if (!$url) {
        errorResponse('File upload failed', 500);
    }
    
    logAudit($user['id'], null, 'create', 'upload', null, null, ['url' => $url, 'sub_dir' => $subDir]);
    
    successResponse(['url' => $url, 'filename' => basename($url)], 'File uploaded successfully');
} catch (\Exception $e) {
    error_log('Upload error: ' . $e->getMessage());
    errorResponse('Failed to upload file', 500);
}
