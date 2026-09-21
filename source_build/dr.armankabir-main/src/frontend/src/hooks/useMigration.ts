// ─── Migration & Sync Hook (PHP/MySQL Backend) ───────────────────────────────
// Migration is complete — all data is stored server-side via the PHP API.
// This hook is kept for API compatibility and returns "complete" immediately.
// No localStorage used.

import { useCallback, useState } from "react";
import type { MigrationProgress, SyncStatus } from "../lib/hybridStorage";

export type MigrationStatus = "idle" | "running" | "complete" | "failed";

export interface MigrationState {
  migrationStatus: MigrationStatus;
  migrationProgress: MigrationProgress;
  runManualMigration: () => void;
}

const COMPLETE_PROGRESS: MigrationProgress = {
  total: 1,
  migrated: 1,
  message: "All data is stored server-side via PHP API",
};

export function useMigration(
  _actor: unknown,
  _invalidateAll?: () => void,
): MigrationState {
  const [status] = useState<MigrationStatus>("complete");
  const [progress] = useState<MigrationProgress>(COMPLETE_PROGRESS);

  const runManualMigration = useCallback(() => {
    // Migration is already complete
  }, []);

  return {
    migrationStatus: status,
    migrationProgress: progress,
    runManualMigration,
  };
}

// ── Sync status hook (offline/online only) ────────────────────────────────────

export function useSyncStatus(): SyncStatus {
  const [syncStatus] = useState<SyncStatus>({
    isOnline: navigator.onLine,
    pendingChanges: 0,
  });

  return syncStatus;
}

export { getPendingChangesCount, markMigrationDone, isMigrationDone } from "../lib/hybridStorage";
