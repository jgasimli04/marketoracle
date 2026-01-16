---
title: ProductVariantsBulkInput - GraphQL Admin
description: >-
  The input fields for specifying a product variant to create as part of a
  variant bulk mutation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput.md
---

# Product​Variants​Bulk​Input

input\_object

The input fields for specifying a product variant to create as part of a variant bulk mutation.

## Fields

* barcode

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The value of the barcode associated with the product variant.

* compare​At​Price

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The compare-at price of the variant.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Specifies the product variant to update or delete.

* inventory​Item

  [Inventory​Item​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput)

  The inventory item associated with the variant, used for unit cost.

* inventory​Policy

  [Product​Variant​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantInventoryPolicy)

  Whether customers are allowed to place an order for the variant when it's out of stock. Defaults to `DENY`.

* inventory​Quantities

  [\[Inventory​Level​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryLevelInput)

  The inventory quantities at each location where the variant is stocked. The number of elements in the array of inventory quantities can't exceed the amount specified for the plan. Supported as input with the `productVariantsBulkCreate` mutation only.

* media​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the media that's associated with the variant.

* media​Src

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The URL of the media to associate with the variant.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  The additional customizable information about the product variant.

* option​Values

  [\[Variant​Option​Value​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/VariantOptionValueInput)

  The custom properties that a shop owner uses to define product variants.

* price

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The price of the variant.

* quantity​Adjustments

  [\[Inventory​Adjustment​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustmentInput)

  Adjust inventory quantities with deltas.

* requires​Components

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether a product variant requires components. The default value is `false`. If `true`, then the product variant can only be purchased as a parent bundle with components and it will be omitted from channels that don't support bundles.

* show​Unit​Price

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the unit price should be shown for this product variant.

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

## Map

No referencing types
