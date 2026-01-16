---
title: ProductVariantSetInput - GraphQL Admin
description: The input fields for specifying a product variant to create or update.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput.md
---

# Product​Variant​Set​Input

input\_object

The input fields for specifying a product variant to create or update.

## Fields

* barcode

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The value of the barcode associated with the product.

* compare​At​Price

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The compare-at price of the variant.

* file

  [File​Set​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FileSetInput)

  The file to associate with the variant.

  Complexity cost: 0.6 per variant file.

  Any file specified here must also be specified in the `files` input for the product.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Specifies the product variant to update or create a new variant if absent.

* inventory​Item

  [Inventory​Item​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

  The inventory item associated with the variant, used for unit cost.

* inventory​Policy

  [Product​Variant​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantInventoryPolicy)

  Whether customers are allowed to place an order for the product variant when it's out of stock. Defaults to `DENY`.

* inventory​Quantities

  [\[Product​Set​Inventory​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInventoryInput)

  The inventory quantities at each location where the variant is stocked. If you're updating an existing variant, then you can only update the quantities at locations where the variant is already stocked.

  The total number of inventory quantities across all variants in the mutation can't exceed 50000.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Additional customizable information about the product variant.

  Complexity cost: 0.4 per variant metafield.

* option​Values

  [\[Variant​Option​Value​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/VariantOptionValueInput)

  required

  The custom properties that a shop owner uses to define product variants.

* position

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The order of the product variant in the list of product variants. The first position in the list is 1.

* price

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The price of the variant.

* requires​Components

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether a product variant requires components. The default value is `false`. If `true`, then the product variant can only be purchased as a parent bundle with components and it will be omitted from channels that don't support bundles.

* show​Unit​Price

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not unit price should be shown for this product variant.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The SKU for the variant. Case-sensitive string.

* taxable

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the variant is taxable.

* tax​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The tax code associated with the variant.

* unit​Price​Measurement

  [Unit​Price​Measurement​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput)

  The unit price measurement for the product variant.

***

## Input objects using this input

* [Product​Set​Input.variants](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-variants)

  INPUT OBJECT

  The input fields required to create or update a product via ProductSet mutation.

***

## Map

### Input objects using this input

* [Product​Set​Input.variants](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-variants)
