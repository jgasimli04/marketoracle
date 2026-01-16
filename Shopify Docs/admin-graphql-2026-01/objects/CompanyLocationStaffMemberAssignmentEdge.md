---
title: CompanyLocationStaffMemberAssignmentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CompanyLocationStaffMemberAssignment
  and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignmentEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignmentEdge.md
---

# Company​Location​Staff​Member​Assignment​Edge

object

An auto-generated type which holds one CompanyLocationStaffMemberAssignment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Company​Location​Staff​Member​Assignment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment)

  non-null

  The item at the end of CompanyLocationStaffMemberAssignmentEdge.

***

## Map

### Connections with this object

* <->[CompanyLocationStaffMemberAssignmentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-edges)
