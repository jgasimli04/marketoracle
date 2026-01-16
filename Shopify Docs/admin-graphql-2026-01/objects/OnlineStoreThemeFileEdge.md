---
title: OnlineStoreThemeFileEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one OnlineStoreThemeFile and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileEdge.md
---

# Online​Store​Theme​File​Edge

object

An auto-generated type which holds one OnlineStoreThemeFile and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Online​Store​Theme​File!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile)

  non-null

  The item at the end of OnlineStoreThemeFileEdge.

***

## Map

### Connections with this object

* <->[OnlineStoreThemeFileConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-edges)
