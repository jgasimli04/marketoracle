---
title: ProductUnpublishPayload - GraphQL Admin
description: Return type for `productUnpublish` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductUnpublishPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductUnpublishPayload.md
---

# Product​Unpublish​Payload

payload

Return type for `productUnpublish` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product that has been unpublished.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUnpublish)

  mutation

  Deprecated

  * input

    [Product​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUnpublishInput)

    required

    ### Arguments

    Specifies the product to unpublish and the channel to unpublish it from.

  ***

***

## Map
