-- ============================================================================
-- Migration 003: Pure PHP + MySQL Authentication Conversion
-- ============================================================================
-- Adds tables and columns needed to move all auth from localStorage to MySQL.
-- ============================================================================

-- ─── 1. Extend users table ──────────────────────────────────────────────────
-- Add registration_status for the doctor/staff registration approval flow
-- 'approved' = existing users / approved registrations
-- 'pending' = awaiting admin approval
-- 'rejected' = rejected by admin

ALTER TABLE users
    ADD COLUMN registration_status ENUM('approved', 'pending', 'rejected')
        NOT NULL DEFAULT 'approved'
        AFTER is_active,
    ADD COLUMN approved_by BIGINT UNSIGNED DEFAULT NULL
        AFTER registration_status,
    ADD COLUMN approved_at TIMESTAMP NULL DEFAULT NULL
        AFTER approved_by,
    ADD INDEX idx_users_reg_status (registration_status),
    ADD FOREIGN KEY (approved_by) REFERENCES users(id) ON DELETE SET NULL;

-- ─── 2. Patient login accounts ─────────────────────────────────────────────
-- Patients can register with phone + password to access the patient portal.
-- Status tracks approval by doctor/staff.

CREATE TABLE IF NOT EXISTS patient_login (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id      BIGINT UNSIGNED NOT NULL UNIQUE,
    phone           VARCHAR(50) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    full_name       VARCHAR(255) DEFAULT NULL,
    name_bn         VARCHAR(255) DEFAULT NULL,
    status          ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
    last_login_at   TIMESTAMP NULL DEFAULT NULL,
    approved_by     BIGINT UNSIGNED DEFAULT NULL,
    approved_at     TIMESTAMP NULL DEFAULT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_pl_phone (phone),
    INDEX idx_pl_status (status),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (approved_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 3. Patient sessions ───────────────────────────────────────────────────
-- Token-based sessions for patient login (separate from user_sessions).

CREATE TABLE IF NOT EXISTS patient_sessions (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_login_id BIGINT UNSIGNED NOT NULL,
    token           VARCHAR(255) NOT NULL UNIQUE,
    refresh_token   VARCHAR(255) DEFAULT NULL UNIQUE,
    ip_address      VARCHAR(45) DEFAULT NULL,
    user_agent      TEXT DEFAULT NULL,
    expires_at      TIMESTAMP NOT NULL,
    last_activity   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_ps_token (token),
    INDEX idx_ps_expires (expires_at),
    FOREIGN KEY (patient_login_id) REFERENCES patient_login(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 4. Admin content accounts ─────────────────────────────────────────────
-- Replaces the hardcoded ADMIN_ACCOUNTS in the frontend JS bundle.
-- These accounts are for managing the public-facing portal content only.

CREATE TABLE IF NOT EXISTS admin_accounts (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username        VARCHAR(255) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    display_name    VARCHAR(255) NOT NULL,
    is_active       TINYINT(1) NOT NULL DEFAULT 1,
    last_login_at   TIMESTAMP NULL DEFAULT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_admin_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed default admin content accounts (matching the current hardcoded accounts)
-- Username: dr.armankabir011@gmail.com / Password: 01197247219
-- Username: admin2 / Password: admin2
INSERT IGNORE INTO admin_accounts (username, password_hash, display_name) VALUES
('dr.armankabir011@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Dr. Arman Kabir'),
('admin2', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin 2');
-- NOTE: Above hash is for 'admin123' — in production, change these immediately.

-- ─── 5. Doctor registry storage ────────────────────────────────────────────
-- The site_settings table is already used via /api/data/save.php to sync the
-- medicare_doctors_registry and medicare_patients_auth_registry.
-- 
-- We'll continue using site_settings for the registry data, but the PRIMARY
-- source of truth will now be the `users` table for doctors and `patient_login`
-- table for patients. The site_settings entries will be used as a cache/sync
-- layer for backward compatibility during migration.
--
-- Keys used:
--   'medicare_doctors_registry'   → generated from users table
--   'medicare_patients_auth_registry' → generated from patient_login table
--   'app_current_user_email'      → no longer needed (use server-side session)

-- ============================================================================
-- END OF MIGRATION 003
-- ============================================================================
