---
title: ExchangeLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ExchangeLineItem and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItemEdge.md
---

# Exchange​Line​Item​Edge

object

An auto-generated type which holds one ExchangeLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Exchange​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem)

  non-null

  The item at the end of ExchangeLineItemEdge.

***

## Map

### Connections with this object

* <->[ExchangeLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ExchangeLineItemConnection#returns-edges)
