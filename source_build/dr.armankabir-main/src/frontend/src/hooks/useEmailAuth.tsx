/**
 * Email Auth Hook — PHP/MySQL Backend
 *
 * All authentication is handled server-side via the PHP API.
 * No localStorage used for business data — only session cookies.
 * Tokens are stored in memory only, not in browser storage.
 */

import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { StaffRole } from "../types";
import { authService } from "../services/auth";
import type { DoctorAccount, PatientAccount } from "../services/auth";
import { settingsService } from "../services/settings";

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  userRole: StaffRole | "admin" | "patient";
  userName: string;
  action: string;
  target: string;
}

const VALID_ROLES: StaffRole[] = [
  "admin",
  "consultant_doctor",
  "assistant_professor",
  "associate_professor",
  "professor",
  "medical_officer",
  "assistant_registrar",
  "registrar",
  "intern_doctor",
  "nurse",
  "reception",
  "staff",
  "patient",
  "doctor",
];

export function isConsultantLevel(role: StaffRole): boolean {
  return [
    "consultant_doctor",
    "assistant_professor",
    "associate_professor",
    "professor",
  ].includes(role);
}

// In-memory auth token (not persisted to localStorage)
let _authToken: string | null = null;
let _patientToken: string | null = null;

export function getAuthToken(): string | null {
  return _authToken;
}

function setAuthToken(token: string): void {
  _authToken = token;
}

function clearAuthToken(): void {
  _authToken = null;
}

export function getPatientToken(): string | null {
  return _patientToken;
}

export function setPatientToken(token: string): void {
  _patientToken = token;
}

export function clearPatientToken(): void {
  _patientToken = null;
}

interface EmailAuthContextValue {
  currentDoctor: DoctorAccount | null;
  currentPatient: PatientAccount | null;
  isInitializing: boolean;
  isLoggingIn: boolean;
  authError: string | null;
  signUp: (data: {
    email: string;
    password: string;
    full_name: string;
    role?: string;
    specialization?: string;
    phone?: string;
    designation?: string;
    degree?: string;
    hospital_name?: string;
  }) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<DoctorAccount>) => Promise<void>;
  getPendingAccounts: () => Promise<DoctorAccount[]>;
  approveAccount: (id: number, role?: string) => Promise<void>;
  approveAccountWithRole: (id: number, role: StaffRole) => Promise<void>;
  rejectAccount: (id: number) => Promise<void>;
  reassignRole: (id: number, role: StaffRole) => Promise<void>;
  // Patient auth
  patientSignUp: (data: {
    registerNumber: string;
    phone: string;
    password: string;
  }) => Promise<void>;
  patientSignIn: (phone: string, password: string) => Promise<void>;
  patientSignOut: () => void;
  getPendingPatients: () => Promise<PatientAccount[]>;
  approvePatient: (id: number) => Promise<void>;
  rejectPatient: (id: number) => Promise<void>;
  updatePatientCredentials: (
    registerNumber: string,
    newPhone?: string,
    newPassword?: string,
  ) => Promise<void>;
}

const EmailAuthContext = createContext<EmailAuthContextValue | null>(null);

