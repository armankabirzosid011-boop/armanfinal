/**
 * React Query hooks for the PHP REST API.
 *
 * Business data is never read from browser storage. Every query and mutation
 * delegates to a domain service, which calls PHP and MySQL.
 */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  admissionService,
  appointmentService,
  clinicalNotesService,
  patientService,
  prescriptionService,
  userService,
  vitalService,
  visitService,
} from '../services';
import type { ClinicalNote, ClinicalOrder, Encounter, Patient, Prescription, UserProfile, Visit, VitalSigns } from '../types';

export function useGetAllPatients() {
  return useQuery<Patient[]>({ queryKey: ['patients'], queryFn: async () => (await patientService.getAll(100)).items });
}

export function useGetPatient(id: number | null) {
  return useQuery<Patient | null>({ queryKey: ['patient', id], queryFn: () => patientService.getById(id!), enabled: id !== null });
}

export function useCreatePatient() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (data: Parameters<typeof patientService.create>[0]) => patientService.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: ['patients'] }) });
}

export function useUpdatePatient() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (data: Parameters<typeof patientService.update>[0]) => patientService.update(data), onSuccess: (_, data) => { qc.invalidateQueries({ queryKey: ['patients'] }); qc.invalidateQueries({ queryKey: ['patient', data.id] }); } });
}

export function useDeletePatient() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (id: number) => patientService.delete(id), onSuccess: () => qc.invalidateQueries({ queryKey: ['patients'] }) });
}

export function useGetVisitsByPatient(patientId: number | null) {
  return useQuery<Visit[]>({ queryKey: ['visits', patientId], queryFn: () => visitService.getByPatient(patientId!), enabled: patientId !== null });
}

export function useCreateVisit() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (data: Parameters<typeof visitService.create>[0]) => visitService.create(data), onSuccess: (_, data) => qc.invalidateQueries({ queryKey: ['visits', data.patientId] }) });
}

export function useUpdateVisit() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (data: Parameters<typeof visitService.update>[0]) => visitService.update(data), onSuccess: (_, data) => qc.invalidateQueries({ queryKey: ['visits', data.patientId] }) });
}

export function useDeleteVisit() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: ({ id, patientId }: { id: number; patientId: number }) => visitService.delete(id, patientId), onSuccess: (_, data) => qc.invalidateQueries({ queryKey: ['visits', data.patientId] }) });
}

export function useGetPrescriptionsByPatient(patientId: number | null) {
  return useQuery<Prescription[]>({ queryKey: ['prescriptions', patientId], queryFn: () => prescriptionService.getByPatient(patientId!), enabled: patientId !== null });
}

export function useCreatePrescription() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (data: Parameters<typeof prescriptionService.create>[0]) => prescriptionService.create(data), onSuccess: (_, data) => qc.invalidateQueries({ queryKey: ['prescriptions', data.patientId] }) });
}

export function useUpdatePrescription() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (data: Parameters<typeof prescriptionService.update>[0]) => prescriptionService.update(data), onSuccess: (_, data) => qc.invalidateQueries({ queryKey: ['prescriptions', data.patientId] }) });
}

export function useDeletePrescription() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: ({ id, patientId }: { id: number; patientId: number }) => prescriptionService.delete(id, patientId), onSuccess: (_, data) => qc.invalidateQueries({ queryKey: ['prescriptions', data.patientId] }) });
}

export function useGetCallerUserProfile() { return useQuery<UserProfile | null>({ queryKey: ['userProfile'], queryFn: () => userService.getProfile() }); }
export function useGetCallerUserRole() { return useQuery<string>({ queryKey: ['userRole'], queryFn: () => userService.getRole() }); }
export function useSaveCallerUserProfile() { const qc = useQueryClient(); return useMutation({ mutationFn: (profile: UserProfile) => userService.updateProfile(profile).then(() => profile), onSuccess: () => qc.invalidateQueries({ queryKey: ['userProfile'] }) }); }

export function useGetEncountersByPatient(patientId: number | null) { return useQuery<Encounter[]>({ queryKey: ['encounters', patientId], queryFn: () => clinicalNotesService.getEncountersByPatient(patientId!), enabled: patientId !== null }); }
export function useGetObservationsByPatient(patientId: number | null) { return useQuery({ queryKey: ['observations', patientId], queryFn: () => clinicalNotesService.getObservationsByPatient(patientId!), enabled: patientId !== null }); }
export function useGetClinicalNotesByPatient(patientId: number | null) { return useQuery<ClinicalNote[]>({ queryKey: ['clinicalNotes', patientId], queryFn: () => clinicalNotesService.getNotesByPatient(patientId!), enabled: patientId !== null }); }
export function useGetOrdersByPatient(patientId: number | null) { return useQuery<ClinicalOrder[]>({ queryKey: ['orders', patientId], queryFn: () => clinicalNotesService.getOrdersByPatient(patientId!), enabled: patientId !== null }); }

