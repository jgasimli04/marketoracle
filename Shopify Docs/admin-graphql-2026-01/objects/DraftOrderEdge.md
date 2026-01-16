---
title: DraftOrderEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DraftOrder and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderEdge.md'
---

# Draft​Order​Edge

object

An auto-generated type which holds one DraftOrder and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Draft​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  non-null

  The item at the end of DraftOrderEdge.

***

## Map

### Connections with this object

* <->[DraftOrderConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-edges)
