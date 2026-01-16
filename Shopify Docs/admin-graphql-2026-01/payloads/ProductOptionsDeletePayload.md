---
title: ProductOptionsDeletePayload - GraphQL Admin
description: Return type for `productOptionsDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductOptionsDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductOptionsDeletePayload.md
---

# Product​Options​Delete​Payload

payload

Return type for `productOptionsDelete` mutation.

## Fields

* deleted​Options​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  IDs of the options deleted.

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[Product​Options​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [product​Options​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/productOptionsDelete)
