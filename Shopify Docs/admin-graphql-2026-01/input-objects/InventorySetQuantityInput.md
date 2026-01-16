---
title: InventorySetQuantityInput - GraphQL Admin
description: >-
  The input fields for the quantity to be set for an inventory item at a
  location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantityInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantityInput.md
---

# Inventory​Set​Quantity​Input

input\_object

The input fields for the quantity to be set for an inventory item at a location.

## Fields

* change​From​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The current quantity to be compared against the persisted quantity. For more information, refer to the [Compare and Swap documentation](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#compare-and-swap).

* inventory​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  Specifies the inventory item to which the quantity will be set.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  Specifies the location at which the quantity will be set.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity to which the inventory quantity will be set.

***

## Input objects using this input

* [Inventory​Set​On​Hand​Quantities​Input.setQuantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput#fields-setQuantities)

  INPUT OBJECT

  The input fields required to set inventory on hand quantities.

***

## Map

### Input objects using this input

* [Inventory​Set​On​Hand​Quantities​Input.setQuantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput#fields-setQuantities)
