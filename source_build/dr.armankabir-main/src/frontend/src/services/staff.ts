/**
 * Staff Service
 *
 * CRUD operations for staff/user management.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post, del } from '../lib/apiClient';
import type { UserProfile, StaffRole } from '../types';

export interface CreateStaffData {
  email: string;
  fullName: string;
  role: StaffRole;
  specialization?: string;
  phone?: string;
  password?: string;
}

export interface UpdateStaffData extends Partial<CreateStaffData> {
  id: number;
}

export const staffService = {
  /** Get all staff members */
  async getAll(params?: { role?: string; limit?: number }): Promise<UserProfile[]> {
    const result = await get<{ items: UserProfile[] }>('/staff/list.php', params as any);
    return result.items ?? [];
  },

  /** Get a single staff member by ID */
  async getById(id: number): Promise<UserProfile | null> {
    try {
      return await get<UserProfile>('/staff/get.php', { id: String(id) });
    } catch {
      return null;
    }
  },

  /** Create a new staff member */
  async create(data: CreateStaffData): Promise<UserProfile> {
    return post<UserProfile>('/staff/create.php', {
      email: data.email,
      full_name: data.fullName,
      role: data.role,
      specialization: data.specialization ?? '',
      phone: data.phone ?? '',
      password: data.password,
    });
  },

  /** Update an existing staff member */
  async update(data: UpdateStaffData): Promise<UserProfile> {
    return post<UserProfile>('/staff/update.php', {
      id: data.id,
      email: data.email,
      full_name: data.fullName,
      role: data.role,
      specialization: data.specialization,
      phone: data.phone,
    });
  },

  /** Delete a staff member */
  async delete(id: number): Promise<void> {
    await del('/staff/delete.php', { id });
  },

  /** Search staff members */
  async search(query: string): Promise<UserProfile[]> {
    const result = await get<{ items: UserProfile[] }>('/staff/list.php', { search: query });
    return result.items ?? [];
  },
};
