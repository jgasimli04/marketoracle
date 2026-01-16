---
title: ProductChangeStatusPayload - GraphQL Admin
description: Return type for `productChangeStatus` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductChangeStatusPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductChangeStatusPayload.md
---

# Product​Change​Status​Payload

payload

Return type for `productChangeStatus` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* user​Errors

  [\[Product​Change​Status​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductChangeStatusUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Change​Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productChangeStatus)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product.

  * status

    [Product​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus)

    required

    The status to be assigned to the product.

  ***

***

## Map
