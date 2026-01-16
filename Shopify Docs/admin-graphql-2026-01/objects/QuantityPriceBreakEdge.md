---
title: QuantityPriceBreakEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one QuantityPriceBreak and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreakEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreakEdge.md
---

# Quantity​Price​Break​Edge

object

An auto-generated type which holds one QuantityPriceBreak and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Quantity​Price​Break!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak)

  non-null

  The item at the end of QuantityPriceBreakEdge.

***

## Map

### Connections with this object

* <->[QuantityPriceBreakConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-edges)
