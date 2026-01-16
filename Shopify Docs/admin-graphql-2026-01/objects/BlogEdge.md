---
title: BlogEdge - GraphQL Admin
description: An auto-generated type which holds one Blog and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogEdge.md'
---

# Blog​Edge

object

An auto-generated type which holds one Blog and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Blog!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  non-null

  The item at the end of BlogEdge.

***

## Map

### Connections with this object

* <->[BlogConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-edges)
