---
title: InventoryQuantityInput - GraphQL Admin
description: >-
  The input fields for the quantity to be set for an inventory item at a
  location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryQuantityInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryQuantityInput.md
---

# Inventory​Quantity​Input

input\_object

The input fields for the quantity to be set for an inventory item at a location.

## Fields

* change​From​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The current quantity to be compared against the persisted quantity. Explicitly passing in `null` to this field opts out of the quantity comparison check. Explicitly passing in any value (be it `null` or an integer) to `changeFromQuantity` will cause the values passed into the `compareQuantity` and `InventorySetQuantitiesInput.ignoreCompareQuantity` fields to be ignored in favour of the `changeFromQuantity` value. For more information, refer to the [Compare and Swap documentation](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#compare-and-swap).

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

* compare​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Deprecated (removal date set)

***

## Input objects using this input

* [Inventory​Set​Quantities​Input.quantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput#fields-quantities)

  INPUT OBJECT

  The input fields required to set inventory quantities.

***

## Map

### Input objects using this input

* [Inventory​Set​Quantities​Input.quantities](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantitiesInput#fields-quantities)
