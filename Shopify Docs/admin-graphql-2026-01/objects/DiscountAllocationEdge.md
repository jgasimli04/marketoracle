---
title: DiscountAllocationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountAllocation and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocationEdge.md
---

# Discount​Allocation​Edge

object

An auto-generated type which holds one DiscountAllocation and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Allocation!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

  non-null

  The item at the end of DiscountAllocationEdge.

***

## Map

### Connections with this object

* <->[DiscountAllocationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-edges)
