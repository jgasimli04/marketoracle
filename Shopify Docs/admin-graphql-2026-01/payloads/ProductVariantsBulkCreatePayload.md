---
title: ProductVariantsBulkCreatePayload - GraphQL Admin
description: Return type for `productVariantsBulkCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantsBulkCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductVariantsBulkCreatePayload.md
---

# Product​Variants​Bulk​Create​Payload

payload

Return type for `productVariantsBulkCreate` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* product​Variants

  [\[Product​Variant!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The newly created variants.

* user​Errors

  [\[Product​Variants​Bulk​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Variants​Bulk​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)

  mutation

  Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

  Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes, colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk, such as importing from an external system.

  The mutation supports:

  * Creating variants with custom option values
  * Associating media (for example, images, videos, and 3D models) with the product or its variants
  * Handling complex product configurations

  ***

  Note

  By default, stores have a limit of 2048 product variants for each product.

  ***

  After creating variants, you can make additional changes using one of the following mutations:

  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate): Updates multiple product variants for a single product in one operation.
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

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

    An array of product variants to be created.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the product on which to create the variants.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  * strategy

    [Product​Variants​Bulk​Create​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateStrategy)

    Default:DEFAULT

    The strategy defines which behavior the mutation should observe, such as whether to keep or delete the standalone variant (when product has only a single or default variant) when creating new variants in bulk.

  ***

***

## Map

### Mutations with this payload

* [product​Variants​Bulk​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/productVariantsBulkCreate)
