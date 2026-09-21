 * React Query hooks — PHP/MySQL Backend
 *
 * All CRUD operations now target the PHP/MySQL API via the service layer.
 * No localStorage, sessionStorage, or IndexedDB is used for business data.
 * No canister actors or sync queue code.
 * IDs are number (MySQL INT/BIGINT).
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  patientService,
  visitService,
  prescriptionService,
  appointmentService,
  clinicalNotesService,
  admissionService,
  vitalService,
  userService,
} from '../services';
import type {
  AdmissionHistory,
  BedRecord,
  ClinicalAlert,
  ClinicalNote,
  ClinicalOrder,
  DrugReminder,
  Encounter,
  Observation,
  Patient,
  Prescription,
  UserProfile,
  Visit,
  VitalSigns,
} from '../types';

// ─── Patients ───────────────────────────────────────────────────────────────

export function useGetAllPatients() {
  return useQuery<Patient[]>({
    queryKey: ['patients'],
    queryFn: async () => {
      const result = await patientService.getAll(100);
      return result.items;
    },
  });
}

export function useGetPatient(id: number | null) {
  return useQuery<Patient | null>({
    queryKey: ['patient', id?.toString()],
    queryFn: () => patientService.getById(id!),
    enabled: !!id,
  });
}

export function useCreatePatient() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      nameBn?: string | null;
      dateOfBirth?: string | null;
      gender?: string;
      phone?: string | null;
      email?: string | null;
      address?: string | null;
      bloodGroup?: string | null;
      weight?: number | null;
      height?: number | null;
      allergies?: string[];
      chronicConditions?: string[];
      pastSurgicalHistory?: string | null;
      patientType?: string;
      photo?: string | null;
    }) => {
      return patientService.create(data);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['patients'] }),
  });
}

export function useUpdatePatient() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      id: number;
      fullName?: string;
      nameBn?: string | null;
      dateOfBirth?: string | null;
      gender?: string;
      phone?: string | null;
      email?: string | null;
      address?: string | null;
      bloodGroup?: string | null;
      weight?: number | null;
      height?: number | null;
      allergies?: string[];
      chronicConditions?: string[];
      pastSurgicalHistory?: string | null;
      patientType?: string;
      photo?: string | null;
    }) => {
      return patientService.update(data);
    },
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ['patients'] });
      qc.invalidateQueries({ queryKey: ['patient', vars.id.toString()] });
    },
  });
}

export function useDeletePatient() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await patientService.delete(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['patients'] }),
  });
}

// ─── Visits ─────────────────────────────────────────────────────────────────

export function useGetVisitsByPatient(patientId: number | null) {
  return useQuery<Visit[]>({
    queryKey: ['visits', patientId?.toString()],
    queryFn: () => visitService.getByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreateVisit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      patientId: number;
      visitDate?: string;
      chiefComplaint?: string;
      historyOfPresentIllness?: string | null;
      vitalSigns?: VitalSigns;
      physicalExamination?: string | null;
      diagnosis?: string | null;
      notes?: string | null;
      visitType?: string;
    }) => {
      return visitService.create(data);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['visits', vars.patientId.toString()] }),
  });
}

export function useDeleteVisit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, patientId }: { id: number; patientId: number }) => {
      await visitService.delete(id, patientId);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['visits', vars.patientId.toString()] }),
  });
}

export function useUpdateVisit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      id: number;
      patientId: number;
      visitDate?: string;
      chiefComplaint?: string;
      historyOfPresentIllness?: string | null;
      vitalSigns?: VitalSigns;
      physicalExamination?: string | null;
      diagnosis?: string | null;
      notes?: string | null;
      visitType?: string;
    }) => {
      return visitService.update(data);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['visits', vars.patientId.toString()] }),
  });
}

// ─── Prescriptions ─────────────────────────────────────────────────────────

export function useGetPrescriptionsByPatient(patientId: number | null) {
  return useQuery<Prescription[]>({
    queryKey: ['prescriptions', patientId?.toString()],
    queryFn: () => prescriptionService.getByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreatePrescription() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      patientId: number;
      visitId?: number | null;
      prescriptionDate?: string;
      diagnosis?: string | null;
      medications: import('../types').Medication[];
      notes?: string | null;
    }) => {
      return prescriptionService.create(data);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['prescriptions', vars.patientId.toString()] }),
  });
}

