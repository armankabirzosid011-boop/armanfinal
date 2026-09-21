<?php
/**
 * Database Connection Singleton
 * 
 * Provides a single PDO connection instance per request.
 * Uses prepared statements to prevent SQL injection.
 */

require_once __DIR__ . '/../config.php';

class Database {
    private static ?PDO $instance = null;
    private static array $config = [];

    /**
     * Load database configuration from environment or config file
     */
    private static function loadConfig(): void {
        if (!empty(self::$config)) return;

        // Try environment variables first (more secure)
        $host = getenv('DB_HOST') ?: DB_HOST;
        $name = getenv('DB_NAME') ?: DB_NAME;
        $user = getenv('DB_USER') ?: DB_USER;
        $pass = getenv('DB_PASS') ?: DB_PASS;

        // Fall back to config file
        self::$config = [
            'host' => $host,
            'name' => $name,
            'user' => $user,
            'pass' => $pass,
            'charset' => DB_CHARSET,
        ];
    }

    /**
     * Get PDO connection instance
     */
    public static function getInstance(): PDO {
        if (self::$instance === null) {
            self::loadConfig();
            
            $dsn = sprintf(
                'mysql:host=%s;dbname=%s;charset=%s',
                self::$config['host'],
                self::$config['name'],
                self::$config['charset']
            );

            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci",
            ];

            try {
                self::$instance = new PDO(
                    $dsn,
                    self::$config['user'],
                    self::$config['pass'],
                    $options
                );
            } catch (PDOException $e) {
                // Log error but don't expose details to client
                error_log('Database connection failed: ' . $e->getMessage());
                require_once __DIR__ . '/response.php';
                Response::error('Database connection failed', 500);
            }
        }

        return self::$instance;
    }

    /**
     * Test database connection
     */
    public static function testConnection(): array {
        try {
            $db = self::getInstance();
            $db->query('SELECT 1');
            return ['connected' => true, 'message' => 'Database connection successful'];
        } catch (\Exception $e) {
            return ['connected' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Begin transaction
     */
    public static function beginTransaction(): void {
        self::getInstance()->beginTransaction();
    }

    /**
     * Commit transaction
     */
    public static function commit(): void {
        self::getInstance()->commit();
    }

    /**
     * Rollback transaction
     */
    public static function rollback(): void {
        if (self::getInstance()->inTransaction()) {
            self::getInstance()->rollBack();
        }
    }

    /**
     * Close the connection
     */
    public static function close(): void {
        self::$instance = null;
    }
}
