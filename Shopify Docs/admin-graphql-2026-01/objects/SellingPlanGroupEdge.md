---
title: SellingPlanGroupEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SellingPlanGroup and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupEdge.md
---

# Selling​Plan​Group​Edge

object

An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Selling​Plan​Group!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  non-null

  The item at the end of SellingPlanGroupEdge.

***

## Map

### Connections with this object

* <->[SellingPlanGroupConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-edges)
