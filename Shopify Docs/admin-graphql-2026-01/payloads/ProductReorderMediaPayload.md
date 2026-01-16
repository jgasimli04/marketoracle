---
title: ProductReorderMediaPayload - GraphQL Admin
description: Return type for `productReorderMedia` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductReorderMediaPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductReorderMediaPayload.md
---

# Product​Reorder​Media​Payload

payload

Return type for `productReorderMedia` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job which reorders the media.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

***

## Mutations with this payload

* [product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia)

  mutation

  Reorders [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) attached to a product, changing their sequence in product displays. The operation processes asynchronously to handle [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with large media collections.

  Specify the [product ID](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-id) and an array of [moves](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-moves), where each move contains a media ID and its new zero-based position.

  ***

  Note

  Only include media items that need repositioning. Unchanged items maintain their relative order automatically.

  ***

  The mutation returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the reordering progress. Poll the job status to determine when the operation completes and media positions update across all sales channels.

  Learn more about [reordering product media](https://shopify.dev/docs/apps/build/online-store/product-media#step-6-reorder-media-objects).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product on which to reorder medias.

  * moves

    [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

    required

    A list of moves to perform which will be evaluated in order.

  ***

***

## Map

### Mutations with this payload

* [product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/types/productReorderMedia)
