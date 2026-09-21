/**
 * Settings Service
 *
 * Operations for application settings and configuration.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post } from '../lib/apiClient';

export interface SiteSetting {
  id?: number;
  key: string;
  value: string;
  updated_at?: string;
}

export const settingsService = {
  /** Get all settings */
  async getAll(): Promise<SiteSetting[]> {
    try {
      const result = await get<{ items: SiteSetting[] }>('/settings/list.php');
      return result.items ?? [];
    } catch {
      return [];
    }
  },

  /** Get a specific setting by key */
  async getByKey(key: string): Promise<string | null> {
    try {
      const result = await get<{ value: string }>('/settings/get.php', { key });
      return result?.value ?? null;
    } catch {
      return null;
    }
  },

  /** Update a setting */
  async set(key: string, value: string): Promise<void> {
    await post('/settings/save.php', { key, value });
  },

  /** Update multiple settings at once */
  async updateMany(settings: Record<string, string>): Promise<void> {
    await post('/settings/save-multiple.php', { settings });
  },
};
