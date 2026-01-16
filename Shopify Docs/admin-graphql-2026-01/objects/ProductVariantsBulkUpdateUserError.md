---
title: ProductVariantsBulkUpdateUserError - GraphQL Admin
description: Error codes for failed variant bulk update mutations.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkUpdateUserError.md
---

# Product​Variants​Bulk​Update​User​Error

object

Requires `read_products` access scope.

Error codes for failed variant bulk update mutations.

## Fields

* code

  [Product​Variants​Bulk​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkUpdateUserErrorCode)

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

* [product​Variants​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)

  mutation

  Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes, colors, or materials—associated with an existing product. The mutation is helpful if you need to update a product's variants in bulk, such as importing from an external system.

  The mutation supports:

  * Updating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  Note

  By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using the [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation, which is used to perform multiple operations on products, such as creating or modifying product options and variants.

  You can also specifically manage product options through related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * variants

    [\[Product​Variants​Bulk​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput)

    required

    ### Arguments

    An array of product variants to update.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product associated with the variants to update.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * allow​Partial​Updates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    When partial updates are allowed, valid variant changes may be persisted even if some of the variants updated have invalid data and cannot be persisted. When partial updates are not allowed, any error will prevent all variants from updating.

  ***

***

## <\~> ProductVariantsBulkUpdateUserError Mutations

### Mutated by

* <\~>[product​Variants​Bulk​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductVariantsBulkUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
