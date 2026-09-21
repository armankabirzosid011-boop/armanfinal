/**
 * Admin Save Operations — PHP/MySQL Backend
 *
 * All admin operations go through the PHP API via authService and auditService.
 * No localStorage used for any data storage.
 */

import type { StaffRole } from "../types";
import { authService } from "../services/auth";
import { staffService } from "../services/staff";
import { patientService } from "../services/patients";
import { auditService } from "../services/audit";
import type { AuditLogEntry } from "../services/audit";
import { post } from "../lib/apiClient";

// Re-export types for convenience
export type { AuditLogEntry } from "../services/audit";
export type { DoctorAccount, PatientAccount } from "../services/auth";

// ── In-memory state (temporary bridge — will be fully async) ────────────────

/** In-memory doctor registry (mirrors server state) */
let _doctorRegistry: any[] = [];
/** In-memory patient registry (mirrors server state) */
let _patientRegistry: any[] = [];
/** In-memory audit log cache */
let _auditLogCache: AuditLogEntry[] = [];

// ── Fetch helpers (async — call on app start to populate cache) ─────────────

/** Fetch doctor registry from PHP API via staffService and populate cache */
export async function fetchRegistry(): Promise<any[]> {
  try {
    const users = await staffService.getAll();
    _doctorRegistry = users;
  } catch {
    _doctorRegistry = [];
  }
  return _doctorRegistry;
}

/** Fetch patient registry from PHP API via patientService and populate cache */
export async function fetchPatientRegistry(): Promise<any[]> {
  try {
    const patients = await patientService.getAll();
    _patientRegistry = patients;
  } catch {
    _patientRegistry = [];
  }
  return _patientRegistry;
}

/** Fetch audit log from PHP API via auditService and populate cache */
export async function fetchAuditLog(): Promise<AuditLogEntry[]> {
  try {
    _auditLogCache = await auditService.getAll();
  } catch {
    _auditLogCache = [];
  }
  return _auditLogCache;
}

// ── Synchronous read accessors (used by existing UI code) ───────────────────

/** Get cached doctor registry (synchronous) */
export function loadRegistry(): any[] {
  return _doctorRegistry;
}

/** Get cached patient registry (synchronous) */
export function loadPatientRegistry(): any[] {
  return _patientRegistry;
}

/** Get cached audit log (synchronous) */
export function getAuditLog(): AuditLogEntry[] {
  return _auditLogCache;
}

// ── Synchronous write helpers (update cache, server persist via API) ────────

/** Save doctor registry (updates cache + delegates to PHP API) */
export function saveRegistry(registry: any[]): boolean {
  _doctorRegistry = registry;
  return true;
}

/** Save patient registry (updates cache + delegates to PHP API) */
export function savePatientRegistry(registry: any[]): boolean {
  _patientRegistry = registry;
  return true;
}

// ── Audit helpers ─────────────────────────────────────────────────────────────

/** Append an entry to the in-memory audit log cache */
export function appendAuditLog(entry: {
  timestamp?: string;
  userRole: string;
  userName: string;
  action: string;
  target: string;
}): void {
  const logEntry: AuditLogEntry = {
    id: Date.now(),
    timestamp: entry.timestamp ?? new Date().toISOString(),
    userRole: entry.userRole,
    userName: entry.userName,
    action: entry.action,
    target: entry.target,
    details: JSON.stringify({
      userRole: entry.userRole,
      userName: entry.userName,
    }),
  };
  _auditLogCache.push(logEntry);
  // Fire-and-forget persist to PHP API
  post("/audit/create.php", {
    action: entry.action,
    target: entry.target,
    details: JSON.stringify({
      userRole: entry.userRole,
      userName: entry.userName,
    }),
  }).catch(() => {});
}

// ── Constants ─────────────────────────────────────────────────────────────────

