// ─── Hybrid Storage Layer (PHP+MySQL) ────────────────────────────────────────
// All data is now persisted server-side via the PHP/MySQL API.
// This file acts as a thin compatibility shim — it provides the same exports
// that components expect, but delegates reads/writes to the PHP backend.
// localStorage is no longer the primary data store.

import { get, post, del as apiDelete } from './api';

// ─── Queue item types (kept for type compatibility) ──────────────────────────

export type SyncQueueItemType =
  | 'upsertPatient'
  | 'upsertVisit'
  | 'upsertPrescription'
  | 'upsertAppointment'
  | 'upsertQueueEntry'
  | 'upsertObservation'
  | 'upsertBed'
  | 'upsertDailyProgressNote'
  | 'upsertHandover'
  | 'upsertMedicationAdministration'
  | 'upsertFrontPageContent';

export interface SyncQueueItem {
  id: string;
  timestamp: number;
  type?: SyncQueueItemType;
  operation?: 'create' | 'update' | 'delete';
  entityType?: string;
  entityId?: string;
  data: unknown;
  retryCount: number;
}

export interface SyncStatus {
  isOnline: boolean;
  pendingChanges: number;
  lastSyncAt?: Date;
}

export interface SyncConflict {
  entityType: string;
  entityId: string;
  localVersion: unknown;
  serverVersion: unknown;
  localUpdatedAt?: number;
  serverUpdatedAt?: number;
  detectedAt: number;
}

export interface MigrationProgress {
  total: number;
  migrated: number;
  message: string;
}

// ─── No-op stubs (features no longer needed) ─────────────────────────────────

export function enqueueSync(_item: SyncQueueItem): void {
  // Sync queue removed — all writes go directly to PHP API
}

export function removeFromQueue(_type: string, _ids: Set<string>): void {
  // Sync queue removed
}

export function loadSyncQueue(): SyncQueueItem[] {
  return [];
}

export function getConflicts(): SyncConflict[] {
  return [];
}

export function getConflictsCount(): number {
  return 0;
}

export function addConflict(_conflict: SyncConflict): void {
  // Not needed with server-authoritative storage
}

export function resolveConflict(
  _entityId: string,
  _choice: 'mine' | 'theirs',
): void {
  // Not needed — server is source of truth
}

export function isMigrationDone(): boolean {
  return true;
}

export function markMigrationDone(): void {
  // No migration needed
}

export function getDeviceId(): string {
  return 'php-mysql-' + Date.now();
}

function getLastSyncTs(): number {
  return 0n;
}

export function setLastSyncTs(_ts: number): void {
  // No sync needed
}

export function getPendingChangesCount(): number {
  return 0;
}

// ─── Frontpage content — PHP API backed ──────────────────────────────────────

export async function saveFrontPageContentWithSync(): Promise<void> {
  // Content saving is handled by useSiteConfig via the PHP API
}

export async function loadFrontPageContentFromServer(): Promise<Record<string, unknown> | null> {
  try {
    return await get<Record<string, unknown>>('/frontpage/get.php');
  } catch {
    return null;
  }
}

export async function saveFrontPageContentToServer(
  data: Record<string, unknown>,
): Promise<boolean> {
  try {
    await post('/frontpage/save.php', data);
    return true;
  } catch {
    return false;
  }
}

// ─── Clinical entity storage (now uses PHP API) ─────────────────────────────

const CLINICAL_STORE_KEY = 'medicare_clinical_data';

export function getClinicalStore(): Record<string, unknown[]> {
  return {};
}

export function getClinicalEntities(_entityType: string): unknown[] {
  return [];
}

export function saveClinicalEntities(_entityType: string, _items: unknown[]): void {
  // Clinical data goes directly to PHP API endpoints
}

export function saveClinicalEntitiesWithSync(
  _entityType: string,
  _items: unknown[],
): void {
  // Clinical data goes directly to PHP API endpoints
}

export function nextClinicalId(_items: { id?: unknown }[]): number {
  return 1n;
}

// ─── Bootstrap — no-op ───────────────────────────────────────────────────────

export async function bootstrapFromCanister(): Promise<void> {
  // No canister — all data is PHP/MySQL
}

// ─── Content offline queue — no-op ──────────────────────────────────────────

export async function flushContentQueue(): Promise<void> {
  // No offline queue
}
