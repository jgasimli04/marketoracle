---
title: InventoryLevelInput - GraphQL Admin
description: The input fields for an inventory level.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryLevelInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryLevelInput.md
---

# Inventory​Level​Input

input\_object

The input fields for an inventory level.

## Fields

* available​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The available quantity of an inventory item at a location.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of a location associated with the inventory level.

***

## Input objects using this input

* [Product​Variants​Bulk​Input.inventoryQuantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-inventoryQuantities)

  INPUT OBJECT

  The input fields for specifying a product variant to create as part of a variant bulk mutation.

***

## Map

### Input objects using this input

* [Product​Variants​Bulk​Input.inventoryQuantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-inventoryQuantities)
