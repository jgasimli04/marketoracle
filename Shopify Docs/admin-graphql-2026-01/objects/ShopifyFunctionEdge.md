---
title: ShopifyFunctionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ShopifyFunction and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunctionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunctionEdge.md
---

# Shopify​Function​Edge

object

An auto-generated type which holds one ShopifyFunction and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Shopify​Function!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction)

  non-null

  The item at the end of ShopifyFunctionEdge.

***

## Map

### Connections with this object

* <->[ShopifyFunctionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-edges)
