# Storage Adapter Audit Report

## Phase 3: Eliminate Business Data from storageAdapter

### Overview

All storage keys used across the codebase have been audited and classified.

### Category A: Business Data — MUST be migrated to PHP API/MySQL

| Key | Files | Module |
|-----|-------|--------|
| `patients` | Layout.tsx | Patients |
| `registry` | Layout.tsx, PatientProfile.tsx | Staff Registry |
| `patient_registry` | Layout.tsx | Patient Registry |
| `patient_reg_incomplete_{id}` | Patients.tsx, EmergencyPrescription.tsx | Patients |
| `patient_register_{patientId}` | PatientProfile.tsx, PatientDashboard.tsx | Patients |
| `doctor_profile_{email}` | AdmitPatientDialog.tsx, PrescriptionPad, PatientDashboard.tsx | Doctors |
| `medicare_doctors_data` | PatientProfile.tsx | Doctors |
| `medicare_doctors_registry` | PrescriptionPad, PatientDashboard, PrescriptionPadPreview, UpgradedPrescriptionEMR, LandingPage | Doctors Registry |
| `staff_shifts` | PatientProfile.tsx | Staff |
| `medicare_drug_reminders` | Layout.tsx, App.tsx, NurseDashboard.tsx | Drug Reminders |
| `drugReminders_*` | App.tsx, Layout.tsx | Drug Reminders |
| `medicare_appointments` | ConsultantDashboard.tsx, StaffDashboard.tsx | Appointments |
| `clinic_appointments` | Appointments.tsx | Appointments |
| `public_appointment_requests` | Appointments.tsx | Appointments |
| `appointments` | Staff.tsx, BedManagement.tsx | Appointments |
| `medicare_clinical_data` | AuditLog.tsx, hybridStorage.ts | Clinical Data |
| `clinicalAlerts_dismissed` | ClinicalAlertsPanel.tsx | Clinical Alerts |
| `soapNotes_{id}` | ConsultantDashboard.tsx, MedicalOfficerDashboard.tsx | SOAP Notes |
| `clinicalNotes_{id}` | InternDashboard.tsx | Clinical Notes |
| `vitals_{patientId}` | ConsultantDashboard.tsx, NurseDashboard, MedicalOfficerDashboard | Vitals |
| `alerts_{id}` | ConsultantDashboard.tsx | Alerts |
| `intakeOutput_{id}_{today}` | NurseDashboard.tsx | Intake/Output |
| `dischargeStatus_{id}` | MedicalOfficerDashboard.tsx | Discharge |
| `pregnancy_{patientId}` | PatientDashboard.tsx | Pregnancy Data |
| `teleconsults_{patientId}` | PatientChat.tsx, PatientTimeline.tsx | Teleconsults |
| `referrals_{email}_{patStr}` | PatientTimeline.tsx | Referrals |
| `procedureLogs_{patStr}` | PatientTimeline.tsx | Procedure Logs |
| `admissionHistory_{patStr}` | PatientTimeline.tsx | Admissions |
| `consentForms_{patientId}` | ConsentForm.tsx | Consent Forms |
| `visits_{email}` | PatientTimeline.tsx | Visits |
| `prescriptions_{email}` | PatientTimeline.tsx | Prescriptions |
| `doctorProfile` | PrescriptionForm.tsx | Doctor Profile |
| `appointment_payments` | Layout.tsx | Payments |
| `investigation_payments` | Layout.tsx | Payments |
| `procedure_payments` | Layout.tsx | Payments |
| `other_payments` | Layout.tsx | Payments |
| `appointmentPayments` | OutstandingBalances.tsx | Payments |
| `procedurePayments` | OutstandingBalances.tsx, Staff.tsx | Payments |
| `moneyReceipts` | StaffDashboard.tsx | Payments |
| `medicare_audit_log` | MedicalOfficerDashboard.tsx | Audit Logs |
| `medicare_last_sync` | AdminDashboard.tsx | Sync Status |
| `medicare_last_sync_at` | SyncStatusBadge.tsx | Sync Status |
| `medicare_last_login` | ConsultantDashboard.tsx | Login Tracking |
| `medicare_patient_submissions` | patientDashboardTypes.ts | Patient Submissions |
| `vaccination_{id}` | patientDashboardTypes.ts | Vaccinations |
| `family_history_risk_{id}` | patientDashboardTypes.ts | Family History |
| `allergy_overrides_{id}` | patientDashboardTypes.ts | Allergies |
| `handovers` | Layout.tsx | Handovers |
| `visit_form_data_{id}` | PatientDashboard.tsx | Visit Form |
| `medAdminRecord_{id}_{date}` | Layout.tsx | Medication Admin |
| `savedPrescriptionPads_{patientId}` | PatientDashboard.tsx | Prescriptions |
| `treatmentReferencePDF` | NewPrescriptionMode.tsx | Prescriptions |
| `padStorage_*` | PrescriptionPad.tsx | Prescriptions |
| `autosave_*` | VisitForm.tsx | Visit Autosave |
| `rates_*` | InvestigationPayment.tsx, ProcedurePayment.tsx, AppointmentPayment.tsx | Rates |
| `receipts_*` | MoneyReceipt.tsx | Receipts |
| `shifts_*` | Staff.tsx | Staff Shifts |
| `attendance_*` | Staff.tsx | Staff Attendance |
| `leaveRequests_*` | Staff.tsx | Leave Requests |
| `wardRoundChecklist_*` | WardRound.tsx | Ward Rounds |
| `clinicalAlerts_*` | ClinicalAlertsPanel.tsx | Clinical Alerts |
| `patients_*` | App.tsx, Layout.tsx, ConsultantDashboard.tsx, etc. | Patients (scanned) |
| `serialDisplayVideoUrl_*` | SerialDisplay.tsx | Display Config |
| `testimonials_*` | TestimonialsSection.tsx | Landing Page |
| `gallery_*` | GallerySection.tsx | Landing Page |
| `lab_system_name` | Settings.tsx | Lab Config |
| `lab_api_endpoint` | Settings.tsx | Lab Config |
| `clinic_prescriptions` | Staff.tsx | Prescriptions |
| `medicare_current_doctor` | storageAdapter.ts, PrescriptionPad.tsx, SerialDisplay.tsx | Auth/Doctor |
| `medicare_logged_in_doctor` | PatientProfile.tsx | Auth/Doctor |
| `staff_auth` | PatientDashboard.tsx | Auth/Staff |
| `phpAuthToken` | api.ts | Auth Token |
| `app_current_user_email` | SerialDisplay.tsx | User Email |

