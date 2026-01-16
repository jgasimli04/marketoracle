---
title: CustomerVisitProductInfoEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CustomerVisitProductInfo and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfoEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfoEdge.md
---

# Customer​Visit​Product​Info​Edge

object

An auto-generated type which holds one CustomerVisitProductInfo and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Customer​Visit​Product​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfo)

  non-null

  The item at the end of CustomerVisitProductInfoEdge.

***

## Map

### Connections with this object

* <->[CustomerVisitProductInfoConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-edges)
