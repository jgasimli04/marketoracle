---
title: ProductFeedCreatePayload - GraphQL Admin
description: Return type for `productFeedCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductFeedCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductFeedCreatePayload.md
---

# Product​Feed​Create​Payload

payload

Return type for `productFeedCreate` mutation.

## Fields

* product​Feed

  [Product​Feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed)

  The newly created product feed.

* user​Errors

  [\[Product​Feed​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFeedCreate)

  mutation

  Creates a product feed for a specific publication.

  * input

    [Product​Feed​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductFeedInput)

    ### Arguments

    The properties of the new product feed.

  ***

***

## Map

### Mutations with this payload

* [product​Feed​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/productFeedCreate)
