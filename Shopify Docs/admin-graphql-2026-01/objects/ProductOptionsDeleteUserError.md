---
title: ProductOptionsDeleteUserError - GraphQL Admin
description: Error codes for failed `ProductOptionsDelete` mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError.md
---

# Product​Options​Delete​User​Error

object

Requires `read_products` access scope.

Error codes for failed `ProductOptionsDelete` mutation.

## Fields

* code

  [Product​Options​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsDeleteUserErrorCode)

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

* [product​Options​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  mutation

  Deletes one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) from a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Product options define the choices available for a product, such as size, color, or material.

  ***

  Caution

  Removing an option can affect a product's [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and their configuration. Deleting an option might also delete associated option values and, depending on the chosen [strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-strategy), might affect variants.

  ***

  Use the `productOptionsDelete` mutation for the following use cases:

  * **Simplify product configuration**: Remove obsolete or unnecessary options (for example, discontinue "Material" if all variants are now the same material).
  * **Clean up after seasonal or limited-time offerings**: Delete options that are no longer relevant (for example, "Holiday edition").
  * **Automate catalog management**: Enable apps or integrations to programmatically remove options as product data changes.

  ***

  Note

  The `productOptionsDelete` mutation enforces strict data integrity for product options and variants. All option positions must remain sequential, and every remaining option must be used by at least one variant.

  ***

  After you delete a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the product from which to delete the options.

  * options

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    IDs of the options to delete from the product.

  * strategy

    [Product​Option​Delete​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionDeleteStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe,such as how to handle a situation where deleting an option would result in duplicate variants.

  ***

***

## <\~> ProductOptionsDeleteUserError Mutations

### Mutated by

* <\~>[product​Options​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductOptionsDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
