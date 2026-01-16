---
title: InventoryMoveQuantityTerminalInput - GraphQL Admin
description: >-
  The input fields representing the change to be made to an inventory item at a
  location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityTerminalInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityTerminalInput.md
---

# Inventory​Move​Quantity​Terminal​Input

input\_object

The input fields representing the change to be made to an inventory item at a location.

## Fields

* change​From​Quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The quantity to compare against before applying the move. For more information, refer to the [Compare and Swap documentation](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#compare-and-swap).

* ledger​Document​Uri

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A non-Shopify URI that identifies what specific inventory transaction or ledger entry was changed. Represents the exact inventory movement being referenced, distinct from the business reason for the change.

  Preferred format - Global ID (GID): gid://\[your-app-name]/\[transaction-type]/\[id]

  Examples:

  * gid://warehouse-app/InventoryTransaction/TXN-2024-001 (specific transaction)
  * gid://3pl-system/StockMovement/SM-2024-0125 (stock movement record)
  * gid://pos-app/InventoryUpdate/UPD-98765 (POS inventory update)
  * gid://erp-connector/LedgerEntry/LE-2024-11-21-001 (ledger entry)

  Requirements: Valid non-Shopify URI with scheme and content. Required for all quantity names except `available`. Cannot use gid://shopify/\* format.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  Specifies the location at which the change will be applied.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The quantity [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states) to be moved.

***

## Input objects using this input

* [Inventory​Move​Quantity​Change.from](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityChange#fields-from)

  INPUT OBJECT

  Represents the change to be made to an inventory item at a location. The change can either involve the same quantity name between different locations, or involve different quantity names between the same location.

* [Inventory​Move​Quantity​Change.to](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityChange#fields-to)

  INPUT OBJECT

  Represents the change to be made to an inventory item at a location. The change can either involve the same quantity name between different locations, or involve different quantity names between the same location.

***

## Map

### Input objects using this input

* [Inventory​Move​Quantity​Change.from](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityChange#fields-from)
* [Inventory​Move​Quantity​Change.to](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryMoveQuantityChange#fields-to)
