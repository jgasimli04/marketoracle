---
title: SegmentMigrationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SegmentMigration and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigrationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigrationEdge.md
---

# Segment​Migration​Edge

object

An auto-generated type which holds one SegmentMigration and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Segment​Migration!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigration)

  non-null

  The item at the end of SegmentMigrationEdge.

***

## Map

### Connections with this object

* <->[SegmentMigrationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentMigrationConnection#returns-edges)
