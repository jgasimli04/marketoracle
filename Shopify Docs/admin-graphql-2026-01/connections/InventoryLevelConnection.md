---
title: InventoryLevelConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple InventoryLevels.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection.md
---

# Inventory​Level​Connection

connection

An auto-generated type for paginating through multiple InventoryLevels.

## Fields with this connection

* [Inventory​Item.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryLevels)

  OBJECT

  A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

  Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

* [Location.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.inventoryLevels)

  OBJECT

  A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.

  Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.

***

## Possible returns

* edges

  [\[Inventory​Level​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevelEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Level!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  non-null

  A list of nodes that are contained in InventoryLevelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Inventory​Item.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryLevels)
* {}[Location.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.inventoryLevels)

### Possible returns

* <->[Inventory​Level​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-edges)
* <->[Inventory​Level​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-nodes)
* <->[Inventory​Level​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-pageInfo)
