---
title: DiscountRedeemCodeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountRedeemCode and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeEdge.md
---

# Discount​Redeem​Code​Edge

object

An auto-generated type which holds one DiscountRedeemCode and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Redeem​Code!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode)

  non-null

  The item at the end of DiscountRedeemCodeEdge.

***

## Map

### Connections with this object

* <->[DiscountRedeemCodeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-edges)