export function EmailAuthProvider({ children }: { children: React.ReactNode }) {
  const [currentDoctor, setCurrentDoctor] = useState<DoctorAccount | null>(null);
  const [currentPatient, setCurrentPatient] = useState<PatientAccount | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Restore session on mount by verifying with the server (cookie-based)
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const user = await authService.verifySession();
        if (user) {
          setCurrentDoctor(user);
        }
      } catch {
        // Session invalid — not authenticated
      } finally {
        setIsInitializing(false);
      }
    };
    restoreSession();
  }, []);

  const signUp = useCallback(
    async (data: {
      email: string;
      password: string;
      full_name: string;
      role?: string;
      specialization?: string;
      phone?: string;
      designation?: string;
      degree?: string;
      hospital_name?: string;
    }) => {
      setIsLoggingIn(true);
      setAuthError(null);
      try {
        const result = await authService.signUp({
          email: data.email,
          password: data.password,
          full_name: data.full_name,
          role: data.role ?? "doctor",
          specialization: data.specialization ?? "",
          phone: data.phone ?? "",
          designation: data.designation,
          degree: data.degree,
          hospital_name: data.hospital_name,
        });
        throw new Error(
          result.message ||
            "Account created! Please wait for admin approval before logging in.",
        );
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Sign up failed.";
        setAuthError(msg);
        throw e;
      } finally {
        setIsLoggingIn(false);
      }
    },
    [],
  );

  const signIn = useCallback(async (email: string, password: string) => {
    setIsLoggingIn(true);
    setAuthError(null);
    try {
      const result = await authService.signIn(email, password);
      if (result.token) {
        setAuthToken(result.token);
      }
      setCurrentDoctor(result.user);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Sign in failed.";
      setAuthError(msg);
      throw e;
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    await authService.signOut();
    clearAuthToken();
    setCurrentDoctor(null);
    setAuthError(null);
  }, []);

  const updateProfile = useCallback(
    async (_data: Partial<DoctorAccount>) => {
      // Profile update handled by PHP backend
    },
    [],
  );

  const getPendingAccounts = useCallback(async (): Promise<DoctorAccount[]> => {
    return authService.getPendingAccounts();
  }, []);

  const approveAccount = useCallback(async (id: number, role?: string) => {
    await authService.approveAccount(id, role);
  }, []);

  const approveAccountWithRole = useCallback(async (id: number, role: StaffRole) => {
    await authService.approveAccount(id, role);
  }, []);

  const rejectAccount = useCallback(async (id: number) => {
    await authService.rejectAccount(id);
  }, []);

  const reassignRole = useCallback(async (id: number, role: StaffRole) => {
    await authService.reassignRole(id, role);
  }, []);

  // ── Patient auth ──────────────────────────────────────────────────────────

  const patientSignUp = useCallback(
    async (data: {
      registerNumber: string;
      phone: string;
      password: string;
    }) => {
      setIsLoggingIn(true);
      setAuthError(null);
      try {
        const { registerNumber, phone, password } = data;

        if (!registerNumber?.trim()) {
          throw new Error(
            "Register number is required. Please contact the clinic to get your register number.",
          );
        }

        const result = await authService.patientSignUp({
          registerNumber: registerNumber.trim(),
          phone,
          password,
        });

        throw new Error(
          result.message ||
            "Account created! Please wait for doctor approval before logging in.",
        );
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Sign up failed.";
        setAuthError(msg);
        throw e;
      } finally {
        setIsLoggingIn(false);
      }
    },
    [],
  );

  const patientSignIn = useCallback(async (phone: string, password: string) => {
    setIsLoggingIn(true);
    setAuthError(null);
    try {
      const result = await authService.patientSignIn(phone, password);
      if (result.token) {
        setPatientToken(result.token);
      }
      setCurrentPatient(result.patient);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Sign in failed.";
      setAuthError(msg);
      throw e;
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const patientSignOut = useCallback(() => {
    clearPatientToken();
    setCurrentPatient(null);
    setAuthError(null);
  }, []);

  const getPendingPatients = useCallback(async (): Promise<PatientAccount[]> => {
    return authService.getPendingPatients();
  }, []);

  const approvePatient = useCallback(async (id: number) => {
    await authService.approvePatient(id);
  }, []);

  const rejectPatient = useCallback(async (id: number) => {
    await authService.rejectPatient(id);
  }, []);

  const updatePatientCredentials = useCallback(
    async (registerNumber: string, newPhone?: string, newPassword?: string) => {
      await authService.updatePatientCredentials(
        registerNumber,
        newPhone,
        newPassword,
      );
    },
    [],
  );

  return (
    <EmailAuthContext.Provider
      value={{
        currentDoctor,
        currentPatient,
        isInitializing,
        isLoggingIn,
        authError,
        signUp,
        signIn,
        signOut,
        updateProfile,
        getPendingAccounts,
        approveAccount,
        approveAccountWithRole,
        rejectAccount,
        reassignRole,
        patientSignUp,
        patientSignIn,
        patientSignOut,
        getPendingPatients,
        approvePatient,
        rejectPatient,
        updatePatientCredentials,
      }}
    >
      {children}
    </EmailAuthContext.Provider>
  );
}

export function useEmailAuth(): EmailAuthContextValue {
  const ctx = useContext(EmailAuthContext);
  if (!ctx)
    throw new Error("useEmailAuth must be used inside EmailAuthProvider");
  return ctx;
}

// ── Inactivity Timer ──────────────────────────────────────────────────────────

const INACTIVITY_TIMEOUT_MS = 15 * 60 * 100; // 15 minutes
const INACTIVITY_WARNING_MS = 13 * 60 * 100; // 13 minutes (2 min before logout)
const ACTIVITY_EVENTS = [
  "mousemove",
  "keydown",
  "click",
  "touchstart",
  "scroll",
] as const;

export interface InactivityTimerState {
  showWarning: boolean;
  secondsRemaining: number;
  resetTimer: () => void;
}

export function useInactivityTimer(onLogout: () => void): InactivityTimerState {
  const [showWarning, setShowWarning] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(120);

  const logoutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warningTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastActivityRef = useRef<number>(Date.now());

  const clearAllTimers = useCallback(() => {
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    logoutTimerRef.current = null;
    warningTimerRef.current = null;
    countdownRef.current = null;
  }, []);

  const startTimers = useCallback(() => {
    clearAllTimers();
    setShowWarning(false);
    setSecondsRemaining(120);

    warningTimerRef.current = setTimeout(() => {
      setShowWarning(true);
      setSecondsRemaining(120);
      countdownRef.current = setInterval(() => {
        setSecondsRemaining((s) => {
          if (s <= 1) {
            if (countdownRef.current) clearInterval(countdownRef.current);
            return ;
          }
          return s - 1;
        });
      }, 100);
    }, INACTIVITY_WARNING_MS);

    logoutTimerRef.current = setTimeout(() => {
      clearAllTimers();
      setShowWarning(false);
      onLogout();
    }, INACTIVITY_TIMEOUT_MS);
  }, [clearAllTimers, onLogout]);

  const resetTimer = useCallback(() => {
    lastActivityRef.current = Date.now();
    startTimers();
  }, [startTimers]);

  useEffect(() => {
    startTimers();
    return clearAllTimers;
  }, [startTimers, clearAllTimers]);

  useEffect(() => {
    const handler = () => resetTimer();
    for (const ev of ACTIVITY_EVENTS) {
      window.addEventListener(ev, handler, { passive: true });
    }
    return () => {
      for (const ev of ACTIVITY_EVENTS) {
        window.removeEventListener(ev, handler);
      }
    };
  }, [resetTimer]);

  return { showWarning, secondsRemaining, resetTimer };
}

// ── Patient sign-up helpers (MySQL-backed) ─────────────────────────────────

const PATIENT_SIGNUP_SETTING_PREFIX = "patient_signup_enabled_";

function signupSettingKey(registerNumber: string): string {
  return PATIENT_SIGNUP_SETTING_PREFIX + registerNumber.trim();
}

export async function setSignUpEnabled(
  registerNumber: string,
  enabled: boolean,
): Promise<void> {
  const key = signupSettingKey(registerNumber);
  await settingsService.set(key, enabled ? "1" : "");
}

export async function isSignUpEnabled(
  registerNumber: string,
): Promise<boolean> {
  try {
    const value = await settingsService.getByKey(signupSettingKey(registerNumber));
    return value === "1";
  } catch {
    return false;
  }
}