export function useDeletePrescription() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, patientId }: { id: number; patientId: number }) => {
      await prescriptionService.delete(id, patientId);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['prescriptions', vars.patientId.toString()] }),
  });
}

export function useUpdatePrescription() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      id: number;
      patientId: number;
      visitId?: number | null;
      prescriptionDate?: string;
      diagnosis?: string | null;
      medications: import('../types').Medication[];
      notes?: string | null;
    }) => {
      return prescriptionService.update(data);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['prescriptions', vars.patientId.toString()] }),
  });
}

// ─── User profile ───────────────────────────────────────────────────────────

export function useGetCallerUserProfile() {
  return useQuery<UserProfile | null>({
    queryKey: ['userProfile'],
    queryFn: () => userService.getProfile(),
  });
}

export function useGetCallerUserRole() {
  return useQuery<string>({
    queryKey: ['userRole'],
    queryFn: () => userService.getRole(),
  });
}

export function useSaveCallerUserProfile() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      await userService.updateProfile(profile);
      return profile;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['userProfile'] }),
  });
}

// ─── Clinical Data Hooks ───────────────────────────────────────────────────

export function useGetEncountersByPatient(patientId: number | null) {
  return useQuery<Encounter[]>({
    queryKey: ['encounters', patientId?.toString()],
    queryFn: () => clinicalNotesService.getEncountersByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreateEncounter() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { patientId: number; encounterData: Record<string, unknown> }) =>
      clinicalNotesService.createEncounter(data.patientId, data.encounterData),
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['encounters', vars.patientId.toString()] }),
  });
}

export function useGetObservationsByPatient(patientId: number | null) {
  return useQuery<Observation[]>({
    queryKey: ['observations', patientId?.toString()],
    queryFn: () => clinicalNotesService.getObservationsByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreateObservation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { patientId: number; observationData: Record<string, unknown> }) =>
      clinicalNotesService.createObservation(data.patientId, data.observationData),
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['observations', vars.patientId.toString()] }),
  });
}

export function useGetClinicalNotesByPatient(patientId: number | null) {
  return useQuery<ClinicalNote[]>({
    queryKey: ['clinicalNotes', patientId?.toString()],
    queryFn: () => clinicalNotesService.getNotesByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreateClinicalNote() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { patientId: number; noteData: Record<string, unknown> }) =>
      clinicalNotesService.createNote(data.patientId, data.noteData),
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['clinicalNotes', vars.patientId.toString()] }),
  });
}

export function useGetOrdersByPatient(patientId: number | null) {
  return useQuery<ClinicalOrder[]>({
    queryKey: ['orders', patientId?.toString()],
    queryFn: () => clinicalNotesService.getOrdersByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreateOrder() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { patientId: number; orderData: Record<string, unknown> }) =>
      clinicalNotesService.createOrder(data.patientId, data.orderData),
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['orders', vars.patientId.toString()] }),
  });
}

// ─── Beds & Admissions ─────────────────────────────────────────────────────
export function useGetAllBeds() {
  return useQuery<BedRecord[]>({
    queryKey: ['beds'],
    queryFn: () => admissionService.getAllBeds(),
  });
}

export function useGetBedsByWard(ward: string | null) {
  return useQuery<BedRecord[]>({
    queryKey: ['beds', ward],
    queryFn: () => admissionService.getBedsByWard(ward!),
    enabled: !!ward,
  });
}

export function useCreateBedRecord() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { bedNumber: string; ward: string; hospitalName?: string; floor?: string; bedType?: string }) =>
      admissionService.createBed({
        ward: data.ward,
        bedNumber: data.bedNumber,
        bedType: data.bedType,
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['beds'] }),
  });
}

export function useAssignBed() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { bedId: number; patientId: number; patientName?: string }) =>
      admissionService.assignBed(data.bedId, data.patientId),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['beds'] }),
  });
}

