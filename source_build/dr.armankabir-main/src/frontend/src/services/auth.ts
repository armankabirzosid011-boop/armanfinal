/**
 * Auth Service
 *
 * All authentication operations go through the PHP API.
 * No tokens or credentials stored in localStorage.
 * PHP session cookies handle authentication.
 */

import { get, post } from '../lib/apiClient';
import type { StaffRole } from '../types';

export interface DoctorAccount {
  id: number;
  email: string;
  full_name: string;
  name_bn: string;
  role: StaffRole;
  specialization: string;
  phone: string;
  photo_url?: string;
  signature_url?: string;
  bmdc_registration?: string;
  created_at?: string;
}

export interface PatientAccount {
  id: number;
  patient_id: number;
  phone: string;
  full_name: string;
  name_bn: string;
  gender?: string;
  date_of_birth?: string;
  register_number?: string;
  photo_url?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const authService = {
  /** Verify current PHP session and return doctor account */
  async verifySession(): Promise<DoctorAccount | null> {
    try {
      const result = await get<{ user: DoctorAccount }>('/auth/verify.php');
      return result?.user ?? null;
    } catch {
      return null;
    }
  },

  /** Sign in with email and password */
  async signIn(email: string, password: string): Promise<{ token?: string; user: DoctorAccount }> {
    return post<{ token: string; user: DoctorAccount }>('/auth/login.php', { email, password });
  },

  /** Sign up a new staff account */
  async signUp(data: {
    email: string;
    password: string;
    full_name: string;
    role?: string;
    specialization?: string;
    phone?: string;
    designation?: string;
    degree?: string;
    hospital_name?: string;
  }): Promise<{ status: string; message: string }> {
    return post<{ status: string; message: string }>('/auth/register.php', data);
  },

  /** Sign out (server-side session clear) */
  async signOut(): Promise<void> {
    try {
      await post('/auth/logout.php');
    } catch {
      // Ignore logout errors
    }
  },

  /** Get pending staff accounts for admin approval */
  async getPendingAccounts(): Promise<DoctorAccount[]> {
    try {
      const result = await get<{ users: DoctorAccount[] }>('/auth/pending.php');
      return result.users ?? [];
    } catch {
      return [];
    }
  },

  /** Approve a staff account */
  async approveAccount(id: number, role?: string): Promise<void> {
    await post('/auth/approve.php', { user_id: id, ...(role ? { role } : {}) });
  },

  /** Reject a staff account */
  async rejectAccount(id: number): Promise<void> {
    await post('/auth/reject.php', { user_id: id });
  },

  /** Reassign a user's role */
  async reassignRole(id: number, role: StaffRole): Promise<void> {
    await post('/auth/reassign_role.php', { user_id: id, role });
  },

  /** Patient sign up */
  async patientSignUp(data: { registerNumber: string; phone: string; password: string }): Promise<{ message: string; status: string }> {
    return post<{ message: string; status: string }>('/auth/patients/register.php', {
      register_number: data.registerNumber.trim(),
      phone: data.phone,
      password: data.password,
    });
  },

  /** Patient sign in */
  async patientSignIn(phone: string, password: string): Promise<{ token?: string; patient: PatientAccount }> {
    return post<{ token: string; patient: PatientAccount }>('/auth/patients/login.php', { phone, password });
  },

  /** Get pending patient accounts */
  async getPendingPatients(): Promise<PatientAccount[]> {
    try {
      const result = await get<{ patients: PatientAccount[] }>('/auth/patients/pending.php');
      return result.patients ?? [];
    } catch {
      return [];
    }
  },

  /** Approve a patient account */
  async approvePatient(id: number): Promise<void> {
    await post('/auth/patients/approve.php', { patient_login_id: id });
  },

  /** Reject a patient account */
  async rejectPatient(id: number): Promise<void> {
    await post('/auth/patients/reject.php', { patient_login_id: id });
  },

  /** Update patient credentials */
  async updatePatientCredentials(registerNumber: string, newPhone?: string, newPassword?: string): Promise<void> {
    await post('/auth/patients/update.php', {
      register_number: registerNumber,
      phone: newPhone,
      password: newPassword,
    });
  },
};
