-- disconnect from the database to be renamed
-- \c "postgres"

-- Terminate all existing connections to the 'default' database.
-- SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'default';

-- Rename the database.
-- ALTER DATABASE "default" RENAME TO "resource-db";

-- \c "resource-db"