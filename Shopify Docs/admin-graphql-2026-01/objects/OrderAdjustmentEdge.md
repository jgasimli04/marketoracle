---
title: OrderAdjustmentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one OrderAdjustment and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustmentEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustmentEdge.md
---

# Order​Adjustment​Edge

object

An auto-generated type which holds one OrderAdjustment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Order​Adjustment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustment)

  non-null

  The item at the end of OrderAdjustmentEdge.

***

## Map

### Connections with this object

* <->[OrderAdjustmentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAdjustmentConnection#returns-edges)
