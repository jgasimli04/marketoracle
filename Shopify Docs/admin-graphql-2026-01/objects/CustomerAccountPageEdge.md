---
title: CustomerAccountPageEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CustomerAccountPage and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountPageEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountPageEdge.md
---

# Customer​Account​Page​Edge

object

An auto-generated type which holds one CustomerAccountPage and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Customer​Account​Page!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage)

  non-null

  The item at the end of CustomerAccountPageEdge.

***

## Map

### Connections with this object

* <->[CustomerAccountPageConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerAccountPageConnection#returns-edges)
