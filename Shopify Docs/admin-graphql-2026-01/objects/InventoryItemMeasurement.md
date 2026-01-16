---
title: InventoryItemMeasurement - GraphQL Admin
description: >-
  Weight information for an
  [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)
  when packaged. Provides the weight specification used for inventory management
  and shipping calculations. Learn more about [managing
  inventory](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps).
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemMeasurement
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemMeasurement.md
---

# Inventory​Item​Measurement

object

Requires `read_inventory` access scope or `read_products` access scope.

Weight information for an [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) when packaged. Provides the weight specification used for inventory management and shipping calculations. Learn more about [managing inventory](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* weight

  [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  The weight of the inventory item.

***

## Map

### Fields with this object

* {}[InventoryItem.measurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.measurement)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ||-InventoryItemMeasurement Implements

### Implements

* ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
