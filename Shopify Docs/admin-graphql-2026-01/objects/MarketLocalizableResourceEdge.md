---
title: MarketLocalizableResourceEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MarketLocalizableResource and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResourceEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResourceEdge.md
---

# Market​Localizable​Resource​Edge

object

An auto-generated type which holds one MarketLocalizableResource and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Market​Localizable​Resource!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource)

  non-null

  The item at the end of MarketLocalizableResourceEdge.

***

## Map

### Connections with this object

* <->[MarketLocalizableResourceConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-edges)
