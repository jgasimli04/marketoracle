---
title: InventoryLevelEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one InventoryLevel and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevelEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevelEdge.md
---

# Inventory​Level​Edge

object

An auto-generated type which holds one InventoryLevel and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Inventory​Level!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  non-null

  The item at the end of InventoryLevelEdge.

***

## Map

### Connections with this object

* <->[InventoryLevelConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-edges)
