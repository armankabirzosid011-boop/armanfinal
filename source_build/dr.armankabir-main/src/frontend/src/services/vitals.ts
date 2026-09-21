/**
 * Vital Signs Service
 *
 * CRUD operations for patient vital signs.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post } from '../lib/apiClient';
import type { VitalSigns } from '../types';

export const vitalService = {
  /** Get all vitals for a patient */
  async getByPatient(patientId: number): Promise<any[]> {
    const result = await get<{ items: any[] }>('/vitals/list.php', { patient_id: patientId });
    return result.items ?? [];
  },

  /** Create a new vital signs record */
  async create(data: {
    patientId: number;
    vitalSigns: VitalSigns;
    recordedAt?: string;
  }): Promise<any> {
    return post<any>('/vitals/create.php', {
      patient_id: data.patientId,
      ...data.vitalSigns,
      recorded_at: data.recordedAt,
    });
  },

  /** Get the latest vitals for a patient */
  async getLatest(patientId: number): Promise<any | null> {
    try {
      return await get<any>('/vitals/latest.php', { patient_id: patientId });
    } catch {
      return null;
    }
  },
};
