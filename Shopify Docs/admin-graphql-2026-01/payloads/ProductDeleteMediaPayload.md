---
title: ProductDeleteMediaPayload - GraphQL Admin
description: Return type for `productDeleteMedia` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductDeleteMediaPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductDeleteMediaPayload.md
---

# Product​Delete​Media​Payload

payload

Return type for `productDeleteMedia` mutation.

## Fields

* deleted​Media​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  List of media IDs which were deleted.

* deleted​Product​Image​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  List of product image IDs which were deleted.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the deleted media.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

## Mutations with this payload

* [product​Delete​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDeleteMedia)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product ID from which the media will be deleted.

  * media​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The media IDs to be deleted.

  ***

***

## Map
