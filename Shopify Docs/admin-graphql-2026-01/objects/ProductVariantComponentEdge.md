---
title: ProductVariantComponentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ProductVariantComponent and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponentEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponentEdge.md
---

# Product​Variant​Component​Edge

object

An auto-generated type which holds one ProductVariantComponent and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Product​Variant​Component!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponent)

  non-null

  The item at the end of ProductVariantComponentEdge.

***

## Map

### Connections with this object

* <->[ProductVariantComponentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantComponentConnection#returns-edges)
