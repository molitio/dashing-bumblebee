FROM hasura/graphql-engine:v2.33.0.cli-migrations-v3
CMD graphql-engine \
  --metadata-database-url ${HASURA_GRAPHQL_METADATA_DATABASE_URL} \
  --database-url ${PG_DATABASE_URL} \
  serve \
  --server-port ${HASURA_GRAPHQL_SERVER_PORT} \
  --enable-console
