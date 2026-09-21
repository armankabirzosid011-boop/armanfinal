-- ============================================================================
-- Migration 009: Admin Sessions for Content Management Auth
-- ============================================================================
-- Adds an admin_sessions table so admin_login tokens are stored server-side,
-- can be verified, revoked, and have expiration.
-- ============================================================================

-- ─── 1. Admin sessions table ─────────────────────────────────────────────────
-- Token-based sessions for admin content management accounts.
-- This mirrors user_sessions but for admin_accounts.

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

-- ─── 2. Add updated_at column to site_settings if not exists ─────────────────
-- The content API uses updated_at but some schemas may not have it.
ALTER TABLE site_settings
    ADD COLUMN IF NOT EXISTS updated_by BIGINT UNSIGNED DEFAULT NULL AFTER updated_at;

-- ============================================================================
-- END OF MIGRATION 009
-- ============================================================================
