-- ============================================================================
-- Dr. Arman Kabir Care - Complete MySQL Database Schema
-- Version: 2.0.0 (cPanel Production Migration)
-- Engine: InnoDB | Charset: utf8mb4 | Collation: utf8mb4_unicode_ci
--
-- NOTE: Database creation and USE statements are handled by migrate.php/setup.
-- This file contains only CREATE TABLE statements.
-- ============================================================================

-- ============================================================================
-- 1. USERS & AUTHENTICATION
-- ============================================================================

-- All users: admins, doctors, nurses, staff
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    name_bn VARCHAR(255) DEFAULT NULL,
    role ENUM('admin', 'consultant_doctor', 'medical_officer', 'intern_doctor',
              'nurse', 'staff', 'reception', 'doctor',
              'assistant_registrar', 'registrar',
              'assistant_professor', 'associate_professor', 'professor') NOT NULL,
    specialization VARCHAR(255) DEFAULT NULL,
    phone VARCHAR(50) DEFAULT NULL,
    address TEXT DEFAULT NULL,
    photo_url VARCHAR(500) DEFAULT NULL,
    signature_url VARCHAR(500) DEFAULT NULL,
    bmdc_registration VARCHAR(100) DEFAULT NULL,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    email_verified_at TIMESTAMP NULL DEFAULT NULL,
    last_login_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_users_email (email),
    INDEX idx_users_role (role),
    INDEX idx_users_active (is_active)
) ENGINE=InnoDB;

