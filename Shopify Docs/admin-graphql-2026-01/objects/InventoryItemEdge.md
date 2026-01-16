---
title: InventoryItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one InventoryItem and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemEdge.md
---

# Inventory​Item​Edge

object

An auto-generated type which holds one InventoryItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Inventory​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  non-null

  The item at the end of InventoryItemEdge.

***

## Map

### Connections with this object

* <->[InventoryItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-edges)
