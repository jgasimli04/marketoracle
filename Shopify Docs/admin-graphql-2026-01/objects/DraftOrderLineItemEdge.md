---
title: DraftOrderLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DraftOrderLineItem and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItemEdge.md
---

# Draft​Order​Line​Item​Edge

object

An auto-generated type which holds one DraftOrderLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Draft​Order​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem)

  non-null

  The item at the end of DraftOrderLineItemEdge.

***

## Map

### Connections with this object

* <->[DraftOrderLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection#returns-edges)
