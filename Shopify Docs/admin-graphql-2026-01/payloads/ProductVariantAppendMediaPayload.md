---
title: ProductVariantAppendMediaPayload - GraphQL Admin
description: Return type for `productVariantAppendMedia` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantAppendMediaPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantAppendMediaPayload.md
---

# Product​Variant​Append​Media​Payload

payload

Return type for `productVariantAppendMedia` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product associated with the variants and media.

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variants that were updated.

* user​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

***

## Map

### Mutations with this payload

* [product​Variant​Append​Media](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantAppendMedia)