export function useCreateEncounter() { const qc = useQueryClient(); return useMutation({ mutationFn: ({ patientId, encounterData }: { patientId: number; encounterData: Record<string, unknown> }) => clinicalNotesService.createEncounter(patientId, encounterData), onSuccess: (_, d) => qc.invalidateQueries({ queryKey: ['encounters', d.patientId] }) }); }
export function useCreateObservation() { const qc = useQueryClient(); return useMutation({ mutationFn: ({ patientId, observationData }: { patientId: number; observationData: Record<string, unknown> }) => clinicalNotesService.createObservation(patientId, observationData), onSuccess: (_, d) => qc.invalidateQueries({ queryKey: ['observations', d.patientId] }) }); }
export function useCreateClinicalNote() { const qc = useQueryClient(); return useMutation({ mutationFn: ({ patientId, noteData }: { patientId: number; noteData: Record<string, unknown> }) => clinicalNotesService.createNote(patientId, noteData), onSuccess: (_, d) => qc.invalidateQueries({ queryKey: ['clinicalNotes', d.patientId] }) }); }
export function useCreateOrder() { const qc = useQueryClient(); return useMutation({ mutationFn: ({ patientId, orderData }: { patientId: number; orderData: Record<string, unknown> }) => clinicalNotesService.createOrder(patientId, orderData), onSuccess: (_, d) => qc.invalidateQueries({ queryKey: ['orders', d.patientId] }) }); }

export function useGetAppointmentsByPatient(patientId: number | null) { return useQuery({ queryKey: ['appointments', patientId], queryFn: () => appointmentService.getByPatient(patientId!), enabled: patientId !== null }); }
export function useCreateAppointment() { const qc = useQueryClient(); return useMutation({ mutationFn: (data: Parameters<typeof appointmentService.create>[0]) => appointmentService.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: ['appointments'] }) }); }
export function useGetVitalsByPatient(patientId: number | null) { return useQuery({ queryKey: ['vitals', patientId], queryFn: () => vitalService.getByPatient(patientId!), enabled: patientId !== null }); }
export function useCreateVitals() { const qc = useQueryClient(); return useMutation({ mutationFn: (data: { patientId: number; vitalSigns: VitalSigns; recordedAt?: string }) => vitalService.create(data), onSuccess: (_, d) => qc.invalidateQueries({ queryKey: ['vitals', d.patientId] }) }); }

export function useGetAllBeds() { return useQuery({ queryKey: ['beds'], queryFn: () => admissionService.getAllBeds() }); }
export function useGetBedsByWard(ward: string | null) { return useQuery({ queryKey: ['beds', ward], queryFn: () => admissionService.getBedsByWard(ward!), enabled: !!ward }); }
export function useCreateBed() { const qc = useQueryClient(); return useMutation({ mutationFn: (data: Parameters<typeof admissionService.createBed>[0]) => admissionService.createBed(data), onSuccess: () => qc.invalidateQueries({ queryKey: ['beds'] }) }); }
export function useCreateBedRecord() { return useCreateBed(); }
export function useAssignBed() { const qc = useQueryClient(); return useMutation({ mutationFn: (data: { bedId: number; patientId: number }) => admissionService.assignBed(data.bedId, data.patientId), onSuccess: () => qc.invalidateQueries({ queryKey: ['beds'] }) }); }

export function useSyncStatus() { return useQuery({ queryKey: ['syncStatus'], queryFn: async () => ({ isOnline: navigator.onLine, pendingChanges: false, lastSyncAt: new Date() }) }); }
export function isNetworkOnline() { return navigator.onLine; }

/** Removed legacy browser-storage and canister compatibility helpers. */
export function createPatientInStorage(): never { throw new Error('Use patientService.create()'); }
export function setCanisterActor(): never { throw new Error('Canister integrations are not supported.'); }
export function getCanisterActor(): null { return null; }
export function getDoctorEmail(email?: string) { return email ?? ''; }
export function storageKey(): never { throw new Error('Business data must use a domain API service.'); }
export function loadFromStorage(): never { throw new Error('Business data must use a domain API service.'); }
export function loadFromAllDoctorKeys(): never { throw new Error('Business data must use a domain API service.'); }
export function saveToStorage(): never { throw new Error('Business data must use a domain API service.'); }
export function getVisitFormData(): never { throw new Error('Visit data must use visitService.'); }
export function generateRegisterNumber(): never { throw new Error('Register numbers are generated by PHP/MySQL.'); }
export function getPrescriptionHeaderImage(): never { throw new Error('Prescription headers must use the PHP API.'); }
export function setPrescriptionHeaderImage(): never { throw new Error('Prescription headers must use the PHP API.'); }
export function loadPrescriptionRecords(): never { throw new Error('Prescription records must use prescriptionService.'); }
export function savePrescriptionRecords(): never { throw new Error('Prescription records must use prescriptionService.'); }
export function autoPopulateDrugReminders(): never { throw new Error('Drug reminders must use the PHP API.'); }
