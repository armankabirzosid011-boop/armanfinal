-- Migration: Create site_settings table for storing application data
-- This table replaces localStorage for persistent server-side storage

CREATE TABLE IF NOT EXISTS `site_settings` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `setting_key` VARCHAR(255) NOT NULL,
    `setting_value` LONGTEXT NOT NULL,
    `setting_group` VARCHAR(100) NOT NULL DEFAULT 'general',
    `description` TEXT DEFAULT NULL,
    `is_public` TINYINT(1) NOT NULL DEFAULT 0,
    `created_by` BIGINT UNSIGNED DEFAULT NULL,
    `updated_by` BIGINT UNSIGNED DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_setting_key` (`setting_key`),
    INDEX `idx_setting_group` (`setting_group`),
    INDEX `idx_updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
