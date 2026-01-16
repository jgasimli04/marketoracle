---
title: QuantityRuleEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one QuantityRule and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleEdge.md
---

# Quantity​Rule​Edge

object

An auto-generated type which holds one QuantityRule and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Quantity​Rule!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule)

  non-null

  The item at the end of QuantityRuleEdge.

***

## Map

### Connections with this object

* <->[QuantityRuleConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityRuleConnection#returns-edges)
