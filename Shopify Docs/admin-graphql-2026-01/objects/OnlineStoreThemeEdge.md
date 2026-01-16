---
title: OnlineStoreThemeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one OnlineStoreTheme and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeEdge.md
---

# Online​Store​Theme​Edge

object

An auto-generated type which holds one OnlineStoreTheme and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Online​Store​Theme!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  non-null

  The item at the end of OnlineStoreThemeEdge.

***

## Map

### Connections with this object

* <->[OnlineStoreThemeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-edges)
