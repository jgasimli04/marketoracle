---
title: CustomerSegmentMemberEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CustomerSegmentMember and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMemberEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMemberEdge.md
---

# Customer​Segment​Member​Edge

object

An auto-generated type which holds one CustomerSegmentMember and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Customer​Segment​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember)

  non-null

  The item at the end of CustomerSegmentMemberEdge.

***

## Map

### Connections with this object

* <->[CustomerSegmentMemberConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-edges)
