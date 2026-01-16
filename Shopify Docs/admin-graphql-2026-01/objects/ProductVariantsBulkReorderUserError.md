---
title: ProductVariantsBulkReorderUserError - GraphQL Admin
description: Error codes for failed bulk product variants reorder operation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkReorderUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkReorderUserError.md
---

# Product​Variants​Bulk​Reorder​User​Error

object

Requires `read_products` access scope.

Error codes for failed bulk product variants reorder operation.

## Fields

* code

  [Product​Variants​Bulk​Reorder​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkReorderUserErrorCode)

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

## <\~> ProductVariantsBulkReorderUserError Mutations

### Mutated by

* <\~>[product​Variants​Bulk​Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkReorder)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductVariantsBulkReorderUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