### Category B: Authentication Tokens — MUST be removed from browser storage

| Key | Files | Issue |
|-----|-------|-------|
| `phpAuthToken` | lib/api.ts | JWT token in localStorage |
| `staff_auth` | PatientDashboard.tsx | Staff auth in localStorage |
| `medicare_current_doctor` | storageAdapter.ts, various | Doctor session in localStorage |
| `medicare_logged_in_doctor` | PatientProfile.tsx | Doctor login in localStorage |

### Category C: UI Preferences — KEEP in browser storage

| Key | Files | Description |
|-----|-------|-------|
| `patient_language` | PatientDashboard.tsx | Language preference (en/bn) |
| `classroom_arman` | Settings.tsx | Admin content (non-sensitive) |
| `classroom_samia` | Settings.tsx | Admin content (non-sensitive) |
| `chamber_arman` | Settings.tsx | Admin content (non-sensitive) |
| `chamber_samia` | Settings.tsx | Admin content (non-sensitive) |
| `profile_arman` | Settings.tsx | Admin content (non-sensitive) |
| `profile_samia` | Settings.tsx | Admin content (non-sensitive) |
| `prescriptionHeaders_chamber` | Settings.tsx | Prescription header preference |
| `prescriptionHeaders_hospital` | Settings.tsx | Prescription header preference |
| `theme` | (not found but reserved) | Theme preference |
| `sidebar_collapsed` | (not found but reserved) | Sidebar state |

### Category D: Temporary Cache / Drafts — Should use API

| Key | Description |
|-----|-------------|
| Autosave drafts (visit form, emergency prescription) | Form drafts |
| Treatment templates | Cached templates |
| Advice templates | Cached templates |

### Summary

- **Total unique storage keys:** ~80+
- **Business data keys (A):** ~70+ — All must move to MySQL
- **Auth keys (B):** ~4 — Must use HTTP-only cookies / PHP sessions
- **UI preference keys (C):** ~10 — Keep in browser storage
- **Temporary cache (D):** ~5 — Should use API

### Module Status

| Module | Storage Usage | Migration Status |
|--------|---------------|-----------------|
| Patients | Heavy | Services exist, hooks exist, components still use localStorage |
| Doctors/Staff | Heavy | Services exist, components still use localStorage |
| Appointments | Heavy | Services exist, hooks exist, components still use localStorage |
| Prescriptions | Heavy | Services exist, hooks exist, components still use localStorage |
| Admissions | Medium | Services exist, hooks exist, components still use localStorage |
| Clinical Notes | Heavy | Services exist, hooks exist, components still use localStorage |
| Investigations | Medium | Services exist, components still use localStorage |
| Payments | Heavy | Services exist, components still use localStorage |
| Notifications | Medium | Services exist, components still use localStorage |
| Landing Page | Medium | Services exist, components still use localStorage |
| Settings | Medium | Services exist, components still use localStorage |
| Audit Logs | Light | Services exist, components still use localStorage |
| Auth | Light | Hooks use API, old api.ts still uses localStorage |
