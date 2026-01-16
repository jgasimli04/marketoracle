---
title: ProductVariantInventoryPolicy - GraphQL Admin
description: >-
  The valid values for the inventory policy of a product variant once it is out
  of stock.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantInventoryPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantInventoryPolicy.md
---

# Product​Variant​Inventory​Policy

enum

The valid values for the inventory policy of a product variant once it is out of stock.

## Valid values

* CONTINUE

  Customers can buy this product variant after it's out of stock.

* DENY

  Customers can't buy this product variant after it's out of stock.

***

## Fields

* [Product​Variant.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryPolicy)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

* [Product​Variant​Set​Input.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-inventoryPolicy)

  INPUT OBJECT

  The input fields for specifying a product variant to create or update.

* [Product​Variants​Bulk​Input.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-inventoryPolicy)

  INPUT OBJECT

  The input fields for specifying a product variant to create as part of a variant bulk mutation.

***

## Map

### Fields with this enum

* <-|[Product​Variant.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.inventoryPolicy)

### Inputs with this enum

* [Product​Variant​Set​Input.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-inventoryPolicy)
* [Product​Variants​Bulk​Input.inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-inventoryPolicy)
