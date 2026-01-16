---
title: MarketRegionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MarketRegion and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionEdge.md
---

# Market​Region​Edge

object

An auto-generated type which holds one MarketRegion and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Market​Region!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

  non-null

  The item at the end of MarketRegionEdge.

***

## Map

### Connections with this object

* <->[MarketRegionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection#returns-edges)
