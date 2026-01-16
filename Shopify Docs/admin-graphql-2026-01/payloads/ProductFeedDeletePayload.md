---
title: ProductFeedDeletePayload - GraphQL Admin
description: Return type for `productFeedDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductFeedDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductFeedDeletePayload.md
---

# Product​Feed​Delete​Payload

payload

Return type for `productFeedDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product feed that was deleted.

* user​Errors

  [\[Product​Feed​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Feed​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedDelete)

  mutation

  Deletes a product feed for a specific publication.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product feed to be deleted.

  ***

***

## Map

### Mutations with this payload

* [product​Feed​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/productFeedDelete)
