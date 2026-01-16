---
title: ProductCreateMediaPayload - GraphQL Admin
description: Return type for `productCreateMedia` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductCreateMediaPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductCreateMediaPayload.md
---

# Product​Create​Media​Payload

payload

Return type for `productCreateMedia` mutation.

## Fields

* media

  [\[Media!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

  The newly created media.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the media.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

## Mutations with this payload

* [product​Create​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreateMedia)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product associated with the media.

  * media

    [\[Create​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    required

    List of new media to be added to a product.

  ***

***

## Map
