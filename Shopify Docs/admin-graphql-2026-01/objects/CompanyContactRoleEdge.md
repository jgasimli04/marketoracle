---
title: CompanyContactRoleEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CompanyContactRole and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleEdge.md
---

# Company​Contact​Role​Edge

object

An auto-generated type which holds one CompanyContactRole and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Company​Contact​Role!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

  non-null

  The item at the end of CompanyContactRoleEdge.

***

## Map

### Connections with this object

* <->[CompanyContactRoleConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection#returns-edges)
