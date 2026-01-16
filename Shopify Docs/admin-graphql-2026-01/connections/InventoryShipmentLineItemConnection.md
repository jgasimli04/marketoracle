---
title: InventoryShipmentLineItemConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  InventoryShipmentLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection.md
---

# Inventory​Shipment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple InventoryShipmentLineItems.

## Fields with this connection

* [Inventory​Shipment.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.lineItems)

  OBJECT

  Represents an inventory shipment.

***

## Possible returns

* edges

  [\[Inventory​Shipment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Shipment​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  non-null

  A list of nodes that are contained in InventoryShipmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Inventory​Shipment.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.lineItems)

### Possible returns

* <->[Inventory​Shipment​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#returns-edges)
* <->[Inventory​Shipment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#returns-nodes)
* <->[Inventory​Shipment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#returns-pageInfo)
