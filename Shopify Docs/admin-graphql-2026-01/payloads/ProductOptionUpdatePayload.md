---
title: ProductOptionUpdatePayload - GraphQL Admin
description: Return type for `productOptionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductOptionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductOptionUpdatePayload.md
---

# Product​Option​Update​Payload

payload

Return type for `productOptionUpdate` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product with which the option being updated is associated.

* user​Errors

  [\[Product​Option​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Option​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)

  mutation

  Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

  Use the `productOptionUpdate` mutation for the following use cases:

  * **Update product choices**: Modify an existing option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), so customers can select their preferred variant.
  * **Enable personalization features**: Update an option (for example, "Engraving text") to let customers customize their purchase.
  * **Offer seasonal or limited edition products**: Update a value (for example, "Holiday red") on an existing option to support limited-time or seasonal variants.
  * **Integrate with apps that manage product configuration**: Allow third-party apps to update options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
  * **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

  ***

  Note

  The `productOptionUpdate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

  ***

  After you update a product option, you can further manage a product's configuration using related mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * option

    [Option​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionUpdateInput)

    required

    ### Arguments

    Option to update.

  * product​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the Product the Option belongs to.

  * option​Values​To​Add

    [\[Option​Value​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueCreateInput)

    New option values to create.

  * option​Values​To​Update

    [\[Option​Value​Update​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OptionValueUpdateInput)

    Existing option values to update.

  * option​Values​To​Delete

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    IDs of the existing option values to delete.

  * variant​Strategy

    [Product​Option​Update​Variant​Strategy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateVariantStrategy)

    The strategy defines which behavior the mutation should observe regarding variants, such as creating variants or deleting them in response to option values to add or to delete. If not provided or set to null, the strategy `LEAVE_AS_IS` will be used.

  ***

***

## Map

### Mutations with this payload

* [product​Option​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/productOptionUpdate)
