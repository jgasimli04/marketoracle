---
title: ProductVariantsBulkDeleteUserError - GraphQL Admin
description: Error codes for failed bulk variant delete mutations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkDeleteUserError.md
---

# Product​Variants​Bulk​Delete​User​Error

object

Requires `read_products` access scope.

Error codes for failed bulk variant delete mutations.

## Fields

* code

  [Product​Variants​Bulk​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkDeleteUserErrorCode)

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

## <\~> ProductVariantsBulkDeleteUserError Mutations

### Mutated by

* <\~>[product​Variants​Bulk​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductVariantsBulkDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
