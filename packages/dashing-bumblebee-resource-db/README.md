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



