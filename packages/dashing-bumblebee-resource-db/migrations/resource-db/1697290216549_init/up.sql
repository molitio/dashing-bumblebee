SET check_function_bodies = false;
CREATE SCHEMA resource_db_schema;
CREATE FUNCTION resource_db_schema.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE resource_db_schema.resource (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    resource_owner_actual uuid,
    description text
);
COMMENT ON TABLE resource_db_schema.resource IS 'Universal resouce object';
CREATE TABLE resource_db_schema.resource_collection (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    resource_id_collection uuid[],
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE resource_db_schema.resource_collection IS 'Collection of resources ';
CREATE TABLE resource_db_schema.user_private (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name_first text,
    name_last text,
    name_full text,
    email_address text NOT NULL,
    avatar_name text NOT NULL,
    id_public uuid NOT NULL,
    id_resource_collection uuid NOT NULL
);
COMMENT ON TABLE resource_db_schema.user_private IS 'Private user data';
CREATE TABLE resource_db_schema.user_public (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    id_private uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
COMMENT ON TABLE resource_db_schema.user_public IS 'Public user data';
ALTER TABLE ONLY resource_db_schema.resource_collection
    ADD CONSTRAINT resource_collection_pkey PRIMARY KEY (id);
ALTER TABLE ONLY resource_db_schema.resource
    ADD CONSTRAINT resource_pkey PRIMARY KEY (id);
ALTER TABLE ONLY resource_db_schema.resource
    ADD CONSTRAINT resource_resource_owner_actual_key UNIQUE (resource_owner_actual);
ALTER TABLE ONLY resource_db_schema.user_private
    ADD CONSTRAINT user_private_email_address_key UNIQUE (email_address);
ALTER TABLE ONLY resource_db_schema.user_private
    ADD CONSTRAINT user_private_id_public_key UNIQUE (id_public);
ALTER TABLE ONLY resource_db_schema.user_private
    ADD CONSTRAINT user_private_id_resource_collection_key UNIQUE (id_resource_collection);
ALTER TABLE ONLY resource_db_schema.user_private
    ADD CONSTRAINT user_private_pkey PRIMARY KEY (id);
ALTER TABLE ONLY resource_db_schema.user_public
    ADD CONSTRAINT user_public_id_private_key UNIQUE (id_private);
ALTER TABLE ONLY resource_db_schema.user_public
    ADD CONSTRAINT user_public_pkey PRIMARY KEY (id);
CREATE TRIGGER set_resource_db_schema_resource_collection_updated_at BEFORE UPDATE ON resource_db_schema.resource_collection FOR EACH ROW EXECUTE FUNCTION resource_db_schema.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_resource_db_schema_resource_collection_updated_at ON resource_db_schema.resource_collection IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_resource_db_schema_resource_updated_at BEFORE UPDATE ON resource_db_schema.resource FOR EACH ROW EXECUTE FUNCTION resource_db_schema.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_resource_db_schema_resource_updated_at ON resource_db_schema.resource IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_resource_db_schema_user_private_updated_at BEFORE UPDATE ON resource_db_schema.user_private FOR EACH ROW EXECUTE FUNCTION resource_db_schema.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_resource_db_schema_user_private_updated_at ON resource_db_schema.user_private IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_resource_db_schema_user_public_updated_at BEFORE UPDATE ON resource_db_schema.user_public FOR EACH ROW EXECUTE FUNCTION resource_db_schema.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_resource_db_schema_user_public_updated_at ON resource_db_schema.user_public IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY resource_db_schema.resource
    ADD CONSTRAINT resource_resource_owner_actual_fkey FOREIGN KEY (resource_owner_actual) REFERENCES resource_db_schema.user_private(id);
ALTER TABLE ONLY resource_db_schema.user_public
    ADD CONSTRAINT user_public_id_fkey FOREIGN KEY (id) REFERENCES resource_db_schema.user_private(id_public) ON UPDATE CASCADE ON DELETE CASCADE;
