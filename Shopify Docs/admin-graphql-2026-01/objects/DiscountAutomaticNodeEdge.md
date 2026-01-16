---
title: DiscountAutomaticNodeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountAutomaticNode and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNodeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNodeEdge.md
---

# Discount​Automatic​Node​Edge

object

An auto-generated type which holds one DiscountAutomaticNode and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Automatic​Node!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  non-null

  The item at the end of DiscountAutomaticNodeEdge.

***

## Map

### Connections with this object

* <->[DiscountAutomaticNodeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection#returns-edges)
