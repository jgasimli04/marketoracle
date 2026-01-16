---
title: CompanyContactRoleAssignmentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CompanyContactRoleAssignment and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignmentEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignmentEdge.md
---

# Company​Contact​Role​Assignment​Edge

object

An auto-generated type which holds one CompanyContactRoleAssignment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Company​Contact​Role​Assignment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  non-null

  The item at the end of CompanyContactRoleAssignmentEdge.

***

## Map

### Connections with this object

* <->[CompanyContactRoleAssignmentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-edges)
