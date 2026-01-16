---
title: SearchResultEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SearchResult and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResultEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResultEdge.md
---

# Search​Result​Edge

object

An auto-generated type which holds one SearchResult and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Search​Result!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResult)

  non-null

  The item at the end of SearchResultEdge.

***

## Map

### Connections with this object

* <->[SearchResultConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection#returns-edges)
