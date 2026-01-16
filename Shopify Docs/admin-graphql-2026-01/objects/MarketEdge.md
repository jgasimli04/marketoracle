---
title: MarketEdge - GraphQL Admin
description: An auto-generated type which holds one Market and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketEdge.md'
---

# Market​Edge

object

An auto-generated type which holds one Market and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Market!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  non-null

  The item at the end of MarketEdge.

***

## Map

### Connections with this object

* <->[MarketConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-edges)
