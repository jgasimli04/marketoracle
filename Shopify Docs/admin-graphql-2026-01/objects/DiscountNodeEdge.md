---
title: DiscountNodeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountNode and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNodeEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNodeEdge.md
---

# Discount​Node​Edge

object

An auto-generated type which holds one DiscountNode and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Node!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode)

  non-null

  The item at the end of DiscountNodeEdge.

***

## Map

### Connections with this object

* <->[DiscountNodeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-edges)
