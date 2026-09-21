/**
 * Doctor Content Hook — PHP/MySQL Backend
 *
 * Doctor content is stored server-side via the PHP API.
 * No localStorage used — content is fetched via React Query hooks.
 * Overrides are managed via the landingService on the server.
 */

import { useCallback, useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { landingService } from "../services/landing";

/**
 * Hook to manage doctor content overrides.
 * Fetches content from server-side PHP API on mount.
 */
export function useDoctorContent() {
  const queryClient = useQueryClient();
  const [overrides, setOverrides] = useState<Record<string, Record<string, unknown>>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Fetch doctor content on mount
  useEffect(() => {
    async function fetchContent() {
      try {
        const config = await landingService.getSiteConfig();
        const doctorOverrides = (config as any)?.doctorContentOverrides ?? {};
        setOverrides(doctorOverrides ?? {});
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch doctor content:", error);
        setIsLoading(false);
      }
    }

    fetchContent();
  }, [queryClient]);

  const mutation = useMutation({
    mutationFn: async (newOverrides: Record<string, unknown>) => {
      await landingService.updateSiteConfig({
        doctorContentOverrides: newOverrides,
      } as any);
    },
    onSuccess: () => {
      // Refetch after successful update
      async function refetch() {
        try {
          const config = await landingService.getSiteConfig();
          const doctorOverrides = (config as any)?.doctorContentOverrides ?? {};
          setOverrides(doctorOverrides ?? {});
          setIsLoading(false);
          queryClient.invalidateQueries({ queryKey: ["doctorContent"] });
        } catch (error) {
          console.error("Failed to refetch doctor content:", error);
        }
      }
      refetch();
    },
  });

  const getContent = useCallback(
    (doctorKey: string): Record<string, unknown> => {
      const doctorOverrides = overrides[doctorKey] || {};
      // Ensure phone fields have default values
      const phone = doctorOverrides?.phone ?? '';
      const phone2 = doctorOverrides?.phone2 ?? '';
      return {
        ...doctorOverrides,
        phone: phone !== '' ? phone : undefined,
        phone2: phone2 !== '' ? phone2 : undefined,
      };
    },
    [overrides],
  );

  const updateField = useCallback(
    (doctorKey: string, path: string, value: unknown) => {
      const updated = { ...overrides };
      if (!updated[doctorKey]) updated[doctorKey] = {};
      const parts = path.split(".");
      let obj = updated[doctorKey] as Record<string, unknown>;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!obj[parts[i]] || typeof obj[parts[i]] !== "object") {
          obj[parts[i]] = {};
        }
        obj = obj[parts[i]] as Record<string, unknown>;
      }
      obj[parts[parts.length - 1]] = value;
      mutation.mutate(updated);
    },
    [overrides, mutation],
  );

  const updateChambers = useCallback(
    (doctorKey: string, chambers: unknown[]) => {
      const updated = {
        ...overrides,
        [doctorKey]: {
          ...((overrides[doctorKey] as Record<string, unknown>) || {}),
          chambers,
        },
      };
      mutation.mutate(updated);
    },
    [overrides, mutation],
  );

  const getAll = useCallback(() => {
    return overrides;
  }, [overrides]);

  return { getContent, updateField, updateChambers, getAll, isLoading };
}