export function useCreateBed() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { ward: string; bedNumber: string; bedType?: string }) =>
      admissionService.createBed(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['beds'] }),
  });
}

// ─── Drug Reminders & Alerts ───────────────────────────────────────────────

export function useGetDrugReminders() {
  return useQuery<DrugReminder[]>({
    queryKey: ['drugReminders'],
    queryFn: async () => {
      const { get } = await import('../lib/apiClient');
      return get<DrugReminder[]>('/drugs/reminders.php');
    },
  });
}

export function useGetClinicalAlerts() {
  return useQuery<ClinicalAlert[]>({
    queryKey: ['clinicalAlerts'],
    queryFn: async () => {
      const { get } = await import('../lib/apiClient');
      return get<ClinicalAlert[]>('/clinical/alerts-list.php');
    },
  });
}

// ─── Appointments ──────────────────────────────────────────────────────────

export function useGetAppointmentsByPatient(patientId: number | null) {
  return useQuery<any[]>({
    queryKey: ['appointments', patientId?.toString()],
    queryFn: () => appointmentService.getByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreateAppointment() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      patientId: number;
      appointmentDate?: string;
      doctorName?: string;
      reason?: string;
      status?: string;
    }) => {
      return appointmentService.create(data);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['appointments'] }),
  });
}

// ─── Vitals ─────────────────────────────────────────────────────────────────

export function useGetVitalsByPatient(patientId: number | null) {
  return useQuery<any[]>({
    queryKey: ['vitals', patientId?.toString()],
    queryFn: () => vitalService.getByPatient(patientId!),
    enabled: !!patientId,
  });
}

export function useCreateVitals() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      patientId: number;
      vitalSigns: VitalSigns;
      recordedAt?: string;
    }) => {
      return vitalService.create(data);
    },
    onSuccess: (_, vars) =>
      qc.invalidateQueries({ queryKey: ['vitals', vars.patientId.toString()] }),
  });
}

// ─── Sync status (no-op — always online with PHP) ─────────────────────────

export function useSyncStatus() {
  return useQuery({
    queryKey: ['syncStatus'],
    queryFn: async () => ({
      isOnline: navigator.onLine,
      pendingChanges: false,
      lastSyncAt: new Date(),
    }),
  });
}

export function isNetworkOnline(): boolean {
  return navigator.onLine;
}

// ─── Legacy helpers — localStorage fallbacks ─────────────────────────────

import type { Medication } from '../types';


function serializeBigInt(value: any): any {
  if (typeof value === 'bigint') return `__bigint__${value.toString()}`;
  if (Array.isArray(value)) return value.map(serializeBigInt);
  if (value !== null && typeof value === 'object') {
    const result: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) result[k] = serializeBigInt(v);
    return result;
  }
  return value;
}

function deserializeBigInt(value: any): any {
  if (typeof value === 'string' && value.startsWith('__bigint__')) return BigInt(value.slice(10));
  if (Array.isArray(value)) return value.map(deserializeBigInt);
  if (value !== null && typeof value === 'object') {
    const result: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) result[k] = deserializeBigInt(v);
    return result;
  }
  return value;
}

export function saveToStorage<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(serializeBigInt(data)));
  } catch (err) {
    console.error('saveToStorage error:', key, err);
    throw err;
  }
}

export function loadFromStorage<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    return deserializeBigInt(JSON.parse(raw));
  } catch {
    return [];
  }
}

export function loadFromAllDoctorKeys<T>(prefix: string): T[] {
  try {
    const results: T[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(`${prefix}_`)) {
        try {
          const raw = localStorage.getItem(key);
          if (!raw) continue;
          const items = deserializeBigInt(JSON.parse(raw));
          if (Array.isArray(items)) results.push(...items);
        } catch { /* skip */ }
      }
    }
    return results;
  } catch {
    return [];
  }
}

export function getDoctorEmail(email?: string): string {
  if (email) return email;
  return 'default';
}

