---
title: InventoryTransferLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one InventoryTransferLineItem and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemEdge.md
---

# Inventory​Transfer​Line​Item​Edge

object

An auto-generated type which holds one InventoryTransferLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Inventory​Transfer​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem)

  non-null

  The item at the end of InventoryTransferLineItemEdge.

***

## Map

### Connections with this object

* <->[InventoryTransferLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-edges)
