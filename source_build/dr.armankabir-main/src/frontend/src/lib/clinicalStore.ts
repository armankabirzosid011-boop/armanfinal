/**
 * Clinical Store
 *
 * All clinical data is now persisted server-side via the PHP/MySQL API.
 * This file provides no-op stubs for backward compatibility.
 * Components should use React Query hooks (useQueries.ts) instead.
 */

export function getClinicalStore(): Record<string, unknown[]> {
  // Clinical data is fetched via React Query hooks (useGetObservationsByPatient, etc.)
  return {};
}

export function saveClinicalStore(_store: Record<string, unknown[]>): void {
  // Clinical data is persisted via PHP API — no localStorage needed
}
