---
title: InventoryMoveQuantityChange - GraphQL Admin
description: >-
  Represents the change to be made to an inventory item at a location.

  The change can either involve the same quantity name between different
  locations,

  or involve different quantity names between the same location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityChange
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityChange.md
---

# Inventory​Move​Quantity​Change

input\_object

Represents the change to be made to an inventory item at a location. The change can either involve the same quantity name between different locations, or involve different quantity names between the same location.

## Fields

* from

  [Inventory​Move​Quantity​Terminal​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityTerminalInput)

  required

  Details about where the move will be made from.

* inventory​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  Specifies the inventory item to which the change will be applied.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The amount by which the inventory quantity will be changed.

* to

  [Inventory​Move​Quantity​Terminal​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityTerminalInput)

  required

  Details about where the move will be made to.

***

## Input objects using this input

* [Inventory​Move​Quantities​Input.changes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantitiesInput#fields-changes)

  INPUT OBJECT

  The input fields required to move inventory quantities.

***

## Map

### Input objects using this input

* [Inventory​Move​Quantities​Input.changes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantitiesInput#fields-changes)
