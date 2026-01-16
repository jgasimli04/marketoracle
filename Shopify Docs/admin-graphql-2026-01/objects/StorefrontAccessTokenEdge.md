---
title: StorefrontAccessTokenEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one StorefrontAccessToken and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessTokenEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessTokenEdge.md
---

# Storefront​Access​Token​Edge

object

An auto-generated type which holds one StorefrontAccessToken and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Storefront​Access​Token!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken)

  non-null

  The item at the end of StorefrontAccessTokenEdge.

***

## Map

### Connections with this object

* <->[StorefrontAccessTokenConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-edges)
