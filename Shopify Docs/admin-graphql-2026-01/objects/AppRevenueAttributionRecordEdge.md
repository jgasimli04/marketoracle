---
title: AppRevenueAttributionRecordEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one AppRevenueAttributionRecord and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecordEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecordEdge.md
---

# App​Revenue​Attribution​Record​Edge

object

An auto-generated type which holds one AppRevenueAttributionRecord and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [App​Revenue​Attribution​Record!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord)

  non-null

  The item at the end of AppRevenueAttributionRecordEdge.

***

## Map

### Connections with this object

* <->[AppRevenueAttributionRecordConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection#returns-edges)
