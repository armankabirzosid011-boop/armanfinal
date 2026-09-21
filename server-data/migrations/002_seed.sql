-- ============================================================================
-- Seed Data for Dr. Arman Kabir Care
-- ============================================================================

-- ─── Default Admin User ────────────────────────────────────────────────────
-- NOTE: Database USE is handled by migrate.php/setup
-- Password: admin123 (CHANGE IMMEDIATELY after first login)
-- Hash generated with PHP: password_hash('admin123', PASSWORD_BCRYPT)

INSERT INTO users (email, password_hash, full_name, name_bn, role, phone, is_active, email_verified_at) VALUES
('admin@drarmankabir.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin User', 'এডমিন', 'admin', '+8801700000000', 1, NOW()),
('dr.arman@drarmankabir.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Dr. Arman Kabir', 'ডা. আরমান কবির', 'consultant_doctor', '+8801711111111', 1, NOW()),
('nurse@drarmankabir.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Staff Nurse', 'স্টাফ নার্স', 'nurse', '+8801722222222', 1, NOW()),
('reception@drarmankabir.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Receptionist', 'রিসেপশনিস্ট', 'reception', '+8801733333333', 1, NOW());

-- ─── Site Settings ─────────────────────────────────────────────────────────
INSERT INTO site_settings (setting_key, setting_value, setting_group, description) VALUES
('clinic_name', '"Dr. Arman Kabir Care"', 'general', 'Clinic/Hospital display name'),
('clinic_name_bn', '"ডা. আরমান কবির কেয়ার"', 'general', 'Bangla clinic name'),
('clinic_address', '"123, Dhaka Medical Road, Dhaka-1000"', 'general', 'Clinic address'),
('clinic_phone', '"+880-2-1234567"', 'general', 'Clinic phone number'),
('clinic_email', '"info@drarmankabir.com"', 'general', 'Clinic email'),
('working_hours', '{"weekdays": "9:00 AM - 5:00 PM", "friday": "Closed", "saturday": "10:00 AM - 2:00 PM"}', 'schedule', 'Working hours'),
('consultation_fee', '{"regular": 1000, "follow_up": 500, "emergency": 1500}', 'fees', 'Consultation fees'),
('appointment_interval', '15', 'schedule', 'Minutes between appointments'),
('max_daily_appointments', '50', 'schedule', 'Maximum appointments per day'),
('language_default', '"en"', 'general', 'Default language: en or bn'),
('currency', '"BDT"', 'general', 'Currency code'),
('timezone', '"Asia/Dhaka"', 'general', 'Timezone'),
('enable_online_booking', 'true', 'features', 'Enable public online appointment booking'),
('enable_teleconsultation', 'true', 'features', 'Enable teleconsultation feature'),
('enable_sms_notifications', 'false', 'features', 'Enable SMS notifications'),
('investigation_rates', '{"CBC": 500, "Blood Sugar": 200, "Lipid Profile": 1200, "LFT": 800, "RFT": 800, "HbA1c": 1500, "TSH": 1000, "Urine R/E": 300, "Chest X-ray": 800, "ECG": 500, "Echocardiogram": 3000, "Ultrasound": 2500}', 'fees', 'Investigation price list');

-- ─── Sample Investigation Rates ───────────────────────────────────────────
INSERT INTO investigation_rates (test_name, test_category, price) VALUES
('CBC', 'Hematology', 500.00),
('Blood Sugar Fasting', 'Biochemistry', 200.00),
('Blood Sugar 2h ABF', 'Biochemistry', 250.00),
('HbA1c', 'Biochemistry', 1500.00),
('Lipid Profile', 'Biochemistry', 1200.00),
('S. Creatinine', 'Biochemistry', 400.00),
('SGPT/ALT', 'Biochemistry', 400.00),
('SGOT/AST', 'Biochemistry', 400.00),
('S. Bilirubin', 'Biochemistry', 400.00),
('S. Albumin', 'Biochemistry', 350.00),
('LFT', 'Biochemistry', 800.00),
('RFT', 'Biochemistry', 800.00),
('TSH', 'Hormone', 1000.00),
('T3', 'Hormone', 800.00),
('T4', 'Hormone', 800.00),
('Urine R/E', 'Urinalysis', 300.00),
('Urine C/S', 'Microbiology', 500.00),
('Chest X-ray', 'Radiology', 800.00),
('ECG', 'Cardiology', 500.00),
('Echocardiogram', 'Cardiology', 3000.00),
('Ultrasound Whole Abdomen', 'Radiology', 2500.00),
('Ultrasound KUB', 'Radiology', 2000.00),
('ECG with Stress Test', 'Cardiology', 2500.00),
('HBsAg', 'Serology', 600.00),
('Anti-HCV', 'Serology', 800.00),
('S. Electrolytes', 'Biochemistry', 600.00),
('S. Uric Acid', 'Biochemistry', 400.00),
('CRP', 'Serology', 800.00),
('ESR', 'Hematology', 300.00),
('BT/CT', 'Hematology', 400.00);

-- ─── Sample Beds ───────────────────────────────────────────────────────────
INSERT INTO beds (ward, bed_number, bed_type, status) VALUES
('General Ward', 'G-01', 'general', 'available'),
('General Ward', 'G-02', 'general', 'available'),
('General Ward', 'G-03', 'general', 'available'),
('General Ward', 'G-04', 'general', 'available'),
('General Ward', 'G-05', 'general', 'available'),
('General Ward', 'G-06', 'general', 'available'),
('Semi Private', 'SP-01', 'semi_private', 'available'),
('Semi Private', 'SP-02', 'semi_private', 'available'),
('Semi Private', 'SP-03', 'semi_private', 'available'),
('Private Cabin', 'P-01', 'private', 'available'),
('Private Cabin', 'P-02', 'private', 'available'),
('Private Cabin', 'P-03', 'private', 'available'),
('ICU', 'ICU-01', 'icu', 'available'),
('ICU', 'ICU-02', 'icu', 'available'),
('CCU', 'CCU-01', 'ccu', 'available'),
('HDU', 'HDU-01', 'hdu', 'available');
