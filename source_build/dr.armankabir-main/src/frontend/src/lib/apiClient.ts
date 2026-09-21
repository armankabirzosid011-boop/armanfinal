/**
 * Centralized API Client
 *
 * All HTTP communication goes through this module.
 * Authentication is managed via PHP sessions (cookies auto-sent by the browser).
 * No tokens stored in localStorage.
 * Handles: auth, errors, timeouts, JSON parsing, HTTP status, retry policy.
 */

const API_BASE = '/api';
const DEFAULT_TIMEOUT_MS = 30_000;
const MAX_RETRIES = 3;

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  errors?: Record<string, string[]>;
  timestamp?: string;
}

export interface PaginatedData<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
    has_more: boolean;
  };
}

export class ApiError extends Error {
  statusCode: number;
  errors?: Record<string, string[]>;

  constructor(message: string, statusCode: number, errors?: Record<string, string[]>) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

function buildUrl(path: string, params?: Record<string, string | number | undefined | null>): string {
  const url = `${API_BASE}${path}`;
  if (!params) return url;

  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  }
  const qs = searchParams.toString();
  return qs ? `${url}?${qs}` : url;
}

async function request<T = any>(
  method: string,
  path: string,
  body?: any,
  params?: Record<string, string | number | undefined | null>,
  customHeaders?: Record<string, string>,
  retryCount = 0,
): Promise<T> {
  const url = buildUrl(path, params);
  const headers: Record<string, string> = {
    ...customHeaders,
  };

  const options: RequestInit = {
    method,
    headers,
    credentials: 'same-origin', // PHP session cookie
  };

  if (body !== undefined) {
    if (body instanceof FormData) {
      // Let browser set Content-Type with boundary for FormData
      options.body = body;
    } else {
      headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(body);
    }
  }

  // Timeout handling via AbortController
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);
  options.signal = controller.signal;

  let response: Response;
  try {
    response = await fetch(url, options);
  } catch (err: any) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new ApiError('Request timed out. Please try again.', 408);
    }
    // Retry on network errors
    if (retryCount < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, 1000 * (retryCount + 1)));
      return request<T>(method, path, body, params, customHeaders, retryCount + 1);
    }
    throw new ApiError('Network error. Please check your connection.', 0);
  }

  clearTimeout(timeoutId);

  let json: ApiResponse<T>;
  try {
    json = await response.json();
  } catch {
    throw new ApiError(`Unexpected response (HTTP ${response.status})`, response.status);
  }

  if (!response.ok || !json.success) {
    // Retry on 5xx server errors
    if (response.status >= 500 && retryCount < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, 1000 * (retryCount + 1)));
      return request<T>(method, path, body, params, customHeaders, retryCount + 1);
    }
    throw new ApiError(
      json.message || 'Request failed',
      response.status,
      json.errors,
    );
  }

  return json.data as T;
}

/**
 * HTTP method helpers
 */

export async function get<T = any>(
  path: string,
  params?: Record<string, string | number | undefined | null>,
): Promise<T> {
  return request<T>('GET', path, undefined, params);
}

export async function post<T = any>(
  path: string,
  body?: any,
  params?: Record<string, string | number | undefined | null>,
): Promise<T> {
  return request<T>('POST', path, body, params);
}

export async function put<T = any>(
  path: string,
  body?: any,
): Promise<T> {
  return request<T>('PUT', path, body);
}

export async function del<T = any>(
  path: string,
  body?: any,
): Promise<T> {
  return request<T>('DELETE', path, body);
}

export async function upload<T = any>(
  path: string,
  formData: FormData,
): Promise<T> {
  return request<T>('POST', path, formData, undefined, {});
}
