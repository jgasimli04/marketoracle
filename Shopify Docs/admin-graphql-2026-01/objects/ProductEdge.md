---
title: ProductEdge - GraphQL Admin
description: An auto-generated type which holds one Product and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductEdge.md'
---

# Product​Edge

object

An auto-generated type which holds one Product and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Product!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  The item at the end of ProductEdge.

***

## Map

### Connections with this object

* <->[ProductConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-edges)
