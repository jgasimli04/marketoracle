---
title: MarketCatalogEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MarketCatalog and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalogEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalogEdge.md
---

# Market​Catalog​Edge

object

An auto-generated type which holds one MarketCatalog and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Market​Catalog!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog)

  non-null

  The item at the end of MarketCatalogEdge.

***

## Map

### Connections with this object

* <->[MarketCatalogConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-edges)
