---
title: ProductVariantsBulkDeletePayload - GraphQL Admin
description: Return type for `productVariantsBulkDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantsBulkDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantsBulkDeletePayload.md
---

# Product​Variants​Bulk​Delete​Payload

payload

Return type for `productVariantsBulkDelete` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[Product​Variants​Bulk​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Variants​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  mutation

  Deletes multiple variants in a single [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Specify the product ID and an array of variant IDs to remove variants in bulk. You can call this mutation directly or through the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) mutation. Returns the updated product and any [`UserError`](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError) objects.

  * variants​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    An array of product variants IDs to delete.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product with the variants to update.

  ***

***

## Map

### Mutations with this payload

* [product​Variants​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantsBulkDelete)
