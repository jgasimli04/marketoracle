---
title: SegmentEdge - GraphQL Admin
description: An auto-generated type which holds one Segment and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEdge.md'
---

# Segment​Edge

object

An auto-generated type which holds one Segment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Segment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  non-null

  The item at the end of SegmentEdge.

***

## Map

### Connections with this object

* <->[SegmentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-edges)
