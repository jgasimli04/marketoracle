---
title: MarketingActivityEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MarketingActivity and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityEdge.md
---

# Marketing​Activity​Edge

object

An auto-generated type which holds one MarketingActivity and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Marketing​Activity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  non-null

  The item at the end of MarketingActivityEdge.

***

## Map

### Connections with this object

* <->[MarketingActivityConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection#returns-edges)
