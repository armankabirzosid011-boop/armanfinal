/**
 * Clinical Notes Service
 *
 * CRUD operations for clinical notes, encounters, observations, and orders.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post, del } from '../lib/apiClient';
import type { ClinicalNote, Encounter, Observation, ClinicalOrder } from '../types';

export const clinicalNotesService = {
  // ── Encounters ───────────────────────────────────────────────────────────────

  /** Get all encounters for a patient */
  async getEncountersByPatient(patientId: number): Promise<Encounter[]> {
    return get<Encounter[]>('/clinical/encounters-list.php', { patient_id: patientId });
  },

  /** Create a new encounter */
  async createEncounter(patientId: number, encounterData: Record<string, unknown>): Promise<Encounter> {
    return post<Encounter>('/clinical/encounters-create.php', {
      patient_id: patientId,
      ...encounterData,
    });
  },

  // ── Observations ─────────────────────────────────────────────────────────────

  /** Get all observations for a patient */
  async getObservationsByPatient(patientId: number): Promise<Observation[]> {
    return get<Observation[]>('/clinical/observations-list.php', { patient_id: patientId });
  },

  /** Create a new observation */
  async createObservation(patientId: number, observationData: Record<string, unknown>): Promise<Observation> {
    return post<Observation>('/clinical/observations-create.php', {
      patient_id: patientId,
      ...observationData,
    });
  },

  // ── Clinical Notes ───────────────────────────────────────────────────────────

  /** Get all clinical notes for a patient */
  async getNotesByPatient(patientId: number): Promise<ClinicalNote[]> {
    return get<ClinicalNote[]>('/clinical/notes-list.php', { patient_id: patientId });
  },

  /** Create a new clinical note */
  async createNote(patientId: number, noteData: Record<string, unknown>): Promise<ClinicalNote> {
    return post<ClinicalNote>('/clinical/notes-create.php', {
      patient_id: patientId,
      ...noteData,
    });
  },

  /** Delete a clinical note */
  async deleteNote(id: number): Promise<void> {
    await del('/clinical/notes-delete.php', { id });
  },

  // ── Orders ───────────────────────────────────────────────────────────────────

  /** Get all clinical orders for a patient */
  async getOrdersByPatient(patientId: number): Promise<ClinicalOrder[]> {
    return get<ClinicalOrder[]>('/clinical/orders-list.php', { patient_id: patientId });
  },

  /** Create a new clinical order */
  async createOrder(patientId: number, orderData: Record<string, unknown>): Promise<ClinicalOrder> {
    return post<ClinicalOrder>('/clinical/orders-create.php', {
      patient_id: patientId,
      ...orderData,
    });
  },

  /** Delete an order */
  async deleteOrder(id: number): Promise<void> {
    await del('/clinical/orders-delete.php', { id });
  },
};
