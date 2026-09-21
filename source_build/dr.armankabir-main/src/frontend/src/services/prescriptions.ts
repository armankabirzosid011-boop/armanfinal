/**
 * Prescription Service
 *
 * CRUD operations for prescriptions.
 * All data is persisted in MySQL via the PHP API.
 * CamelCase frontend ↔ camelCase PHP API (with mapper for responses).
 */

import { get, post, del } from '../lib/apiClient';
import type { Prescription } from '../types';
import { mapListFromApi, mapFromApi, type Mapping, toNumber } from '../lib/mappers';

// ── Prescription API mapping ─────────────────────────────────────────────

const prescriptionMapping: Mapping<Prescription> = {
  id: 'id',
  patientId: 'patient_id',
  visitId: 'visit_id',
  prescriptionDate: 'prescription_date',
  diagnosis: 'diagnosis',
  medications: 'medications',
  notes: 'notes',
  createdAt: 'created_at',
};

const prescriptionTransforms = {
  id: (v: any) => toNumber(v),
  patientId: (v: any) => toNumber(v),
  visitId: (v: any) => toNumber(v),
  medications: (v: any) => (Array.isArray(v) ? v : []),
};

// ── Request DTOs ─────────────────────────────────────────────────────────

export interface CreatePrescriptionData {
  patientId: number;
  visitId?: number | null;
  prescriptionDate?: string;
  diagnosis?: string | null;
  medications: import('../types').Medication[];
  notes?: string | null;
}

export interface UpdatePrescriptionData extends Partial<CreatePrescriptionData> {
  id: number;
  patientId: number;
}

export const prescriptionService = {
  /** Get all prescriptions for a patient */
  async getByPatient(patientId: number): Promise<Prescription[]> {
    const result = await get<Record<string, any>[] | { items: Record<string, any>[] }>(
      '/prescriptions/list.php',
      { patient_id: String(patientId) }
    );
    // API may return array directly or wrapped in { items }
    const items = Array.isArray(result) ? result : (result as any).items ?? [];
    return mapListFromApi<Prescription>(items, prescriptionMapping, prescriptionTransforms);
  },

  /** Get a single prescription by ID */
  async getById(id: number): Promise<Prescription | null> {
    try {
      const result = await get<Record<string, any>>('/prescriptions/get.php', { id: String(id) });
      return mapFromApi<Prescription>(result, prescriptionMapping, prescriptionTransforms);
    } catch {
      return null;
    }
  },

  /** Create a new prescription */
  async create(data: CreatePrescriptionData): Promise<Prescription> {
    // PHP reads camelCase
    const result = await post<Record<string, any>>('/prescriptions/create.php', {
      patientId: data.patientId,
      visitId: data.visitId ?? null,
      prescriptionDate: data.prescriptionDate,
      diagnosis: data.diagnosis ?? null,
      medications: data.medications,
      notes: data.notes ?? null,
    });
    // create.php returns { id, message } — fetch full record
    const rxId = result?.id;
    if (rxId) return (await this.getById(rxId))!;
    return result as unknown as Prescription;
  },

  /** Update an existing prescription — PHP reads camelCase */
  async update(data: UpdatePrescriptionData): Promise<void> {
    await post('/prescriptions/update.php', {
      id: data.id,
      patientId: data.patientId,
      visitId: data.visitId,
      prescriptionDate: data.prescriptionDate,
      diagnosis: data.diagnosis,
      medications: data.medications,
      notes: data.notes,
    });
  },

  /** Delete a prescription */
  async delete(id: number, _patientId: number): Promise<void> {
    await del('/prescriptions/delete.php', { id });
  },

  /** Search prescriptions */
  async search(query: string): Promise<Prescription[]> {
    const result = await get<Record<string, any>[]>('/prescriptions/list.php', { search: query });
    const items = Array.isArray(result) ? result : [];
    return mapListFromApi<Prescription>(items, prescriptionMapping, prescriptionTransforms);
  },
};
