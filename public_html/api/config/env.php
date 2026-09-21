<?php
/**
 * Environment Configuration API
 * 
 * Serves the frontend environment configuration (env.json) content.
 * This bypasses the .htaccess file restrictions and provides the
 * configuration data directly from the PHP backend.
 * 
 * GET /api/config/env.php
 * 
 * Response:
 *   { "success": true, "message": "Success", "data": { ...env vars... }, "timestamp": "..." }
 */

// Required: Must include config_loader FIRST, before any output
require_once __DIR__ . '/../config_loader.php';
require_once __DIR__ . '/../response.php';

// Use the Response class for proper JSON output
use function cfg as configGet;

// Build the environment configuration
$envConfig = [
    'VITE_API_URL' => configGet('VITE_API_URL', '/api'),
    'VITE_APP_NAME' => configGet('VITE_APP_NAME', 'Dr. Arman Kabir Care'),
    'VITE_APP_VERSION' => configGet('VITE_APP_VERSION', '2.0.0'),
    'VITE_PRIMARY_COLOR' => configGet('VITE_PRIMARY_COLOR', '#0f766e'),
    'VITE_SECONDARY_COLOR' => configGet('VITE_SECONDARY_COLOR', '#14b8a6'),
    'VITE_ACCENT_COLOR' => configGet('VITE_ACCENT_COLOR', '#f59e0b'),
    'VITE_DOCTOR_NAME' => configGet('VITE_DOCTOR_NAME', 'Dr. Arman Kabir'),
    'VITE_DOCTOR_SPECIALIZATION' => configGet('VITE_DOCTOR_SPECIALIZATION', 'MBBS, MD (Cardiology), Consultant Cardiologist'),
    'VITE_CLINIC_NAME' => configGet('VITE_CLINIC_NAME', 'Dr. Arman Kabir Care'),
    'VITE_CLINIC_ADDRESS' => configGet('VITE_CLINIC_ADDRESS', '123, Dhaka Medical Road, Dhaka-1000, Bangladesh'),
    'VITE_CLINIC_PHONE' => configGet('VITE_CLINIC_PHONE', '+880-2-1234567'),
    'VITE_CLINIC_EMAIL' => configGet('VITE_CLINIC_EMAIL', 'info@drarmankabir.com'),
    'VITE_DEFAULT_LANGUAGE' => configGet('VITE_DEFAULT_LANGUAGE', 'en'),
    'VITE_DEFAULT_TIMEZONE' => configGet('VITE_DEFAULT_TIMEZONE', 'Asia/Dhaka'),
    'VITE_CURRENCY' => configGet('VITE_CURRENCY', 'BDT'),
    'VITE_ENABLE_ONLINE_BOOKING' => configGet('VITE_ENABLE_ONLINE_BOOKING', 'true'),
    'VITE_ENABLE_TELECONSULTATION' => configGet('VITE_ENABLE_TELECONSULTATION', 'true'),
    'VITE_PWA_ENABLED' => configGet('VITE_PWA_ENABLED', 'true'),
    'project_id' => configGet('project_id', '')
];

// Send success response using the project's Response class
Response::ok($envConfig, 'Environment configuration loaded successfully');