---
title: ProductVariantsBulkReorderPayload - GraphQL Admin
description: Return type for `productVariantsBulkReorder` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantsBulkReorderPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantsBulkReorderPayload.md
---

# Product​Variants​Bulk​Reorder​Payload

payload

Return type for `productVariantsBulkReorder` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product.

* user​Errors

  [\[Product​Variants​Bulk​Reorder​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkReorderUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Variants​Bulk​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkReorder)

  mutation

  Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The product ID of the variants to be reordered.

  * positions

    [\[Product​Variant​Position​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantPositionInput)

    required

    An array of variant positions.

  ***

***

## Map

### Mutations with this payload

* [product​Variants​Bulk​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantsBulkReorder)
