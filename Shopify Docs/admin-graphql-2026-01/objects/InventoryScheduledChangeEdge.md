---
title: InventoryScheduledChangeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one InventoryScheduledChange and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChangeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChangeEdge.md
---

# Inventory​Scheduled​Change​Edge

object

An auto-generated type which holds one InventoryScheduledChange and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Inventory​Scheduled​Change!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange)

  non-null

  The item at the end of InventoryScheduledChangeEdge.

***

## Map

### Connections with this object

* <->[InventoryScheduledChangeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-edges)
