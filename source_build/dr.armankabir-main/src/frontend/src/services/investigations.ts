/**
 * Investigation Service
 *
 * CRUD operations for investigations and lab tests.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post, del } from '../lib/apiClient';

export interface InvestigationData {
  id?: number;
  patientId: number;
  testName: string;
  testCategory?: string;
  orderedBy?: string;
  orderedDate?: string;
  result?: string;
  resultDate?: string;
  status?: string;
  notes?: string;
  fileUrl?: string;
}

export const investigationService = {
  /** Get all investigations for a patient */
  async getByPatient(patientId: number): Promise<any[]> {
    const result = await get<{ items: any[] }>('/investigations/list.php', { patient_id: patientId });
    return result.items ?? [];
  },

  /** Get a single investigation by ID */
  async getById(id: number): Promise<any | null> {
    try {
      return await get<any>('/investigations/get.php', { id: String(id) });
    } catch {
      return null;
    }
  },

  /** Create a new investigation order */
  async create(data: InvestigationData): Promise<any> {
    return post<any>('/investigations/create.php', {
      patient_id: data.patientId,
      test_name: data.testName,
      test_category: data.testCategory,
      ordered_by: data.orderedBy,
      ordered_date: data.orderedDate,
      notes: data.notes,
    });
  },

  /** Update investigation results */
  async updateResult(id: number, result: string, resultDate?: string): Promise<any> {
    return post<any>('/investigations/update-result.php', {
      id,
      result,
      result_date: resultDate,
    });
  },

  /** Update investigation status */
  async updateStatus(id: number, status: string): Promise<void> {
    await post('/investigations/update-status.php', { id, status });
  },

  /** Delete an investigation */
  async delete(id: number): Promise<void> {
    await del('/investigations/delete.php', { id });
  },

  /** Search investigations */
  async search(query: string): Promise<any[]> {
    const result = await get<{ items: any[] }>('/investigations/list.php', { search: query });
    return result.items ?? [];
  },
};
