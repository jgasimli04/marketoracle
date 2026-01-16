---
title: AppDiscountTypeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one AppDiscountType and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountTypeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountTypeEdge.md
---

# App​Discount​Type​Edge

object

An auto-generated type which holds one AppDiscountType and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [App​Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

  non-null

  The item at the end of AppDiscountTypeEdge.

***

## Map

### Connections with this object

* <->[AppDiscountTypeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-edges)