export function storageKey(prefix: string, email?: string): string {
  return `${prefix}_${getDoctorEmail(email)}`;
}
}
export function getVisitFormData(visitId: string | number | null, email?: string): Record<string, any> | null {
  if (!visitId) return null;
  const id = String(visitId);
  const usedEmail = getDoctorEmail(email);
  try {
    const raw = localStorage.getItem(`visit_form_data_${id}_${usedEmail}`);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  for (let i = ;  i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(`visit_form_data_${id}_`)) {
      try {
        const raw = localStorage.getItem(key);
        if (raw) return JSON.parse(raw);
      } catch { /* ignore */ }
    }
  }
  return null;
}
export function generateRegisterNumber(): string {
  const counter = Number.parseInt(localStorage.getItem('medicare_register_counter') || '') + 1;
  localStorage.setItem('medicare_register_counter', String(counter));
  const year = new Date().getFullYear().toString().slice(-2);
  return `MR${year}${String(counter).padStart(5, '')}`;
}

/** @deprecated */
export function createPatientInStorage(_data: Record<string, unknown>): Patient {
  throw new Error('createPatientInStorage is deprecated. Use patientService.create() instead.');
}

/** @deprecated — Canister actor not used */
export function setCanisterActor(_actor: unknown): void {
  // No-op
}

/** @deprecated */
export function getCanisterActor(): unknown | null {
  return null;
}

// ── Prescription header image helpers (localStorage) ──────────────────────

export function getPrescriptionHeaderImage(type: string, doctorEmail?: string): string | null {
  const email = doctorEmail ?? getDoctorEmail();
  const key = `prescriptionHeaders_${type}_${email}`;
  return localStorage.getItem(key);
}

export function setPrescriptionHeaderImage(type: string, imageDataUrl: string, doctorEmail?: string): void {
  const email = doctorEmail ?? getDoctorEmail();
  const key = `prescriptionHeaders_${type}_${email}`;
  localStorage.setItem(key, imageDataUrl);
}

// ── Admission / Discharge hooks ──────────────────────────────────────────

export function useAdmitPatient() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      patientId: number;
      hospitalName: string;
      ward: string;
      bed: string;
      admittedOn: string;
      admittedBy: string;
      admittedByRole: string;
      reasonForAdmission?: string;
      carriedOverComplaints?: string[];
      carriedOverDiagnosis?: string[];
      carriedOverDrugHistory?: string[];
      carriedOverPrescriptions?: string[];
      isIntern?: boolean;
      consultantAssignment?: { email: string; name: string; assignedAt: string; assignedBy: string };
    }) => {
      return admissionService.admit({
        patientId: data.patientId,
        ward: data.ward,
        bedId: undefined, // PHP endpoint can parse bed as string
        admittedBy: data.admittedBy,
        diagnosis: data.reasonForAdmission,
        notes: JSON.stringify({
          hospitalName: data.hospitalName,
          bed: data.bed,
          carriedOverComplaints: data.carriedOverComplaints,
          carriedOverDiagnosis: data.carriedOverDiagnosis,
          carriedOverDrugHistory: data.carriedOverDrugHistory,
          carriedOverPrescriptions: data.carriedOverPrescriptions,
          isIntern: data.isIntern,
          consultantAssignment: data.consultantAssignment,
        }),
      });
    },
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ['patients'] });
      qc.invalidateQueries({ queryKey: ['patient', vars.patientId.toString()] });
      qc.invalidateQueries({ queryKey: ['admissionHistory', vars.patientId.toString()] });
    },
  });
}

export function useDischargePatient() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      patientId: number;
      dischargedBy?: string;
      dischargedByRole?: string;
    }) => {
      // Find the active admission and discharge via the API
      const admissions = await admissionService.getByPatient(data.patientId);
      const activeAdmission = admissions.find(
        (a) => a.status === 'active',
      );
      if (activeAdmission) {
        const admissionId = Number(activeAdmission.id);
        if (admissionId > 0) {
          await admissionService.discharge(admissionId, {
            dischargedBy: data.dischargedBy,
            dischargeSummary: 'Patient discharged',
            dischargeDate: new Date().toISOString(),
          });
        }
      }
      return data;
    },
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ['patients'] });
      qc.invalidateQueries({ queryKey: ['patient', vars.patientId.toString()] });
      qc.invalidateQueries({ queryKey: ['admissionHistory', vars.patientId.toString()] });
    },
  });
}

