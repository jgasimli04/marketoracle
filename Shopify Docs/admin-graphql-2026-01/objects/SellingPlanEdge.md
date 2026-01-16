---
title: SellingPlanEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SellingPlan and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanEdge.md'
---

# Selling​Plan​Edge

object

An auto-generated type which holds one SellingPlan and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Selling​Plan!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan)

  non-null

  The item at the end of SellingPlanEdge.

***

## Map

### Connections with this object

* <->[SellingPlanConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-edges)
