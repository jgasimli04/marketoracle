---
title: ProductOptionsCreateUserError - GraphQL Admin
description: Error codes for failed `ProductOptionsCreate` mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsCreateUserError.md
---

# Product​Options​Create​User​Error

object

Requires `read_products` access scope.

Error codes for failed `ProductOptionsCreate` mutation.

## Fields

* code

  [Product​Options​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsCreateUserErrorCode)

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

* [product​Options​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)

  mutation

  Creates one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionsCreate` mutation for the following use cases:

  * **Add product choices**: Add a new option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), to an existing product so customers can select their preferred variant.
  * **Enable personalization features**: Add options such as "Engraving text" to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Add a new value (for example, "Holiday red") to an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to add options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  Note

  The `productOptionsCreate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant. If you use the [`CREATE` variant strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy.enums.CREATE), consider the maximum allowed number of variants for each product is 2048.

  ***

  After you create product options, you can further manage a product's configuration using related mutations:

  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the product to update.

  * options

    [\[Option​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionCreateInput)

    required

    Options to add to the product.

  * variant​Strategy

    [Product​Option​Create​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionCreateVariantStrategy)

    Default:LEAVE\_AS\_IS

    The strategy defines which behavior the mutation should observe regarding variants. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

***

## <\~> ProductOptionsCreateUserError Mutations

### Mutated by

* <\~>[product​Options​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-ProductOptionsCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
