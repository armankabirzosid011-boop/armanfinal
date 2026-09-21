/**
 * Staff Data Service
 *
 * Persists staff shifts, attendance, and leave requests via the PHP API.
 * All data stored in MySQL via /api/data/ endpoints.
 */

import { get, post } from '../lib/apiClient';

export interface StaffShift {
  id: string;
  staffId: string;
  staffName: string;
  shiftType: 'morning' | 'evening' | 'night';
  startDate: string;
  endDate: string;
  ward: string;
  createdBy: string;
}

export interface AttendanceRecord {
  id: string;
  staffId: string;
  staffName: string;
  date: string;
  loginTime: string;
  logoutTime?: string;
  shiftStatus: 'present' | 'late' | 'absent';
  manualOverride?: boolean;
  overrideNote?: string;
}

export type LeaveType = 'Annual Leave' | 'Sick Leave' | 'Emergency Leave' | 'Training';
export type LeaveStatus = 'pending' | 'approved' | 'rejected';

export interface LeaveRequest {
  id: string;
  staffId: string;
  staffName: string;
  staffRole: string;
  startDate: string;
  endDate: string;
  leaveType: LeaveType;
  reason: string;
  status: LeaveStatus;
  adminNote: string;
  requestedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

const SHIFTS_KEY = 'staff_shifts';
const ATTENDANCE_KEY = 'staff_attendance';
const LEAVE_REQUESTS_KEY = 'leave_requests';

async function loadData<T>(key: string): Promise<T[]> {
  try {
    const result = await get<{ setting_value: T[] }>('/data/get.php', { key });
    return result?.setting_value ?? [];
  } catch {
    return [];
  }
}

async function saveData<T>(key: string, value: T[]): Promise<void> {
  await post('/data/save.php', { key, value });
}

export const staffDataService = {
  // ── Shifts ──────────────────────────────────────────────────────────────────
  async loadShifts(): Promise<StaffShift[]> {
    return loadData<StaffShift>(SHIFTS_KEY);
  },
  async saveShifts(shifts: StaffShift[]): Promise<void> {
    return saveData(SHIFTS_KEY, shifts);
  },

  // ── Attendance ──────────────────────────────────────────────────────────────
  async loadAttendance(): Promise<AttendanceRecord[]> {
    return loadData<AttendanceRecord>(ATTENDANCE_KEY);
  },
  async saveAttendance(records: AttendanceRecord[]): Promise<void> {
    return saveData(ATTENDANCE_KEY, records);
  },

  // ── Leave Requests ──────────────────────────────────────────────────────────
  async loadLeaveRequests(): Promise<LeaveRequest[]> {
    return loadData<LeaveRequest>(LEAVE_REQUESTS_KEY);
  },
  async saveLeaveRequests(requests: LeaveRequest[]): Promise<void> {
    return saveData(LEAVE_REQUESTS_KEY, requests);
  },
};
