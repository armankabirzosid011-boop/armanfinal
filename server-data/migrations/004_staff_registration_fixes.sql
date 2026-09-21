-- ============================================================================
-- Migration 004: Staff Registration Fixes
-- ============================================================================
-- Fixes issues identified in the Phase 2 audit:
--   1. Create missing admin_sessions table
--   2. Fix audit_logs.action ENUM to support all values used by logAudit()
--   3. Add designation, degree, hospital_name columns to users table
-- ============================================================================

-- ─── 1. Create admin_sessions table ──────────────────────────────────────────
-- Sessions for content management admins (admin_accounts users).
-- Referenced by middleware.php, admin_login.php, logout.php.

CREATE TABLE IF NOT EXISTS admin_sessions (
    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    admin_id        BIGINT UNSIGNED NOT NULL,
    token           VARCHAR(255) NOT NULL UNIQUE,
    ip_address      VARCHAR(45) DEFAULT NULL,
    user_agent      TEXT DEFAULT NULL,
    expires_at      TIMESTAMP NOT NULL,
    last_activity   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_as_admin (admin_id),
    INDEX idx_as_token (token),
    INDEX idx_as_expires (expires_at),
    FOREIGN KEY (admin_id) REFERENCES admin_accounts(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ─── 2. Fix audit_logs.action ENUM ───────────────────────────────────────────
-- The original ENUM is too restrictive. logAudit() uses many more action values
-- including: failed_login, failed_admin_login, admin_login, failed_patient_login,
-- session_expired. Changing to VARCHAR(50) to avoid future ENUM modification issues.

ALTER TABLE audit_logs
    MODIFY COLUMN action VARCHAR(50) NOT NULL;

-- ─── 3. Add registration fields to users table ──────────────────────────────
-- These fields are sent by the StaffAuthContent registration form.

ALTER TABLE users
    ADD COLUMN designation VARCHAR(10) DEFAULT NULL
        AFTER full_name,
    ADD COLUMN degree VARCHAR(255) DEFAULT NULL
        AFTER specialization,
    ADD COLUMN hospital_name VARCHAR(255) DEFAULT NULL
        AFTER degree;

-- ============================================================================
-- END OF MIGRATION 004
-- ============================================================================
