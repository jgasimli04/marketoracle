---
title: ReturnLineItemTypeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReturnLineItemType and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItemTypeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItemTypeEdge.md
---

# Return​Line​Item​Type​Edge

object

An auto-generated type which holds one ReturnLineItemType and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Return​Line​Item​Type!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ReturnLineItemType)

  non-null

  The item at the end of ReturnLineItemTypeEdge.

***

## Map

### Connections with this object

* <->[ReturnLineItemTypeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnLineItemTypeConnection#returns-edges)