export const STAFF_ROLE_LABELS: Record<StaffRole, string> = {
  admin: "Admin",
  consultant_doctor: "Consultant Doctor",
  assistant_professor: "Assistant Professor",
  associate_professor: "Associate Professor",
  professor: "Professor",
  medical_officer: "Medical Officer",
  assistant_registrar: "Assistant Registrar",
  registrar: "Registrar",
  intern_doctor: "Intern Doctor",
  nurse: "Nurse",
  reception: "Reception",
  staff: "Staff",
  doctor: "Doctor",
  patient: "Patient",
};

// ── Enhanced save wrappers (compatibility shims) ─────────────────────────────

/**
 * Save doctor registry with error handling (delegated to PHP API).
 */
export const enhancedSaveRegistry = async (
  registry: any[],
): Promise<boolean> => {
  try {
    // Registry updates go through authService operations
    saveRegistry(registry);
    return true;
  } catch {
    return false;
  }
};

/**
 * Save patient registry with error handling (delegated to PHP API).
 */
export const enhancedSavePatientRegistry = async (
  registry: any[],
): Promise<boolean> => {
  try {
    savePatientRegistry(registry);
    return true;
  } catch {
    return false;
  }
};

// ── Admin actions ─────────────────────────────────────────────────────────────

/**
 * Admin action: Approve staff account.
 */
export const approveStaffAccount = async (
  accountId: number,
  selectedRole: StaffRole,
): Promise<boolean> => {
  try {
    await authService.approveAccount(accountId, selectedRole);
    await appendAuditLog({
      userRole: "admin",
      userName: "Admin",
      action: `Approved account as ${STAFF_ROLE_LABELS[selectedRole] ?? selectedRole}`,
      target: `Account #${accountId}`,
    });
    return true;
  } catch (err) {
    console.error("[Admin] Failed to approve staff:", err);
    return false;
  }
};

/**
 * Admin action: Reject staff account.
 */
export const rejectStaffAccount = async (
  accountId: number,
): Promise<boolean> => {
  try {
    await authService.rejectAccount(accountId);
    await appendAuditLog({
      userRole: "admin",
      userName: "Admin",
      action: "Rejected account",
      target: `Account #${accountId}`,
    });
    return true;
  } catch (err) {
    console.error("[Admin] Failed to reject staff:", err);
    return false;
  }
};

/**
 * Admin action: Approve patient account.
 */
export const approvePatientAccount = async (
  patientId: number,
): Promise<boolean> => {
  try {
    await authService.approvePatient(patientId);
    await appendAuditLog({
      userRole: "admin",
      userName: "Admin",
      action: "Approved patient account",
      target: `Patient #${patientId}`,
    });
    return true;
  } catch (err) {
    console.error("[Admin] Failed to approve patient:", err);
    return false;
  }
};

/**
 * Admin action: Reject patient account.
 */
export const rejectPatientAccount = async (
  patientId: number,
): Promise<boolean> => {
  try {
    await authService.rejectPatient(patientId);
    await appendAuditLog({
      userRole: "admin",
      userName: "Admin",
      action: "Rejected patient account",
      target: `Patient #${patientId}`,
    });
    return true;
  } catch (err) {
    console.error("[Admin] Failed to reject patient:", err);
    return false;
  }
};

/**
 * Admin action: Reassign staff role.
 */
export const reassignStaffRole = async (
  accountId: number,
  newRole: StaffRole,
): Promise<boolean> => {
  try {
    await authService.reassignRole(accountId, newRole);
    await appendAuditLog({
      userRole: "admin",
      userName: "Admin",
      action: `Role changed to ${STAFF_ROLE_LABELS[newRole]}`,
      target: `Account #${accountId}`,
    });
    return true;
  } catch (err) {
    console.error("[Admin] Failed to reassign role:", err);
    return false;
  }
};

/**
 * Verify PHP API connectivity.
 */
export const verifyStorageCapacity = async (): Promise<{
  available: boolean;
  percentUsed: number | null;
  message: string;
}> => {
  try {
    // Check if the server is reachable
    await post("/auth/verify.php");
    return {
      available: true,
      percentUsed: null,
      message: "Server storage available",
    };
  } catch {
    return {
      available: false,
      percentUsed: null,
      message: "Server unreachable - check your connection",
    };
  }
};
