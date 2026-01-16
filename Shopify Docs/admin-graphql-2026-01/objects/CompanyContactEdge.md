---
title: CompanyContactEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CompanyContact and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactEdge.md
---

# Company​Contact​Edge

object

An auto-generated type which holds one CompanyContact and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Company​Contact!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  non-null

  The item at the end of CompanyContactEdge.

***

## Map

### Connections with this object

* <->[CompanyContactConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#returns-edges)
