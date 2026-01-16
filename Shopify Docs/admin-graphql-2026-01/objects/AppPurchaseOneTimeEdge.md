---
title: AppPurchaseOneTimeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one AppPurchaseOneTime and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTimeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTimeEdge.md
---

# App​Purchase​One​Time​Edge

object

An auto-generated type which holds one AppPurchaseOneTime and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [App​Purchase​One​Time!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)

  non-null

  The item at the end of AppPurchaseOneTimeEdge.

***

## Map

### Connections with this object

* <->[AppPurchaseOneTimeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-edges)
