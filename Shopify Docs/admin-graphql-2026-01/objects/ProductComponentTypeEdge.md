---
title: ProductComponentTypeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ProductComponentType and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentTypeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentTypeEdge.md
---

# Product​Component​Type​Edge

object

An auto-generated type which holds one ProductComponentType and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Product​Component​Type!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType)

  non-null

  The item at the end of ProductComponentTypeEdge.

***

## Map

### Connections with this object

* <->[ProductComponentTypeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-edges)
