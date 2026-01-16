---
title: ProductBundleComponentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ProductBundleComponent and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentEdge.md
---

# Product​Bundle​Component​Edge

object

An auto-generated type which holds one ProductBundleComponent and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Product​Bundle​Component!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent)

  non-null

  The item at the end of ProductBundleComponentEdge.

***

## Map

### Connections with this object

* <->[ProductBundleComponentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductBundleComponentConnection#returns-edges)
