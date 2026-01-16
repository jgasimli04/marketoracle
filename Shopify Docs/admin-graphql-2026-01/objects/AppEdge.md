---
title: AppEdge - GraphQL Admin
description: An auto-generated type which holds one App and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AppEdge.md'
---

# App​Edge

object

An auto-generated type which holds one App and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  The item at the end of AppEdge.

***

## Map

### Connections with this object

* <->[AppConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-edges)
