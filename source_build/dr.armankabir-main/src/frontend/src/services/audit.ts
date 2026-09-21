/**
 * Audit Service
 *
 * Operations for the audit log.
 * All data is persisted in MySQL via the PHP API.
 */

import { get } from '../lib/apiClient';

export interface AuditLogEntry {
  id: number;
  timestamp: string;
  userRole: string;
  userName: string;
  action: string;
  target: string;
  details?: string;
}

export const auditService = {
  /** Get all audit log entries */
  async getAll(params?: { limit?: number; offset?: number; userId?: number }): Promise<AuditLogEntry[]> {
    const result = await get<{ items: AuditLogEntry[] }>('/audit/list.php', params as any);
    return result.items ?? [];
  },

  /** Get audit entries for a specific user */
  async getByUser(userId: number): Promise<AuditLogEntry[]> {
    const result = await get<{ items: AuditLogEntry[] }>('/audit/list.php', { user_id: userId });
    return result.items ?? [];
  },

  /** Get audit entries for a specific action type */
  async getByAction(action: string): Promise<AuditLogEntry[]> {
    const result = await get<{ items: AuditLogEntry[] }>('/audit/list.php', { action });
    return result.items ?? [];
  },

  /** Search audit log */
  async search(query: string): Promise<AuditLogEntry[]> {
    const result = await get<{ items: AuditLogEntry[] }>('/audit/list.php', { search: query });
    return result.items ?? [];
  },
};
