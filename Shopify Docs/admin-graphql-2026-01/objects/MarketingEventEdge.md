---
title: MarketingEventEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MarketingEvent and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEventEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEventEdge.md
---

# Marketing​Event​Edge

object

An auto-generated type which holds one MarketingEvent and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Marketing​Event!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

  non-null

  The item at the end of MarketingEventEdge.

***

## Map

### Connections with this object

* <->[MarketingEventConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection#returns-edges)
