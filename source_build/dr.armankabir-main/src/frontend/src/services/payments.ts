/**
 * Payment Service
 *
 * CRUD operations for payments, invoices, and billing.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post, del } from '../lib/apiClient';

export interface PaymentData {
  id?: number;
  patientId: number;
  amount: number;
  paymentType: string;
  paymentDate?: string;
  description?: string;
  status?: string;
  reference?: string;
}

export const paymentService = {
  /** Get all payments for a patient */
  async getByPatient(patientId: number): Promise<any[]> {
    const result = await get<{ items: any[] }>('/payments/list.php', { patient_id: patientId });
    return result.items ?? [];
  },

  /** Get a single payment by ID */
  async getById(id: number): Promise<any | null> {
    try {
      return await get<any>('/payments/get.php', { id: String(id) });
    } catch {
      return null;
    }
  },

  /** Create a new payment */
  async create(data: PaymentData): Promise<any> {
    return post<any>('/payments/create.php', {
      patient_id: data.patientId,
      amount: data.amount,
      payment_type: data.paymentType,
      payment_date: data.paymentDate,
      description: data.description,
      status: data.status ?? 'completed',
      reference: data.reference,
    });
  },

  /** Void/delete a payment */
  async delete(id: number): Promise<void> {
    await del('/payments/delete.php', { id });
  },

  /** Get total income for a date range */
  async getTotalIncome(startDate?: string, endDate?: string): Promise<number> {
    const result = await get<{ total: number }>('/payments/total-income.php', {
      start_date: startDate,
      end_date: endDate,
    });
    return result?.total ?? 0;
  },

  /** Get outstanding balances */
  async getOutstandingBalances(): Promise<any[]> {
    const result = await get<{ items: any[] }>('/payments/outstanding.php');
    return result.items ?? [];
  },

  /** Get invoices */
  async getInvoices(patientId?: number): Promise<any[]> {
    const result = await get<{ items: any[] }>('/invoices/list.php', patientId ? { patient_id: patientId } : undefined);
    return result.items ?? [];
  },
};
