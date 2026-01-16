---
title: InventoryScheduledChangeConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  InventoryScheduledChanges.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection.md
---

# Inventory​Scheduled​Change​Connection

connection

An auto-generated type for paginating through multiple InventoryScheduledChanges.

## Fields with this connection

* [Inventory​Level.scheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.scheduledChanges)

  OBJECT

  The quantities of an inventory item at a specific location. Each inventory level connects one [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) to one [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location), tracking multiple quantity states like available, on-hand, incoming, and committed.

  The [`quantities`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.quantities) field provides access to different inventory states. Learn [more about inventory states and relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

***

## Possible returns

* edges

  [\[Inventory​Scheduled​Change​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChangeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Scheduled​Change!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange)

  non-null

  A list of nodes that are contained in InventoryScheduledChangeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Inventory​Level.scheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.scheduledChanges)

### Possible returns

* <->[Inventory​Scheduled​Change​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-edges)
* <->[Inventory​Scheduled​Change​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-nodes)
* <->[Inventory​Scheduled​Change​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-pageInfo)
