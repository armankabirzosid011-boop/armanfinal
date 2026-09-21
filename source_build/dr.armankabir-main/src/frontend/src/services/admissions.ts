/**
 * Admission Service
 *
 * CRUD operations for patient admissions, beds, and discharge.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post } from '../lib/apiClient';
import type { AdmissionHistory, BedRecord } from '../types';

export const admissionService = {
  // ── Admissions ───────────────────────────────────────────────────────────────

  /** Get admission history for a patient */
  async getByPatient(patientId: number): Promise<AdmissionHistory[]> {
    return get<AdmissionHistory[]>('/admissions/list.php', { patient_id: patientId });
  },

  /** Create a new admission */
  async admit(data: {
    patientId: number;
    ward?: string;
    bedId?: number;
    admittedBy?: string;
    diagnosis?: string;
    notes?: string;
  }): Promise<any> {
    return post<any>('/admissions/create.php', {
      patient_id: data.patientId,
      ward: data.ward,
      bed_id: data.bedId,
      admitted_by: data.admittedBy,
      diagnosis: data.diagnosis,
      notes: data.notes,
    });
  },

  /** Discharge a patient */
  async discharge(admissionId: number, data: {
    dischargeDate?: string;
    dischargeSummary?: string;
    dischargedBy?: string;
  }): Promise<void> {
    await post('/admissions/discharge.php', {
      admission_id: admissionId,
      discharge_date: data.dischargeDate,
      discharge_summary: data.dischargeSummary,
      discharged_by: data.dischargedBy,
    });
  },

  // ── Beds ─────────────────────────────────────────────────────────────────────

  /** Get all beds */
  async getAllBeds(): Promise<BedRecord[]> {
    return get<BedRecord[]>('/beds/list.php');
  },

  /** Get all beds in a ward */
  async getBedsByWard(ward: string): Promise<BedRecord[]> {
    return get<BedRecord[]>('/beds/list.php', { ward });
  },

  /** Create a new bed */
  async createBed(data: { ward: string; bedNumber: string; bedType?: string }): Promise<BedRecord> {
    return post<BedRecord>('/beds/create.php', data);
  },

  /** Assign a patient to a bed */
  async assignBed(bedId: number, patientId: number): Promise<void> {
    await post('/beds/assign.php', { bed_id: bedId, patient_id: patientId });
  },

  /** Release a bed */
  async releaseBed(bedId: number): Promise<void> {
    await post('/beds/release.php', { bed_id: bedId });
  },
};