-- User sessions (token-based auth)
CREATE TABLE user_sessions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    refresh_token VARCHAR(255) DEFAULT NULL UNIQUE,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    expires_at TIMESTAMP NOT NULL,
    last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_sessions_user (user_id),
    INDEX idx_sessions_token (token),
    INDEX idx_sessions_expires (expires_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Password reset tokens
CREATE TABLE password_resets (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    token VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    used_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_resets_user (user_id),
    INDEX idx_resets_token (token),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- 2. PATIENTS
-- ============================================================================

CREATE TABLE patients (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    register_number VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    name_bn VARCHAR(255) DEFAULT NULL,
    date_of_birth DATE DEFAULT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL DEFAULT 'male',
    phone VARCHAR(50) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    address TEXT DEFAULT NULL,
    blood_group VARCHAR(10) DEFAULT NULL,
    weight DECIMAL(5,2) DEFAULT NULL,
    height DECIMAL(5,2) DEFAULT NULL COMMENT 'Height in cm',
    allergies JSON DEFAULT NULL,
    chronic_conditions JSON DEFAULT NULL,
    past_surgical_history TEXT DEFAULT NULL,
    patient_type ENUM('outdoor', 'indoor', 'emergency', 'admitted') NOT NULL DEFAULT 'outdoor',
    photo_url VARCHAR(500) DEFAULT NULL,
    status ENUM('Active', 'Inactive', 'Deceased') NOT NULL DEFAULT 'Active',
    registration_complete TINYINT(1) NOT NULL DEFAULT 0,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_patients_register (register_number),
    INDEX idx_patients_name (full_name),
    INDEX idx_patients_phone (phone),
    INDEX idx_patients_email (email),
    INDEX idx_patients_type (patient_type),
    INDEX idx_patients_status (status),
    INDEX idx_patients_created_by (created_by),
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Consultant assignments (which consultant manages which patient)
CREATE TABLE patient_consultants (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    consultant_id BIGINT UNSIGNED NOT NULL,
    assigned_by BIGINT UNSIGNED DEFAULT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    INDEX idx_pc_patient (patient_id),
    INDEX idx_pc_consultant (consultant_id),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (consultant_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 3. VISITS / ENCOUNTERS
-- ============================================================================

CREATE TABLE visits (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    visit_type ENUM('outpatient', 'inpatient', 'emergency', 'follow-up', 'admitted') NOT NULL DEFAULT 'outpatient',
    visit_date DATE NOT NULL,
    chief_complaint TEXT DEFAULT NULL,
    history_of_present_illness TEXT DEFAULT NULL,
    physical_examination TEXT DEFAULT NULL,
    diagnosis TEXT DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_visits_patient (patient_id),
    INDEX idx_visits_date (visit_date),
    INDEX idx_visits_type (visit_type),
    INDEX idx_visits_doctor (created_by),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 4. PRESCRIPTIONS
-- ============================================================================

CREATE TABLE prescriptions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    visit_id BIGINT UNSIGNED DEFAULT NULL,
    prescription_date DATE NOT NULL,
    diagnosis TEXT DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    status ENUM('active', 'completed', 'cancelled') NOT NULL DEFAULT 'active',
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_rx_patient (patient_id),
    INDEX idx_rx_visit (visit_id),
    INDEX idx_rx_date (prescription_date),
    INDEX idx_rx_doctor (created_by),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (visit_id) REFERENCES visits(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Prescription medications (line items)
CREATE TABLE prescription_medications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    prescription_id BIGINT UNSIGNED NOT NULL,
    name VARCHAR(255) NOT NULL,
    dose VARCHAR(100) DEFAULT NULL,
    frequency VARCHAR(100) DEFAULT NULL,
    duration VARCHAR(100) DEFAULT NULL,
    instructions TEXT DEFAULT NULL,
    drug_form VARCHAR(100) DEFAULT NULL,
    route VARCHAR(100) DEFAULT NULL,
    is_prn TINYINT(1) NOT NULL DEFAULT 0,
    prn_condition TEXT DEFAULT NULL,
    iv_im_dose_format VARCHAR(50) DEFAULT NULL,
    loading_dose VARCHAR(100) DEFAULT NULL,
    maintenance_dose VARCHAR(100) DEFAULT NULL,
    infusion_rate VARCHAR(50) DEFAULT NULL,
    infusion_unit VARCHAR(50) DEFAULT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_rxm_prescription (prescription_id),
    FOREIGN KEY (prescription_id) REFERENCES prescriptions(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- 5. APPOINTMENTS
-- ============================================================================

CREATE TABLE appointments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED DEFAULT NULL,
    patient_name VARCHAR(255) DEFAULT NULL,
    patient_phone VARCHAR(50) DEFAULT NULL,
    doctor_id BIGINT UNSIGNED DEFAULT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME DEFAULT NULL,
    serial_number INT DEFAULT NULL,
    type ENUM('regular', 'emergency', 'follow-up', 'consultation') NOT NULL DEFAULT 'regular',
    status ENUM('scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'cancelled', 'no_show')
          NOT NULL DEFAULT 'scheduled',
    chief_complaint TEXT DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    is_public_request TINYINT(1) NOT NULL DEFAULT 0,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_appt_patient (patient_id),
    INDEX idx_appt_doctor (doctor_id),
    INDEX idx_appt_date (appointment_date),
    INDEX idx_appt_status (status),
    INDEX idx_appt_date_status (appointment_date, status),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE SET NULL,
    FOREIGN KEY (doctor_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 6. VITAL SIGNS
-- ============================================================================

CREATE TABLE vital_signs (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    visit_id BIGINT UNSIGNED DEFAULT NULL,
    blood_pressure_systolic INT DEFAULT NULL,
    blood_pressure_diastolic INT DEFAULT NULL,
    pulse INT DEFAULT NULL,
    temperature DECIMAL(4,1) DEFAULT NULL,
    oxygen_saturation INT DEFAULT NULL,
    respiratory_rate INT DEFAULT NULL,
    weight DECIMAL(5,2) DEFAULT NULL,
    height DECIMAL(5,2) DEFAULT NULL,
    bmi DECIMAL(4,1) GENERATED ALWAYS AS (
        CASE WHEN weight IS NOT NULL AND height IS NOT NULL AND height > 0
             THEN ROUND(weight / ((height/100) * (height/100)), 1)
             ELSE NULL END
    ) STORED,
    recorded_by BIGINT UNSIGNED DEFAULT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_vitals_patient (patient_id),
    INDEX idx_vitals_visit (visit_id),
    INDEX idx_vitals_time (recorded_at),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (visit_id) REFERENCES visits(id) ON DELETE SET NULL,
    FOREIGN KEY (recorded_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 7. CLINICAL NOTES (SOAP Notes)
-- ============================================================================

CREATE TABLE clinical_notes (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    visit_id BIGINT UNSIGNED DEFAULT NULL,
    note_type ENUM('soap', 'progress', 'consultation', 'discharge_summary', 'daily_note') NOT NULL DEFAULT 'soap',
    subjective TEXT DEFAULT NULL,
    objective TEXT DEFAULT NULL,
    assessment TEXT DEFAULT NULL,
    plan TEXT DEFAULT NULL,
    additional_notes TEXT DEFAULT NULL,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_cn_patient (patient_id),
    INDEX idx_cn_visit (visit_id),
    INDEX idx_cn_type (note_type),
    INDEX idx_cn_doctor (created_by),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (visit_id) REFERENCES visits(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 8. INVESTIGATIONS / LAB
-- ============================================================================

CREATE TABLE investigations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    visit_id BIGINT UNSIGNED DEFAULT NULL,
    test_name VARCHAR(255) NOT NULL,
    test_category VARCHAR(100) DEFAULT NULL,
    instructions TEXT DEFAULT NULL,
    status ENUM('ordered', 'sample_collected', 'in_progress', 'completed', 'cancelled') NOT NULL DEFAULT 'ordered',
    ordered_by BIGINT UNSIGNED DEFAULT NULL,
    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_inv_patient (patient_id),
    INDEX idx_inv_visit (visit_id),
    INDEX idx_inv_status (status),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (visit_id) REFERENCES visits(id) ON DELETE SET NULL,
    FOREIGN KEY (ordered_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Investigation results
CREATE TABLE investigation_results (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    investigation_id BIGINT UNSIGNED NOT NULL,
    parameter_name VARCHAR(255) NOT NULL,
    result_value TEXT DEFAULT NULL,
    reference_range VARCHAR(255) DEFAULT NULL,
    unit VARCHAR(50) DEFAULT NULL,
    is_abnormal TINYINT(1) GENERATED ALWAYS AS (
        CASE WHEN result_value IS NOT NULL AND reference_range IS NOT NULL
             AND result_value NOT BETWEEN 
                CAST(SUBSTRING_INDEX(reference_range, '-', 1) AS DECIMAL(10,2))
                AND CAST(SUBSTRING_INDEX(reference_range, '-', -1) AS DECIMAL(10,2))
             THEN 1 ELSE 0 END
    ) STORED,
    recorded_by BIGINT UNSIGNED DEFAULT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_invr_investigation (investigation_id),
    FOREIGN KEY (investigation_id) REFERENCES investigations(id) ON DELETE CASCADE,
    FOREIGN KEY (recorded_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 9. PAYMENTS & INVOICES
-- ============================================================================

CREATE TABLE payments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED DEFAULT NULL,
    payment_type ENUM('appointment', 'procedure', 'investigation', 'consultation', 'admission', 'other') NOT NULL,
    payment_method ENUM('cash', 'card', 'mobile_banking', 'bank_transfer', 'insurance', 'other') NOT NULL DEFAULT 'cash',
    amount DECIMAL(12,2) NOT NULL,
    discount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    net_amount DECIMAL(12,2) GENERATED ALWAYS AS (amount - discount) STORED,
    reference_number VARCHAR(100) DEFAULT NULL,
    payment_date DATE NOT NULL,
    notes TEXT DEFAULT NULL,
    received_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_pay_patient (patient_id),
    INDEX idx_pay_date (payment_date),
    INDEX idx_pay_type (payment_type),
    INDEX idx_pay_receiver (received_by),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE SET NULL,
    FOREIGN KEY (received_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE invoices (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    invoice_number VARCHAR(50) NOT NULL UNIQUE,
    invoice_date DATE NOT NULL,
    subtotal DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    discount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    tax DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    total DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    paid_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    due_amount DECIMAL(12,2) GENERATED ALWAYS AS (total - paid_amount) STORED,
    status ENUM('draft', 'issued', 'paid', 'partial', 'cancelled', 'refunded') NOT NULL DEFAULT 'draft',
    notes TEXT DEFAULT NULL,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_inv_patient (patient_id),
    INDEX idx_inv_number (invoice_number),
    INDEX idx_inv_status (status),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE invoice_items (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    invoice_id BIGINT UNSIGNED NOT NULL,
    item_type ENUM('consultation', 'procedure', 'investigation', 'medication', 'bed_charge', 'service', 'other') NOT NULL,
    description VARCHAR(500) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(12,2) NOT NULL,
    total_price DECIMAL(12,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
    notes TEXT DEFAULT NULL,
    INDEX idx_invi_invoice (invoice_id),
    FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Payment-invoice link (many-to-many)
CREATE TABLE payment_invoices (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    payment_id BIGINT UNSIGNED NOT NULL,
    invoice_id BIGINT UNSIGNED NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    INDEX idx_pi_payment (payment_id),
    INDEX idx_pi_invoice (invoice_id),
    FOREIGN KEY (payment_id) REFERENCES payments(id) ON DELETE CASCADE,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- 10. PROCEDURES
-- ============================================================================

CREATE TABLE procedures (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    visit_id BIGINT UNSIGNED DEFAULT NULL,
    procedure_name VARCHAR(255) NOT NULL,
    procedure_category VARCHAR(100) DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    result TEXT DEFAULT NULL,
    performed_by BIGINT UNSIGNED DEFAULT NULL,
    performed_at TIMESTAMP NULL DEFAULT NULL,
    status ENUM('scheduled', 'in_progress', 'completed', 'cancelled') NOT NULL DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_proc_patient (patient_id),
    INDEX idx_proc_performer (performed_by),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (visit_id) REFERENCES visits(id) ON DELETE SET NULL,
    FOREIGN KEY (performed_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 11. ADMISSIONS
-- ============================================================================

CREATE TABLE admissions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    admission_date DATETIME NOT NULL,
    discharge_date DATETIME DEFAULT NULL,
    ward VARCHAR(100) DEFAULT NULL,
    bed_number VARCHAR(50) DEFAULT NULL,
    department VARCHAR(100) DEFAULT NULL,
    admitting_doctor BIGINT UNSIGNED DEFAULT NULL,
    diagnosis_at_admission TEXT DEFAULT NULL,
    discharge_summary TEXT DEFAULT NULL,
    status ENUM('admitted', 'discharged', 'transferred') NOT NULL DEFAULT 'admitted',
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_adm_patient (patient_id),
    INDEX idx_adm_status (status),
    INDEX idx_adm_ward (ward),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (admitting_doctor) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 12. MEDICATION ADMINISTRATION RECORDS (MAR)
-- ============================================================================

CREATE TABLE medication_admin_records (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    prescription_medication_id BIGINT UNSIGNED DEFAULT NULL,
    administered_by BIGINT UNSIGNED NOT NULL,
    administered_at DATETIME NOT NULL,
    dose_given VARCHAR(100) DEFAULT NULL,
    route VARCHAR(100) DEFAULT NULL,
    site VARCHAR(100) DEFAULT NULL,
    status ENUM('given', 'not_given', 'refused', 'held') NOT NULL DEFAULT 'given',
    reason_if_not_given TEXT DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    shift ENUM('morning', 'evening', 'night') DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_mar_patient (patient_id),
    INDEX idx_mar_admin (administered_by),
    INDEX idx_mar_date (administered_at),
    INDEX idx_mar_shift (shift),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (prescription_medication_id) REFERENCES prescription_medications(id) ON DELETE SET NULL,
    FOREIGN KEY (administered_by) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- 13. DRUG REMINDERS
-- ============================================================================

CREATE TABLE drug_reminders (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    prescription_medication_id BIGINT UNSIGNED DEFAULT NULL,
    reminder_time TIME NOT NULL,
    reminder_days JSON DEFAULT NULL COMMENT 'Days of week (0=Sun, 6=Sat)',
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_dr_patient (patient_id),
    INDEX idx_dr_active (is_active),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (prescription_medication_id) REFERENCES prescription_medications(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 14. CLINICAL ALERTS / NOTIFICATIONS
-- ============================================================================

CREATE TABLE notifications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED DEFAULT NULL COMMENT 'NULL = broadcast to all',
    patient_id BIGINT UNSIGNED DEFAULT NULL,
    type ENUM('alert', 'reminder', 'handover', 'lab_result', 'appointment', 'system', 'message') NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT DEFAULT NULL,
    severity ENUM('info', 'warning', 'critical', 'emergency') NOT NULL DEFAULT 'info',
    is_read TINYINT(1) NOT NULL DEFAULT 0,
    is_dismissed TINYINT(1) NOT NULL DEFAULT 0,
    link_url VARCHAR(500) DEFAULT NULL,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_notif_user (user_id),
    INDEX idx_notif_patient (patient_id),
    INDEX idx_notif_read (is_read),
    INDEX idx_notif_type (type),
    INDEX idx_notif_created (created_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 15. HANDOVERS (Shift Handover Notes)
-- ============================================================================

CREATE TABLE handovers (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ward VARCHAR(100) DEFAULT NULL,
    shift ENUM('morning', 'evening', 'night') NOT NULL,
    handover_date DATE NOT NULL,
    content TEXT NOT NULL,
    patient_ids JSON DEFAULT NULL COMMENT 'Array of patient IDs discussed',
    created_by BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_ho_date (handover_date),
    INDEX idx_ho_shift (shift),
    INDEX idx_ho_creator (created_by),
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================================
-- 16. REFERRALS
-- ============================================================================

CREATE TABLE referrals (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    from_doctor BIGINT UNSIGNED DEFAULT NULL,
    to_doctor VARCHAR(255) DEFAULT NULL,
    to_department VARCHAR(100) DEFAULT NULL,
    to_hospital VARCHAR(255) DEFAULT NULL,
    referral_reason TEXT NOT NULL,
    clinical_notes TEXT DEFAULT NULL,
    priority ENUM('routine', 'urgent', 'emergency') NOT NULL DEFAULT 'routine',
    status ENUM('sent', 'accepted', 'completed', 'cancelled') NOT NULL DEFAULT 'sent',
    response_notes TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_ref_patient (patient_id),
    INDEX idx_ref_from (from_doctor),
    INDEX idx_ref_status (status),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (from_doctor) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 17. CHAT / CONSULTATION MESSAGES
-- ============================================================================

CREATE TABLE chat_messages (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    sender_id BIGINT UNSIGNED DEFAULT NULL,
    sender_name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    message_type ENUM('text', 'image', 'file', 'audio', 'video') NOT NULL DEFAULT 'text',
    file_url VARCHAR(500) DEFAULT NULL,
    is_read TINYINT(1) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_chat_patient (patient_id),
    INDEX idx_chat_sender (sender_id),
    INDEX idx_chat_created (created_at),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- Teleconsultation records
CREATE TABLE teleconsults (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    doctor_id BIGINT UNSIGNED DEFAULT NULL,
    consult_date DATETIME NOT NULL,
    consult_type ENUM('video', 'audio', 'chat', 'phone') NOT NULL DEFAULT 'chat',
    duration_minutes INT DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    status ENUM('scheduled', 'in_progress', 'completed', 'cancelled') NOT NULL DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_tc_patient (patient_id),
    INDEX idx_tc_doctor (doctor_id),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 18. CONSENT FORMS
-- ============================================================================

CREATE TABLE consent_forms (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    patient_id BIGINT UNSIGNED NOT NULL,
    form_type VARCHAR(100) NOT NULL,
    form_data JSON NOT NULL,
    signed_by BIGINT UNSIGNED DEFAULT NULL,
    signed_at TIMESTAMP NULL DEFAULT NULL,
    created_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_cf_patient (patient_id),
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (signed_by) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 19. AUDIT LOG
-- ============================================================================

CREATE TABLE audit_logs (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED DEFAULT NULL,
    patient_id BIGINT UNSIGNED DEFAULT NULL,
    action ENUM('create', 'read', 'update', 'delete', 'login', 'logout', 'export', 'print') NOT NULL,
    entity_type VARCHAR(100) NOT NULL COMMENT 'e.g., patient, prescription, payment',
    entity_id BIGINT UNSIGNED DEFAULT NULL,
    old_values JSON DEFAULT NULL,
    new_values JSON DEFAULT NULL,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_audit_user (user_id),
    INDEX idx_audit_patient (patient_id),
    INDEX idx_audit_entity (entity_type, entity_id),
    INDEX idx_audit_action (action),
    INDEX idx_audit_created (created_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 20. SITE SETTINGS
-- ============================================================================

CREATE TABLE site_settings (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(255) NOT NULL UNIQUE,
    setting_value JSON NOT NULL,
    setting_group VARCHAR(100) DEFAULT 'general',
    description TEXT DEFAULT NULL,
    updated_by BIGINT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_ss_key (setting_key),
    INDEX idx_ss_group (setting_group),
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 21. BED MANAGEMENT
-- ============================================================================

CREATE TABLE beds (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ward VARCHAR(100) NOT NULL,
    bed_number VARCHAR(50) NOT NULL,
    bed_type ENUM('general', 'semi_private', 'private', 'icu', 'ccu', 'hdu') NOT NULL DEFAULT 'general',
    status ENUM('available', 'occupied', 'reserved', 'maintenance', 'cleaning') NOT NULL DEFAULT 'available',
    current_patient_id BIGINT UNSIGNED DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_bed_ward_number (ward, bed_number),
    INDEX idx_beds_status (status),
    INDEX idx_beds_ward (ward),
    FOREIGN KEY (current_patient_id) REFERENCES patients(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================================================
-- 22. INVESTIGATION RATES / PRICE LIST
-- ============================================================================

CREATE TABLE investigation_rates (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    test_name VARCHAR(255) NOT NULL,
    test_category VARCHAR(100) DEFAULT NULL,
    price DECIMAL(10,2) NOT NULL,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_ir_category (test_category),
    INDEX idx_ir_active (is_active)
) ENGINE=InnoDB;

-- ============================================================================
-- INDEX SUMMARY
-- ============================================================================
-- Tables: 24
-- Indexes: 60+
-- Foreign Keys: 35+
-- Total coverage: patients, visits, prescriptions, appointments, vitals,
--                 clinical notes, investigations, payments, invoices,
--                 procedures, admissions, MAR, reminders, notifications,
--                 handovers, referrals, chat, teleconsults, consent forms,
--                 audit logs, settings, beds, investigation rates, users

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================
