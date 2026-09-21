/**
 * User Service
 *
 * Operations for the currently logged-in user profile.
 * All data is persisted in MySQL via the PHP API.
 */

import { get, post } from '../lib/apiClient';
import type { UserProfile } from '../types';

export const userService = {
  /** Get the current user's profile */
  async getProfile(): Promise<UserProfile | null> {
    try {
      const user = await get<Record<string, any>>('/auth/verify.php');
      if (user) {
        return {
          name: user.full_name || '',
          email: user.email || '',
          role: user.role,
          specialization: user.specialization,
        } as UserProfile;
      }
    } catch {
      // Not authenticated
    }
    return null;
  },

  /** Get the current user's role */
  async getRole(): Promise<string> {
    try {
      const user = await get<Record<string, any>>('/auth/verify.php');
      return user?.role || 'user';
    } catch {
      return 'user';
    }
  },

  /** Update the current user's profile */
  async updateProfile(profile: Partial<UserProfile>): Promise<void> {
    await post('/auth/update_profile.php', profile);
  },
};
