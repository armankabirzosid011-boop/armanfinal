/**
 * Patient Service
 *
 * CRUD operations for patient records.
 * All data is persisted in MySQL via the PHP API.
 * 
 * Data flow:
 *   Frontend (camelCase) → Service (maps to camelCase) → PHP API (reads camelCase)
 *   PHP API (returns snake_case) → Service (maps to camelCase) → Frontend DTO
 */

import { get, post, del } from '../lib/apiClient';
import type { Patient } from '../types';
import { mapListFromApi, mapFromApi, mapToApi, type Mapping, toNumber, parseJsonArray } from '../lib/mappers';

// ── Patient API mapping: camelCase DTO ↔ snake_case API ──────────────────

const patientMapping: Mapping<Patient> = {
  id: 'id',
  fullName: 'full_name',
  nameBn: 'name_bn',
  dateOfBirth: 'date_of_birth',
  gender: 'gender',
  phone: 'phone',
  email: 'email',
  address: 'address',
  bloodGroup: 'blood_group',
  weight: 'weight',
  height: 'height',
  allergies: 'allergies',
  chronicConditions: 'chronic_conditions',
  pastSurgicalHistory: 'past_surgical_history',
  patientType: 'patient_type',
  createdAt: 'created_at',
  registerNumber: 'register_number',
  photo: 'photo_url',
  department: 'department',
  bedNumber: 'bed_number',
  ward: 'ward',
  hospitalName: 'hospital_name',
  admittedOn: 'admitted_on',
  admissionDate: 'admission_date',
  dischargeDate: 'discharge_date',
  isAdmitted: 'is_admitted',
  status: 'status',
  signUpEnabled: 'sign_up_enabled',
  edd: 'edd',
  lmpDate: 'lmp_date',
  consultantAssignment: 'consultant_assignment',
  registrationComplete: 'registration_complete',
};

const patientTransforms = {
  id: (v: any) => toNumber(v),
  weight: (v: any) => toNumber(v),
  height: (v: any) => toNumber(v),
  allergies: (v: any) => parseJsonArray(v),
  chronicConditions: (v: any) => parseJsonArray(v),
  isAdmitted: (v: any) => v === 1 || v === true || v === '1',
  registrationComplete: (v: any) => v === 1 || v === true || v === '1',
  signUpEnabled: (v: any) => v === 1 || v === true || v === '1',
};

// ── Request DTOs (camelCase) ─────────────────────────────────────────────

export interface CreatePatientData {
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
}

export interface UpdatePatientData extends Partial<CreatePatientData> {
  id: number;
}

export const patientService = {
  /** Get all patients (with optional limit) */
  async getAll(limit = 100, page = 1): Promise<{ items: Patient[]; total: number }> {
    const result = await get<{ items: Record<string, any>[]; pagination: { total: number } }>(
      '/patients/list.php',
      { limit: String(limit), page: String(page) }
    );
    return {
      items: mapListFromApi<Patient>(result.items, patientMapping, patientTransforms),
      total: result.pagination?.total ,
    };
  },

  /** Search patients by query */
  async search(query: string): Promise<Patient[]> {
    const result = await get<{ items: Record<string, any>[] }>('/patients/list.php', {
      search: query,
      limit: '50',
    });
    return mapListFromApi<Patient>(result.items, patientMapping, patientTransforms);
  },

  /** Get a single patient by ID */
  async getById(id: number): Promise<Patient | null> {
    try {
      const result = await get<Record<string, any>>('/patients/get.php', { id: String(id) });
      return mapFromApi<Patient>(result, patientMapping, patientTransforms);
    } catch {
      return null;
    }
  },

  /** Create a new patient */
  async create(data: CreatePatientData): Promise<Patient> {
    // PHP API reads camelCase (e.g., $input['fullName'])
    const payload: Record<string, any> = {
      fullName: data.fullName,
      nameBn: data.nameBn || null,
      dateOfBirth: data.dateOfBirth || null,
      gender: data.gender ?? 'male',
      phone: data.phone || null,
      email: data.email || null,
      address: data.address || null,
      bloodGroup: data.bloodGroup || null,
      weight: data.weight ?? null,
      height: data.height ?? null,
      allergies: data.allergies ?? [],
      chronicConditions: data.chronicConditions ?? [],
      pastSurgicalHistory: data.pastSurgicalHistory || null,
      patientType: data.patientType ?? 'outdoor',
      photo: data.photo || null,
    };
    const result = await post<Record<string, any>>('/patients/create.php', payload);
    return mapFromApi<Patient>(result, patientMapping, patientTransforms)!;
  },

  /** Update an existing patient */
  async update(data: UpdatePatientData): Promise<Patient> {
    // PHP API reads camelCase (e.g., $input['fullName'])
    const payload: Record<string, any> = { id: data.id };
    if (data.fullName !== undefined) payload.fullName = data.fullName;
    if (data.nameBn !== undefined) payload.nameBn = data.nameBn;
    if (data.dateOfBirth !== undefined) payload.dateOfBirth = data.dateOfBirth;
    if (data.gender !== undefined) payload.gender = data.gender;
    if (data.phone !== undefined) payload.phone = data.phone;
    if (data.email !== undefined) payload.email = data.email;
    if (data.address !== undefined) payload.address = data.address;
    if (data.bloodGroup !== undefined) payload.bloodGroup = data.bloodGroup;
    if (data.weight !== undefined) payload.weight = data.weight;
    if (data.height !== undefined) payload.height = data.height;
    if (data.allergies !== undefined) payload.allergies = data.allergies;
    if (data.chronicConditions !== undefined) payload.chronicConditions = data.chronicConditions;
    if (data.pastSurgicalHistory !== undefined) payload.pastSurgicalHistory = data.pastSurgicalHistory;
    if (data.patientType !== undefined) payload.patientType = data.patientType;
    if (data.photo !== undefined) payload.photo = data.photo;
    const result = await post<Record<string, any>>('/patients/update.php', payload);
    return mapFromApi<Patient>(result, patientMapping, patientTransforms)!;
  },

  /** Delete a patient */
  async delete(id: number): Promise<void> {
    await del('/patients/delete.php', { id });
  },
};
