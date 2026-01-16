---
title: LineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one LineItem and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemEdge.md'
---

# Line​Item​Edge

object

An auto-generated type which holds one LineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  The item at the end of LineItemEdge.

***

## Map

### Connections with this object

* <->[LineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-edges)
