---
title: ProductPublishPayload - GraphQL Admin
description: Return type for `productPublish` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductPublishPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductPublishPayload.md
---

# Product​Publish​Payload

payload

Return type for `productPublish` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product that has been published.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The user's shop.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product​Publications

  [\[Product​Publication!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication)

  Deprecated

***

## Mutations with this payload

* [product​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productPublish)

  mutation

  Deprecated

  * input

    [Product​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductPublishInput)

    required

    ### Arguments

    Specifies the product to publish and the channels to publish it to.

  ***

***

## Map
