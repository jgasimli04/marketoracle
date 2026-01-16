---
title: LocalizedFieldEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one LocalizedField and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedFieldEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedFieldEdge.md
---

# Localized​Field​Edge

object

An auto-generated type which holds one LocalizedField and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Localized​Field!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedField)

  non-null

  The item at the end of LocalizedFieldEdge.

***

## Map

### Connections with this object

* <->[LocalizedFieldConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-edges)
