# Dashing Bumblebee Resource Infrastructure

This API is using Hashura and GraphQL as Object Relation Mapping tool.
The configuration is built with Helm

### [Setting up and deploy Hasura GraphQL Engine on Kubernetes with Helm Chart](https://hasura.io/docs/latest/deployment/deployment-guides/kubernetes-helm/)

## Setup in local dev

### Environment

In the hasura folder a .env file should be created that is needed for hasura console

example hasura/.env

    HASURA_GRAPHQL_ADMIN_SECRET=eightstartpassword 

## Hasura

Initial migration created with

    hasura migrate create "init" --from-server --schema resource_db_schema

### Migrations

Schema rename in PG

```
DO LANGUAGE plpgsql
$body$
DECLARE
l_old_schema NAME = 'old_schema';
l_new_schema NAME = 'new_schema';
l_sql TEXT;
BEGIN
FOR l_sql IN
SELECT
format('ALTER TABLE %I.%I SET SCHEMA %I', n.nspname, c.relname, l_new_schema)
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE
n.nspname = l_old_schema AND
c.relkind = 'r'
LOOP
RAISE NOTICE 'appliying %', l_sql;
EXECUTE l_sql;
END LOOP;
END;
$body$;
```
