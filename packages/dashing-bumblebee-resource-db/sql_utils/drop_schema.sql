-- Drop tables from Public Schema
DROP TABLE IF EXISTS public.user_view CASCADE;
DROP TABLE IF EXISTS public.user_persisted_config_view CASCADE;
DROP TABLE IF EXISTS public.resource_collection_view CASCADE;
DROP TABLE IF EXISTS public.resource_transaction_view CASCADE;

-- Drop tables from Public User Schema
DROP TABLE IF EXISTS public_user_schema.user_public CASCADE;
DROP TABLE IF EXISTS public_user_schema.public_resource_collection CASCADE;
DROP TABLE IF EXISTS public_user_schema.user_persisted_config CASCADE;

-- Drop tables from Private User Schema
DROP TABLE IF EXISTS private_user_schema.user_private CASCADE;
DROP TABLE IF EXISTS private_user_schema.user_identity CASCADE;

-- Drop tables from Resource Schema (previously named resource Schema)
DROP TABLE IF EXISTS resource_schema.resource CASCADE;
DROP TABLE IF EXISTS resource_schema.resource_collection CASCADE;
DROP TABLE IF EXISTS resource_schema.resource_label CASCADE;
DROP TABLE IF EXISTS resource_schema.resource_label_type CASCADE;

-- Drop schemas if they are empty

-- TODO: validate: DROP SCHEMA IF EXISTS public CASCADE;
DROP SCHEMA IF EXISTS public_user_schema CASCADE;
DROP SCHEMA IF EXISTS private_user_schema CASCADE;
DROP SCHEMA IF EXISTS resource_schema CASCADE;
