---
title: CatalogDeletePayload - GraphQL Admin
description: Return type for `catalogDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CatalogDeletePayload.md
---

# Catalog​Delete​Payload

payload

Return type for `catalogDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted catalog.

* user​Errors

  [\[Catalog​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [catalog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogDelete)

  mutation

  Delete a catalog.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the catalog to delete.

  * delete​Dependent​Resources

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to also delete the price list and the publication owned by the catalog.

  ***

***

## Map

### Mutations with this payload

* [catalog​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/catalogDelete)
