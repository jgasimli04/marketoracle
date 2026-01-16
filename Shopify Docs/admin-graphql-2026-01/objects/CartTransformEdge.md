---
title: CartTransformEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CartTransform and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEdge.md
---

# Cart​Transform​Edge

object

An auto-generated type which holds one CartTransform and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Cart​Transform!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform)

  non-null

  The item at the end of CartTransformEdge.

***

## Map

### Connections with this object

* <->[CartTransformConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection#returns-edges)
