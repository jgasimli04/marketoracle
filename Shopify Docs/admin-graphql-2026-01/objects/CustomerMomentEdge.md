---
title: CustomerMomentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CustomerMoment and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMomentEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMomentEdge.md
---

# Customer​Moment​Edge

object

An auto-generated type which holds one CustomerMoment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Customer​Moment!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment)

  non-null

  The item at the end of CustomerMomentEdge.

***

## Map

### Connections with this object

* <->[CustomerMomentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection#returns-edges)
