/**
 * Visit Service
 *
 * CRUD operations for patient visits/encounters.
 * All data is persisted in MySQL via the PHP API.
 * CamelCase frontend ↔ snake_case PHP API (with mapper).
 */

import { get, post, del } from '../lib/apiClient';
import type { Visit } from '../types';
import { mapListFromApi, mapFromApi, type Mapping, toNumber } from '../lib/mappers';

// ── Visit API mapping ────────────────────────────────────────────────────

const visitMapping: Mapping<Visit> = {
  id: 'id',
  patientId: 'patient_id',
  visitDate: 'visit_date',
  chiefComplaint: 'chief_complaint',
  historyOfPresentIllness: 'history_of_present_illness',
  vitalSigns: 'vital_signs',
  physicalExamination: 'physical_examination',
  diagnosis: 'diagnosis',
  notes: 'notes',
  visitType: 'visit_type',
  createdAt: 'created_at',
};

const visitTransforms = {
  id: (v: any) => toNumber(v) ?? 0,
  patientId: (v: any) => toNumber(v) ?? 0,
  vitalSigns: (v: any) => (v && typeof v === 'object' ? v : null),
};

// ── Request DTOs ─────────────────────────────────────────────────────────

export interface CreateVisitData {
  patientId: number;
  visitDate?: string;
  chiefComplaint?: string;
  historyOfPresentIllness?: string | null;
  vitalSigns?: Record<string, any> | null;
  physicalExamination?: string | null;
  diagnosis?: string | null;
  notes?: string | null;
  visitType?: string;
}

export interface UpdateVisitData extends Partial<CreateVisitData> {
  id: number;
  patientId: number;
}

export const visitService = {
  /** Get all visits for a patient */
  async getByPatient(patientId: number): Promise<Visit[]> {
    const result = await get<{ items: Record<string, any>[] }>('/visits/list.php', { patient_id: String(patientId) });
    return mapListFromApi<Visit>(result.items, visitMapping, visitTransforms);
  },

  /** Get a single visit by ID */
  async getById(id: number): Promise<Visit | null> {
    try {
      const result = await get<Record<string, any>>('/visits/get.php', { id: String(id) });
      return mapFromApi<Visit>(result, visitMapping, visitTransforms);
    } catch {
      return null;
    }
  },

  /** Create a new visit — PHP reads camelCase */
  async create(data: CreateVisitData): Promise<Visit> {
    const payload: Record<string, any> = {
      patientId: data.patientId,
      visitDate: data.visitDate || new Date().toISOString().split('T')[0],
      chiefComplaint: data.chiefComplaint || null,
      historyOfPresentIllness: data.historyOfPresentIllness || null,
      vitalSigns: data.vitalSigns || null,
      physicalExamination: data.physicalExamination || null,
      diagnosis: data.diagnosis || null,
      notes: data.notes || null,
      visitType: data.visitType ?? 'outpatient',
    };
    const result = await post<Record<string, any>>('/visits/create.php', payload);
    return mapFromApi<Visit>(result, visitMapping, visitTransforms)!;
  },

  /** Update an existing visit — PHP reads camelCase */
  async update(data: UpdateVisitData): Promise<Visit> {
    const payload: Record<string, any> = {
      id: data.id,
      patientId: data.patientId,
    };
    if (data.visitDate !== undefined) payload.visitDate = data.visitDate;
    if (data.chiefComplaint !== undefined) payload.chiefComplaint = data.chiefComplaint;
    if (data.historyOfPresentIllness !== undefined) payload.historyOfPresentIllness = data.historyOfPresentIllness;
    if (data.vitalSigns !== undefined) payload.vitalSigns = data.vitalSigns;
    if (data.physicalExamination !== undefined) payload.physicalExamination = data.physicalExamination;
    if (data.diagnosis !== undefined) payload.diagnosis = data.diagnosis;
    if (data.notes !== undefined) payload.notes = data.notes;
    if (data.visitType !== undefined) payload.visitType = data.visitType;
    const result = await post<Record<string, any>>('/visits/update.php', payload);
    return mapFromApi<Visit>(result, visitMapping, visitTransforms)!;
  },

  /** Delete a visit */
  async delete(id: number, _patientId: number): Promise<void> {
    await del('/visits/delete.php', { id });
  },

  /** Search visits */
  async search(query: string): Promise<Visit[]> {
    const result = await get<{ items: Record<string, any>[] }>('/visits/list.php', { search: query });
    return mapListFromApi<Visit>(result.items, visitMapping, visitTransforms);
  },
};