// ── Clinical alerts hooks ────────────────────────────────────────────────

export function useGetAlertsByPatient(patientId: number | null) {
  return useQuery<any[]>({
    queryKey: ['alerts', patientId?.toString()],
    queryFn: async () => {
      try {
        const { get } = await import('../lib/apiClient');
        return get<any[]>('/clinical/alerts-list.php', { patient_id: patientId });
      } catch {
        return [];
      }
    },
    enabled: !!patientId,
  });
}

export function useAcknowledgeAlert() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (alertId: number | string) => {
      const { post } = await import('../lib/apiClient');
      await post('/clinical/alerts-acknowledge.php', { alert_id: alertId });
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['alerts'] }),
  });
}

export function useGetAuditTrail(patientId: number | null) {
  return useQuery<any[]>({
    queryKey: ['auditTrail', patientId?.toString()],
    queryFn: async () => {
      try {
        const { get } = await import('../lib/apiClient');
        return get<any[]>('/audit/list.php', { patient_id: patientId });
      } catch {
        return [];
      }
    },
    enabled: !!patientId,
  });
}

export function useReassignConsultant() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      patientId: number;
      newConsultant: { email: string; name: string };
      assignedBy: string;
      assignedByName: string;
      assignedByRole: string;
    }) => {
      const { post } = await import('../lib/apiClient');
      await post('/patients/reassign-consultant.php', {
        patient_id: data.patientId,
        consultant_email: data.newConsultant.email,
        consultant_name: data.newConsultant.name,
        assigned_by: data.assignedBy,
        assigned_by_name: data.assignedByName,
        assigned_by_role: data.assignedByRole,
      });
    },
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ['patients'] });
      qc.invalidateQueries({ queryKey: ['patient', vars.patientId.toString()] });
    },
  });
}

// ── Prescription records helpers (localStorage) ──────────────────────────

function prescriptionRecordsKey(patientId: number | string): string {
  return `prescriptionRecords_${patientId}`;
}

export function loadPrescriptionRecords(patientId: number | string): any[] {
  try {
    const raw = localStorage.getItem(prescriptionRecordsKey(patientId));
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function savePrescriptionRecords(patientId: number | string, records: any[]): void {
  try {
    localStorage.setItem(prescriptionRecordsKey(patientId), JSON.stringify(records));
  } catch {
    // silently ignore
  }
}

// ── Drug reminders helpers (localStorage) ────────────────────────────────

function drugRemindersKey(patientId: number | string): string {
  return `drugReminders_${patientId}`;
}

function loadDrugReminders(patientId: number | string): any[] {
  try {
    const raw = localStorage.getItem(drugRemindersKey(patientId));
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveDrugReminders(patientId: number | string, reminders: any[]): void {
  try {
    localStorage.setItem(drugRemindersKey(patientId), JSON.stringify(reminders));
  } catch {
    // silently ignore
  }
}

export function autoPopulateDrugReminders(patientId: number | string, medications: any[], prescriptionId?: string): void {
  const existing = loadDrugReminders(patientId);
  const updated = [...existing];
  for (const med of medications) {
    const drugName = med.name || med.drugName || '';
    if (!drugName) continue;
    const existingIdx = updated.findIndex(
      (r: any) => r.drugName.toLowerCase() === drugName.toLowerCase(),
    );
    if (existingIdx >= 0) {
      updated[existingIdx] = {
        ...updated[existingIdx],
        prescriptionId: prescriptionId ?? updated[existingIdx].prescriptionId,
        dose: med.dose || updated[existingIdx].dose,
        frequency: med.frequency || updated[existingIdx].frequency,
        status: 'active',
        lastModified: new Date().toISOString(),
      };
    } else {
      updated.push({
        id: `reminder_${Date.now()}_${Math.random().toString(36).slice(2)}`,
        patientId: String(patientId),
        drugName,
        dose: med.dose,
        frequency: med.frequency,
        startDate: new Date().toISOString(),
        prescriptionId,
        status: 'active',
        reminderTimes: [],
        lastModified: new Date().toISOString(),
      });
    }
  }
  saveDrugReminders(patientId, updated);
}
