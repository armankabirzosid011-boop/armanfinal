/**
 * Appointment Service
 *
 * CRUD operations for patient appointments.
 * All data is persisted in MySQL via the PHP API.
 * CamelCase frontend ↔ snake_case PHP API.
 */

import { get, post, del } from '../lib/apiClient';
import type { Appointment } from '../types';
import { mapListFromApi, mapFromApi, mapToApi, type Mapping, toNumber, toBoolean } from '../lib/mappers';

// ── Appointment API mapping ───────────────────────────────────────────────

const appointmentMapping: Mapping<Appointment> = {
  id: 'id',
  patientId: 'patient_id',
  patientName: 'patient_name',
  patientPhone: 'patient_phone',
  doctorId: 'doctor_id',
  doctorName: 'doctor_name',
  appointmentDate: 'appointment_date',
  appointmentTime: 'appointment_time',
  serialNumber: 'serial_number',
  type: 'type',
  status: 'status',
  chiefComplaint: 'chief_complaint',
  notes: 'notes',
  isPublicRequest: 'is_public_request',
  createdBy: 'created_by',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
};

const appointmentTransforms = {
  id: (v: any) => toNumber(v),
  patientId: (v: any) => toNumber(v),
  doctorId: (v: any) => toNumber(v),
  serialNumber: (v: any) => toNumber(v),
  createdBy: (v: any) => toNumber(v),
  isPublicRequest: (v: any) => toBoolean(v),
};

// ── Request DTOs ─────────────────────────────────────────────────────────

export interface CreateAppointmentData {
  patientId?: number;
  patientName?: string;
  patientPhone?: string;
  doctorId?: number;
  appointmentDate: string;
  appointmentTime?: string;
  type?: string;
  status?: string;
  chiefComplaint?: string;
  notes?: string;
}

export interface UpdateAppointmentData extends Partial<CreateAppointmentData> {
  id: number;
}

export const appointmentService = {
  /** Get all appointments */
  async getAll(params?: { limit?: number; date?: string; status?: string }): Promise<Appointment[]> {
    const result = await get<{ items: Record<string, any>[] }>('/appointments/list.php', params as any);
    return mapListFromApi<Appointment>(result.items, appointmentMapping, appointmentTransforms);
  },

  /** Get appointments for a specific patient */
  async getByPatient(patientId: number): Promise<Appointment[]> {
    const result = await get<{ items: Record<string, any>[] }>('/appointments/list.php', { patient_id: String(patientId) });
    return mapListFromApi<Appointment>(result.items, appointmentMapping, appointmentTransforms);
  },

  /** Get a single appointment by ID */
  async getById(id: number): Promise<Appointment | null> {
    try {
      const result = await get<Record<string, any>>('/appointments/get.php', { id: String(id) });
      return mapFromApi<Appointment>(result, appointmentMapping, appointmentTransforms);
    } catch {
      return null;
    }
  },

  /** Create a new appointment — PHP reads snake_case */
  async create(data: CreateAppointmentData): Promise<Appointment> {
    const payload: Record<string, any> = {
      patient_id: data.patientId ?? null,
      patient_name: data.patientName ?? null,
      patient_phone: data.patientPhone ?? null,
      doctor_id: data.doctorId ?? null,
      appointment_date: data.appointmentDate,
      appointment_time: data.appointmentTime ?? null,
      type: data.type ?? 'regular',
      status: data.status ?? 'scheduled',
      chief_complaint: data.chiefComplaint ?? null,
      notes: data.notes ?? null,
    };
    const result = await post<Record<string, any>>('/appointments/create.php', payload);
    // create.php returns { id, serial_number } — map via getById
    const apptId = result?.id;
    if (apptId) return (await this.getById(apptId))!;
    return result as unknown as Appointment;
  },

  /** Update an existing appointment — PHP reads snake_case */
  async update(data: UpdateAppointmentData): Promise<void> {
    const payload: Record<string, any> = { id: data.id };
    if (data.patientId !== undefined) payload.patient_id = data.patientId;
    if (data.patientName !== undefined) payload.patient_name = data.patientName;
    if (data.patientPhone !== undefined) payload.patient_phone = data.patientPhone;
    if (data.doctorId !== undefined) payload.doctor_id = data.doctorId;
    if (data.appointmentDate !== undefined) payload.appointment_date = data.appointmentDate;
    if (data.appointmentTime !== undefined) payload.appointment_time = data.appointmentTime;
    if (data.type !== undefined) payload.type = data.type;
    if (data.status !== undefined) payload.status = data.status;
    if (data.chiefComplaint !== undefined) payload.chief_complaint = data.chiefComplaint;
    if (data.notes !== undefined) payload.notes = data.notes;
    await post('/appointments/update.php', payload);
  },

  /** Delete an appointment */
  async delete(id: number): Promise<void> {
    await del('/appointments/delete.php', { id });
  },

  /** Search appointments */
  async search(query: string): Promise<Appointment[]> {
    const result = await get<{ items: Record<string, any>[] }>('/appointments/list.php', { search: query });
    return mapListFromApi<Appointment>(result.items, appointmentMapping, appointmentTransforms);
  },
};
