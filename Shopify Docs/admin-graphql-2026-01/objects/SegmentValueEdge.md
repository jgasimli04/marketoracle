---
title: SegmentValueEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SegmentValue and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValueEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValueEdge.md
---

# Segment​Value​Edge

object

An auto-generated type which holds one SegmentValue and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Segment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValue)

  non-null

  The item at the end of SegmentValueEdge.

***

## Map

### Connections with this object

* <->[SegmentValueConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentValueConnection#returns-edges)
