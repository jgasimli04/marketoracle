---
title: PageEdge - GraphQL Admin
description: An auto-generated type which holds one Page and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PageEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PageEdge.md'
---

# Page​Edge

object

An auto-generated type which holds one Page and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Page!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  non-null

  The item at the end of PageEdge.

***

## Map

### Connections with this object

* <->[PageConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#returns-edges)
