<?php
/**
 * Central Config Loader
 *
 * Single entry point for configuration. Requires config.php once and
 * exposes cfg() helper. All endpoints should include this file FIRST.
 */

require_once __DIR__ . '/../config.php';

use function cfg as configGet;

/**
 * Get a configuration value (alias for cfg() from config.php).
 */
if (!function_exists('configGetValue')) {
    function configGetValue(string $key, mixed $default = null): mixed
    {
        return cfg($key, $default);
    }
}

/**
 * Whether the app is running in a known environment.
 */
if (!function_exists('isCli')) {
    function isCli(): bool
    {
        return (PHP_SAPI === 'cli' || (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'CLI'));
    }
}

// Prepend our own API require folders so nested endpoint dirs resolve cleanly if needed.
if (!defined('API_BASE_DIR')) {
    define('API_BASE_DIR', __DIR__);
}