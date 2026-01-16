---
title: ProductVariantDetachMediaPayload - GraphQL Admin
description: Return type for `productVariantDetachMedia` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantDetachMediaPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantDetachMediaPayload.md
---

# Product​Variant​Detach​Media​Payload

payload

Return type for `productVariantDetachMedia` mutation.

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

***

## Map

### Mutations with this payload

* [product​Variant​Detach​Media](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantDetachMedia)
