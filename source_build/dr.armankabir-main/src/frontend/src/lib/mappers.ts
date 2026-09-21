/**
 * API Response Mapper Utility
 *
 * Maps snake_case API responses to camelCase TypeScript DTOs.
 * All frontend services should use this to transform PHP API responses
 * into the typed interfaces defined in types/index.ts.
 *
 * Usage:
 *   const patientMapper: Mapping<Patient> = {
 *     id: 'id',
 *     fullName: 'full_name',
 *     nameBn: 'name_bn',
 *     dateOfBirth: 'date_of_birth',
 *     // ...
 *   };
 *   const patient = mapFromApi<Patient>(raw, patientMapper);
 */

// ── Mapping definition ────────────────────────────────────────────────────
// Maps a camelCase TypeScript field to its snake_case API response field.
export type Mapping<T> = {
  [K in keyof T]: string; // snake_case key in the API response
};

// ── Field transforms ──────────────────────────────────────────────────────
// Optional transforms to convert API string values to proper types.
export type FieldTransforms = Record<string, (value: any) => any>;

// ── Core mapper functions ─────────────────────────────────────────────────

/**
 * Maps a single API response object (snake_case) to a typed DTO (camelCase).
 * Returns null if raw is null or undefined.
 */
export function mapFromApi<T extends Record<string, any>>(
  raw: Record<string, any> | null | undefined,
  mapping: Mapping<T>,
  transforms?: FieldTransforms
): T | null {
  if (!raw) return null;

  const result: Record<string, any> = {};
  for (const [camelField, snakeField] of Object.entries(mapping)) {
    let value = raw[snakeField];

    // Apply transform if defined
    if (transforms?.[camelField]) {
      value = transforms[camelField](value);
    }

    result[camelField] = value ?? null;
  }

  return result as T;
}

/**
 * Maps an array of API response objects to typed DTOs.
 * Filters out any null results from failed mappings.
 */
export function mapListFromApi<T extends Record<string, any>>(
  rawList: Record<string, any>[] | null | undefined,
  mapping: Mapping<T>,
  transforms?: FieldTransforms
): T[] {
  if (!rawList || !Array.isArray(rawList)) return [];
  return rawList
    .map((item) => mapFromApi<T>(item, mapping, transforms))
    .filter((item): item is T => item !== null);
}

/**
 * Maps a typed DTO (camelCase) to an API request payload (snake_case).
 * Inverse of mapFromApi — used for service create/update calls.
 */
export function mapToApi<T extends Record<string, any>>(
  data: Partial<T>,
  mapping: Mapping<T>
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [camelField, snakeField] of Object.entries(mapping)) {
    if (camelField in data) {
      result[snakeField] = data[camelField as keyof T];
    }
  }
  return result;
}

// ── Common transforms ─────────────────────────────────────────────────────

/** Converts an ISO date string to a Date object */
export function toDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

/** Parses a JSON string field into an array */
export function parseJsonArray(value: string | null | undefined): any[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Parses a JSON string field into an object */
export function parseJsonObject(value: string | null | undefined): Record<string, any> | null {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/** Converts a number to boolean (1 = true,  = false) */
export function toBoolean(value: number | string | null | undefined): boolean {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value === 1;
  if (typeof value === 'string') return value === '1' || value === 'true';
  return false;
}

/** Converts a MySQL datetime/timestamp to ISO string */
export function toIsoString(value: string | null | undefined): string | null {
  if (!value) return null;
  // MySQL format: 2026-07-25 10:30:00 → ISO: 2026-07-25T10:30:00+06:00
  // If already ISO, return as-is
  if (value.includes('T')) return value;
  if (value.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)) {
    return value.replace(' ', 'T') + '+06:00';
  }
  return value;
}

/** Converts a value to a number, returning null if NaN */
export function toNumber(value: any): number | null {
  if (value === null || value === undefined || value === '') return null;
  const n = Number(value);
  return isNaN(n) ? null : n;
}

/** Converts a comma-separated string to an array */
export function toArray(value: string | null | undefined): string[] {
  if (!value) return [];
  return value.split(',').map((s) => s.trim()).filter(Boolean);
}
