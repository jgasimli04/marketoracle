---
title: ProductUpdateMediaPayload - GraphQL Admin
description: Return type for `productUpdateMedia` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductUpdateMediaPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductUpdateMediaPayload.md
---

# Product​Update​Media​Payload

payload

Return type for `productUpdateMedia` mutation.

## Fields

* media

  [\[Media!\]](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

  The updated media object.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product on which media was updated.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

## Mutations with this payload

* [product​Update​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdateMedia)

  mutation

  Deprecated

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product on which media will be updated.

  * media

    [\[Update​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UpdateMediaInput)

    required

    A list of media updates.

  ***

***

## Map
