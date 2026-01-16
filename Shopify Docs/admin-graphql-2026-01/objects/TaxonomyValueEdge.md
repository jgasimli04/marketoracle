---
title: TaxonomyValueEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one TaxonomyValue and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValueEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValueEdge.md
---

# Taxonomy​Value​Edge

object

An auto-generated type which holds one TaxonomyValue and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Taxonomy​Value!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValue)

  non-null

  The item at the end of TaxonomyValueEdge.

***

## Map

### Connections with this object

* <->[TaxonomyValueConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-edges)
