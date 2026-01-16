---
title: ProductVariantPricePairEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ProductVariantPricePair and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePairEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePairEdge.md
---

# Product​Variant​Price​Pair​Edge

object

An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Product​Variant​Price​Pair!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePair)

  non-null

  The item at the end of ProductVariantPricePairEdge.

***

## Map

### Connections with this object

* <->[ProductVariantPricePairConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-edges)
