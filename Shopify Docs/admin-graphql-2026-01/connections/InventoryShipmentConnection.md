---
title: InventoryShipmentConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple InventoryShipments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection.md
---

# Inventory​Shipment​Connection

connection

An auto-generated type for paginating through multiple InventoryShipments.

## Fields with this connection

* [Inventory​Transfer.shipments](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.shipments)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

***

## Possible returns

* edges

  [\[Inventory​Shipment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Shipment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  non-null

  A list of nodes that are contained in InventoryShipmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Inventory​Transfer.shipments](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.shipments)

### Possible returns

* <->[Inventory​Shipment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-edges)
* <->[Inventory​Shipment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-nodes)
* <->[Inventory​Shipment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-pageInfo)
