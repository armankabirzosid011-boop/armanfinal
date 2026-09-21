/**
 * PHP API Client — DEPRECATED
 *
 * This file is kept only for backward compatibility with hybridStorage.ts.
 * All new code should import from './apiClient' instead.
 *
 * The apiClient.ts uses PHP session cookies for authentication
 * (credentials: 'same-origin') and does NOT store tokens in localStorage.
 *
 * Migration: Replace all imports from './api' with './apiClient'.
 */
import { get, post, put, del, upload, ApiError } from './apiClient';

export type { ApiResponse, PaginatedData } from './apiClient';
export { ApiError };

export { get, post, put, del, upload };
