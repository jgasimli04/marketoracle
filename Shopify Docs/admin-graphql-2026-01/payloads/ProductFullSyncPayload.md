---
title: ProductFullSyncPayload - GraphQL Admin
description: Return type for `productFullSync` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductFullSyncPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductFullSyncPayload.md
---

# Product​Full​Sync​Payload

payload

Return type for `productFullSync` mutation.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID for the full sync operation.

* user​Errors

  [\[Product​Full​Sync​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFullSyncUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync)

  mutation

  Runs the full product sync for a given shop.

  * before​Updated​At

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    ### Arguments

    Syncs only products that haven't changed since the specified timestamp.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The product feed which needs syncing.

  * updated​At​Since

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    Syncs only products that have changed since the specified timestamp.

  ***

***

## Map

### Mutations with this payload

* [product​Full​Sync](https://shopify.dev/docs/api/admin-graphql/latest/types/productFullSync)
