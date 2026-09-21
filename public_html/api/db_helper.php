<?php
/**
 * DB Helper Facade
 * ----------------
 * Convenience wrapper over the existing Database singleton.
 *
 * Provides:
 *   DB::fetchOne()      -> single row (or null)
 *   DB::fetchAll()      -> multiple rows
 *   DB::execute()       -> run a non-SELECT statement (returns affected rows)
 *   DB::insertId()      -> last insert id
 *   DB::beginTransaction/commit/rollback
 *   Database::getInstance() for direct access when needed.
 */

require_once __DIR__ . '/database.php';

if (!class_exists('DB', false)) {
    class DB
    {
        /**
         * Get the underlying PDO connection.
         */
        public static function pdo(): PDO
        {
            return Database::getInstance();
        }

        /**
         * Execute a prepared statement and fetch a single row (or null).
         *
         * @param string $sql SQL with named or positional placeholders.
         * @param array $params Parameters to bind.
         * @return array|null
         */
        public static function fetchOne(string $sql, array $params = []): ?array
        {
            $stmt = self::pdo()->prepare($sql);
            $stmt->execute($params);
            $row = $stmt->fetch();
            return $row === false ? null : $row;
        }

        /**
         * Execute a prepared statement and fetch all rows.
         */
        public static function fetchAll(string $sql, array $params = []): array
        {
            $stmt = self::pdo()->prepare($sql);
            $stmt->execute($params);
            return $stmt->fetchAll() ?: [];
        }

        /**
         * Execute a write statement (INSERT/UPDATE/DELETE).
         * Returns the number of affected rows.
         */
        public static function execute(string $sql, array $params = []): int
        {
            $stmt = self::pdo()->prepare($sql);
            $stmt->execute($params);
            return $stmt->rowCount();
        }

        /**
         * Fetch a single scalar value from a row.
         */
        public static function fetchValue(string $sql, array $params = []): mixed
        {
            $stmt = self::pdo()->prepare($sql);
            $stmt->execute($params);
            $value = $stmt->fetchColumn();
            return $value === false ? null : $value;
        }

        /**
         * Get the last inserted ID.
         */
        public static function lastInsertId(): string
        {
            return self::pdo()->lastInsertId();
        }

        /**
         * Transaction helpers.
         */
        public static function beginTransaction(): void
        {
            self::pdo()->beginTransaction();
        }

        public static function commit(): void
        {
            self::pdo()->commit();
        }

        public static function rollback(): void
        {
            $pdo = self::pdo();
            if ($pdo->inTransaction()) {
                $pdo->rollBack();
            }
        }

        public static function inTransaction(): bool
        {
            return self::pdo()->inTransaction();
        }
    }
}