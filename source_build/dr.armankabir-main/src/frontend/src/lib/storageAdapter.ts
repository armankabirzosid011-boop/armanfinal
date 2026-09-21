/**
 * Storage Adapter — thin wrapper around PHP API via apiClient
 *
 * All data is now persisted server-side via the PHP/MySQL API.
 * This file provides the same exports that components expect,
 * but delegates reads/writes to the PHP backend using session-based auth.
 *
 * Usage:
 *   import { storage } from '../lib/storageAdapter';
 *   const lang = await storage.getItem('patient_language');
 *   await storage.setItem('sidebar_collapsed', 'true');
 *
 * Authentication: PHP session cookies (credentials: 'same-origin')
 * are auto-sent by the browser with the apiClient.
 */

import { get, post } from './apiClient';

// ─── Core storage wrapper ─────────────────────────────────────────────────────

export const storage = {
  // Get item from server-side storage
  async getItem(key: string): Promise<string | null> {
    try {
      const result: any = await get(`/storage/get.php?key=${encodeURIComponent(key)}`);
      return result.success ? (result.data ?? null) : null;
    } catch {
      return null;
    }
  },

  // Set item on server-side storage
  async setItem(key: string, value: string): Promise<void> {
    try {
      await post('/storage/set.php', {
        key,
        value,
      });
    } catch (err) {
      console.warn(`[StorageAdapter] Failed to set key "${key}":`, err);
    }
  },

  // Remove item from server-side storage
  async removeItem(key: string): Promise<void> {
    try {
      await post('/storage/remove.php', {
        key,
      });
    } catch (err) {
      console.warn(`[StorageAdapter] Failed to remove key "${key}":`, err);
    }
  },

  // Clear all data for the current user
  async clear(): Promise<void> {
    try {
      await post('/storage/clear.php', {});
    } catch (err) {
      console.warn('[StorageAdapter] Failed to clear storage:', err);
    }
  },

  // Get the number of stored items for the current user
  async get length(): Promise<number> {
    try {
      const result: any = await get('/storage/length.php');
      return result.success ? (result.data ?? 0) : 0;
    } catch {
      return 0;
    }
  },

  // Get key by index from server-side storage
  async key(index: number): Promise<string | null> {
    try {
      const result: any = await get('/storage/key.php?index=' + index);
      return result.success ? (result.data ?? null) : null;
    } catch {
      return null;
    }
  },
};

// ─── Convenience functions for common patterns ───────────────────────────────

/**
 * Get a JSON-parsed item from server storage
 */
export async function getJson<T = any>(key: string): Promise<T | null> {
  try {
    const result: any = await storage.getItem(key);
    if (result === null) return null;
    return JSON.parse(result) as T;
  } catch {
    return null;
  }
}

/**
 * Set a JSON item to server storage
 */
export async function setJson(key: string, data: unknown): Promise<void> {
  try {
    await storage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`[StorageAdapter] Failed to set JSON key "${key}":`, err);
  }
}

/**
 * Get an item or return a default value
 */
export async function getItemOr<T = any>(key: string, defaultValue: T): Promise<T> {
  const result = await storage.getItem(key);
  if (result === null) return defaultValue;
  try {
    return JSON.parse(result) as T;
  } catch {
    return defaultValue;
  }
}

/**
 * Set an item as JSON, with error handling
 */
export async function setItemJson(key: string, data: unknown): Promise<void> {
  try {
    await storage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`[StorageAdapter] Failed to set JSON key "${key}":`, err);
  }
}

/**
 * Remove item from server storage
 */
export async function removeItemKey(key: string): Promise<void> {
  try {
    await storage.removeItem(key);
  } catch (err) {
    console.warn(`[StorageAdapter] Failed to remove key "${key}":`, err);
  }
}