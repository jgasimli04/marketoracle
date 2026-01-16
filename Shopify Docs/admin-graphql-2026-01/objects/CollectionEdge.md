---
title: CollectionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one Collection and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionEdge.md'
---

# Collection​Edge

object

An auto-generated type which holds one Collection and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Collection!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  non-null

  The item at the end of CollectionEdge.

***

## Map

### Connections with this object

* <->[CollectionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-edges)
