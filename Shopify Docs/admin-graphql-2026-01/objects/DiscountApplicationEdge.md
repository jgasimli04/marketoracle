---
title: DiscountApplicationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountApplication and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplicationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplicationEdge.md
---

# Discount​Application​Edge

object

An auto-generated type which holds one DiscountApplication and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Application!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)

  non-null

  The item at the end of DiscountApplicationEdge.

***

## Map

### Connections with this object

* <->[DiscountApplicationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountApplicationConnection#returns-edges)
