#!/bin/bash

# Source the .env file
 source ./scripts/.env

# Connect to PostgreSQL using environment variables and execute the renaming SQL commands
PGPASSWORD=$POSTGRES_PASSWORD psql -h $PG_DATABASE_ENDPOINT -U $PG_DATABASE_USER -d $PG_DATABASE_NAME -a -f /initialise_db.sql
