---
title: SaleEdge - GraphQL Admin
description: An auto-generated type which holds one Sale and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleEdge.md'
---

# Sale​Edge

object

An auto-generated type which holds one Sale and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Sale!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale)

  non-null

  The item at the end of SaleEdge.

***

## Map

### Connections with this object

* <->[SaleConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection#returns-edges)
