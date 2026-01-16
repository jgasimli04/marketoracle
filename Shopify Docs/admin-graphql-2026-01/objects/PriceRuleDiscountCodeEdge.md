---
title: PriceRuleDiscountCodeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one PriceRuleDiscountCode and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCodeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCodeEdge.md
---

# Price​Rule​Discount​Code​Edge

object

An auto-generated type which holds one PriceRuleDiscountCode and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Price​Rule​Discount​Code!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCode)

  non-null

  The item at the end of PriceRuleDiscountCodeEdge.

***

## Map

### Connections with this object

* <->[PriceRuleDiscountCodeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-edges)
