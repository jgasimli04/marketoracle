---
title: InventoryShipmentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one InventoryShipment and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentEdge.md
---

# Inventory​Shipment​Edge

object

An auto-generated type which holds one InventoryShipment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Inventory​Shipment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  non-null

  The item at the end of InventoryShipmentEdge.

***

## Map

### Connections with this object

* <->[InventoryShipmentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-edges)
