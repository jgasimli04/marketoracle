---
title: StaffMemberEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one StaffMember and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberEdge.md'
---

# Staff​Member​Edge

object

An auto-generated type which holds one StaffMember and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  The item at the end of StaffMemberEdge.

***

## Map

### Connections with this object

* <->[StaffMemberConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection#returns-edges)
