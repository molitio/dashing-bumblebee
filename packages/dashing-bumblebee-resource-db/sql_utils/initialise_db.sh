#!/bin/bash

# Source the .env file
source ../../../.env

# Connect to PostgreSQL using environment variables and execute the renaming SQL commands
# psql -h $PG_DATABASE_ENDPOINT -U $PG_DATABASE_USER -d $PG_DATABASE_NAME -W $PG_DATABASE_SECRET -a -f /initialise_db.sql

PGPASSWORD=$POSTGRES_PASSWORD psql -h $PG_DATABASE_ENDPOINT -U $PG_DATABASE_USER -d $PG_DATABASE_NAME -a -f /initialise_db.sql
