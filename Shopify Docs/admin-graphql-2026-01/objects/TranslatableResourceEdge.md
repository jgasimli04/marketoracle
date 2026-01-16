---
title: TranslatableResourceEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one TranslatableResource and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge.md
---

# Translatable​Resource​Edge

object

An auto-generated type which holds one TranslatableResource and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Translatable​Resource!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource)

  non-null

  The item at the end of TranslatableResourceEdge.

***

## Map

### Connections with this object

* <->[TranslatableResourceConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-edges)
