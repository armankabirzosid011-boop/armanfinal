<?php
/**
 * Standard JSON Response Class
 * ----------------------------
 * Every endpoint MUST terminate via Response::ok() or Response::error().
 * Never echo raw JSON, never print_r(), never die()/exit() directly.
 */

if (!class_exists('Response', false)) {
    class Response
    {
        private static bool $sent = false;

        /**
         * Backward-compatible raw JSON send. Used by legacy jsonResponse().
         */
        public static function sendJson(mixed $data, int $statusCode = 200): void
        {
            self::send($statusCode, is_array($data) ? $data : ['data' => $data]);
        }

        /**
         * Send a JSON response and (by default) stop further execution.
         *
         * @param int $statusCode HTTP status code.
         * @param array $body Full response envelope.
         */
        private static function send(int $statusCode, array $body, bool $terminate = true): void
        {
            if (self::$sent) {
                return; // Prevent double-send within a single request cycle.
            }

            header_remove();
            http_response_code($statusCode);
            header('Content-Type: application/json; charset=utf-8');
            header('X-Content-Type-Options: nosniff');

            // CORS
            header('Access-Control-Allow-Origin: ' . ($_SERVER['HTTP_ORIGIN'] ?? '*'));
            header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Session-Token, X-CSRF-Token');
            header('Access-Control-Allow-Credentials: true');

            $json = json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            echo $json ?: '{}';
            self::$sent = true;

            if ($terminate) {
                exit;
            }
        }

        /**
         * Success response.
         */
        public static function ok(mixed $data = null, string $message = 'Success', int $statusCode = 200): void
        {
            self::send($statusCode, [
                'success' => true,
                'message' => $message,
                'data' => $data,
                'timestamp' => date('c'),
            ]);
        }

        /**
         * Error response.
         */
        public static function error(string $message, int $statusCode = 400, mixed $errors = null): void
        {
            $body = [
                'success' => false,
                'message' => $message,
                'timestamp' => date('c'),
                'error_code' => self::codeFor($statusCode),
            ];

            if ($errors !== null) {
                $body['errors'] = $errors;
            }

            self::send($statusCode, $body);
        }

        /**
         * Human-readable code based on status.
         */
        private static function codeFor(int $status): string
        {
            return match ($status) {
                400 => 'bad_request',
                401 => 'unauthorized',
                403 => 'forbidden',
                404 => 'not_found',
                405 => 'method_not_allowed',
                409 => 'conflict',
                422 => 'validation_error',
                429 => 'rate_limited',
                500 => 'internal_error',
                default => 'error',
            };
        }
    }
}