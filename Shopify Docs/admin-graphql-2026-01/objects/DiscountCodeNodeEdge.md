---
title: DiscountCodeNodeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountCodeNode and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNodeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNodeEdge.md
---

# Discount​Code​Node​Edge

object

An auto-generated type which holds one DiscountCodeNode and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Code​Node!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  non-null

  The item at the end of DiscountCodeNodeEdge.

***

## Map

### Connections with this object

* <->[DiscountCodeNodeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-edges)
