/**
 * Data Access Layer (DAL) - Service barrel export
 *
 * All services expose only CRUD methods:
 *   getAll(), getById(), create(), update(), delete(), search()
 *
 * No component accesses localStorage, sessionStorage, IndexedDB, or fetch() directly.
 * All data operations go through these services → PHP API → MySQL.
 */

export { authService } from './auth';
export type { DoctorAccount, PatientAccount } from './auth';

export { patientService } from './patients';
export type { CreatePatientData, UpdatePatientData } from './patients';

export { visitService } from './visits';
export type { CreateVisitData, UpdateVisitData } from './visits';

export { appointmentService } from './appointments';
export type { CreateAppointmentData, UpdateAppointmentData } from './appointments';

export { prescriptionService } from './prescriptions';
export type { CreatePrescriptionData, UpdatePrescriptionData } from './prescriptions';

export { staffService } from './staff';
export type { CreateStaffData, UpdateStaffData } from './staff';

export { clinicalNotesService } from './clinicalNotes';

export { userService } from './users';

export { landingService } from './landing';
export type { SiteConfig, HeroSection, AboutSection, FooterSection, EmergencyContact, SocialLink } from './landing';

export { settingsService } from './settings';
export type { SiteSetting } from './settings';

export { paymentService } from './payments';
export type { PaymentData } from './payments';

export { investigationService } from './investigations';
export type { InvestigationData } from './investigations';

export { notificationService } from './notifications';
export type { Notification } from './notifications';

export { auditService } from './audit';
export type { AuditLogEntry } from './audit';

export { vitalService } from './vitals';

export { admissionService } from './admissions';
