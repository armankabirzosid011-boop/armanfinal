/**
 * Admin Auth Hook — PHP/MySQL Backend
 *
 * Admin authentication goes through the PHP API via authService.
 * Session state is kept in memory only — no localStorage.
 */

import { useCallback, useState } from "react";
import { authService } from "../services/auth";

export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const adminLogin = useCallback(
    async (username: string, password: string): Promise<boolean> => {
      try {
        const result = await authService.signIn(username, password);
        if (result.user) {
          setIsAdmin(true);
          return true;
        }
      } catch {
        // Login failed
      }
      return false;
    },
    [],
  );

  const adminLogout = useCallback(async () => {
    await authService.signOut();
    setIsAdmin(false);
  }, []);

  return { isAdmin, adminLogin, adminLogout };
}