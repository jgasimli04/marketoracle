---
title: PriceListPriceEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one PriceListPrice and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceEdge.md
---

# Price​List​Price​Edge

object

An auto-generated type which holds one PriceListPrice and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Price​List​Price!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)

  non-null

  The item at the end of PriceListPriceEdge.

***

## Map

### Connections with this object

* <->[PriceListPriceConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-edges)
