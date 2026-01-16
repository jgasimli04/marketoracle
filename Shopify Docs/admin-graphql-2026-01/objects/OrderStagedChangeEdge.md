---
title: OrderStagedChangeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one OrderStagedChange and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeEdge.md
---

# Order​Staged​Change​Edge

object

An auto-generated type which holds one OrderStagedChange and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Order​Staged​Change!](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)

  non-null

  The item at the end of OrderStagedChangeEdge.

***

## Map

### Connections with this object

* <->[OrderStagedChangeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderStagedChangeConnection#returns-edges)
