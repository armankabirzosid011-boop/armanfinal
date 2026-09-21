/**
 * Notification Service
 *
 * CRUD operations for notifications and alerts.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post, del } from '../lib/apiClient';

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  created_at: string;
  user_id?: number;
  link?: string;
}

export const notificationService = {
  /** Get all notifications for the current user */
  async getAll(): Promise<Notification[]> {
    const result = await get<{ items: Notification[] }>('/notifications/list.php');
    return result.items ?? [];
  },

  /** Get unread notification count */
  async getUnreadCount(): Promise<number> {
    try {
      const result = await get<{ count: number }>('/notifications/unread-count.php');
      return result?.count ?? 0;
    } catch {
      return 0;
    }
  },

  /** Mark a notification as read */
  async markAsRead(id: number): Promise<void> {
    await post('/notifications/mark-read.php', { id });
  },

  /** Mark all notifications as read */
  async markAllAsRead(): Promise<void> {
    await post('/notifications/mark-all-read.php');
  },

  /** Create a notification (admin/staff only) */
  async create(data: Partial<Notification>): Promise<Notification> {
    return post<Notification>('/notifications/create.php', data);
  },

  /** Delete a notification */
  async delete(id: number): Promise<void> {
    await del('/notifications/delete.php', { id });
  },
};
