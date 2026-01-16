---
title: CalculatedDiscountApplicationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CalculatedDiscountApplication and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountApplicationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountApplicationEdge.md
---

# Calculated​Discount​Application​Edge

object

An auto-generated type which holds one CalculatedDiscountApplication and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Calculated​Discount​Application!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication)

  non-null

  The item at the end of CalculatedDiscountApplicationEdge.

***

## Map

### Connections with this object

* <->[CalculatedDiscountApplicationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-edges)
