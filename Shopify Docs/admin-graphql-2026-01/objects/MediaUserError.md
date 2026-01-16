---
title: MediaUserError - GraphQL Admin
description: >-
  Represents an error that happens during execution of a Media query or
  mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError.md'
---

# Media​User​Error

object

Represents an error that happens during execution of a Media query or mutation.

## Fields

* code

  [Media​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

* [product​Variant​Append​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)

  mutation

  Appends existing media from a product to specific variants of that product, creating associations between media files and particular product options. This allows different variants to showcase relevant images or videos.

  For example, a t-shirt product might have color variants where each color variant displays only the images showing that specific color, helping customers see exactly what they're purchasing.

  Use `ProductVariantAppendMedia` to:

  * Associate specific images with product variants for accurate display
  * Build variant-specific media management in product interfaces
  * Implement automated media assignment based on variant attributes

  The operation links existing product media to variants without duplicating files, maintaining efficient media storage while enabling variant-specific displays.

  Learn more about [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product associated to the media.

  * variant​Media

    [\[Product​Variant​Append​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantAppendMediaInput)

    required

    A list of pairs of variants and media to be attached to the variants.

  ***

* [product​Variant​Detach​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)

  mutation

  Detaches media from product variants.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the product to which the variants and media are associated.

  * variant​Media

    [\[Product​Variant​Detach​Media​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantDetachMediaInput)

    required

    A list of pairs of variants and media to be deleted from the variants.

  ***

### Deprecated mutations

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

## <\~> MediaUserError Mutations

### Mutated by

* <\~>[product​Reorder​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia)
* <\~>[product​Variant​Append​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantAppendMedia)
* <\~>[product​Variant​Detach​Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantDetachMedia)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MediaUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
