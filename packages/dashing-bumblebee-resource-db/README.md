# Dashing Bumblebee Resource DB

## Setup in local dev

### Environment

In the hasura folder a .env file should be created that is needed for hasura console

example hasura/.env

    HASURA_GRAPHQL_ADMIN_SECRET=eightstartpassword 

## Hasura

Initial migration created with

    hasura migrate create "init" --from-server --schema resource_db_schema

### Migrations

