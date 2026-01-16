---
title: ProductVariantEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ProductVariant and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantEdge.md
---

# Product​Variant​Edge

object

An auto-generated type which holds one ProductVariant and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Product​Variant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  The item at the end of ProductVariantEdge.

***

## Map

### Connections with this object

* <->[ProductVariantConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#returns-edges)
