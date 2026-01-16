---
title: InventoryTransferLineItemConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  InventoryTransferLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection.md
---

# Inventory​Transfer​Line​Item​Connection

connection

An auto-generated type for paginating through multiple InventoryTransferLineItems.

## Fields with this connection

* [Inventory​Transfer.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.lineItems)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

***

## Possible returns

* edges

  [\[Inventory​Transfer​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Transfer​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem)

  non-null

  A list of nodes that are contained in InventoryTransferLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Inventory​Transfer.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.lineItems)

### Possible returns

* <->[Inventory​Transfer​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-edges)
* <->[Inventory​Transfer​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-nodes)
* <->[Inventory​Transfer​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-pageInfo)
