---
title: InventoryAdjustmentInput - GraphQL Admin
description: >-
  The input fields required to adjust the available quantity of a product
  variant at a location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustmentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryAdjustmentInput.md
---

# Inventory​Adjustment​Input

input\_object

The input fields required to adjust the available quantity of a product variant at a location.

## Fields

* adjustment

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The adjustment of the available quantity at the location. If the value is `null`, then the product variant is no longer stocked at the location.

* change​From​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The quantity to compare against before applying the delta.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the location where the available quantity should be adjusted.

***

## Input objects using this input

* [Product​Variants​Bulk​Input.quantityAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-quantityAdjustments)

  INPUT OBJECT

  The input fields for specifying a product variant to create as part of a variant bulk mutation.

***

## Map

### Input objects using this input

* [Product​Variants​Bulk​Input.quantityAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-quantityAdjustments)
