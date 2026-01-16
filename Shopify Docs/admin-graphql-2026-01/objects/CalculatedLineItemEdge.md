---
title: CalculatedLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CalculatedLineItem and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItemEdge.md
---

# Calculated​Line​Item​Edge

object

An auto-generated type which holds one CalculatedLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Calculated​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  non-null

  The item at the end of CalculatedLineItemEdge.

***

## Map

### Connections with this object

* <->[CalculatedLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-edges)
