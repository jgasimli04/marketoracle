---
title: ScriptTagEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ScriptTag and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTagEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTagEdge.md'
---

# Script​Tag​Edge

object

An auto-generated type which holds one ScriptTag and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Script​Tag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  non-null

  The item at the end of ScriptTagEdge.

***

## Map

### Connections with this object

* <->[ScriptTagConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-edges)
