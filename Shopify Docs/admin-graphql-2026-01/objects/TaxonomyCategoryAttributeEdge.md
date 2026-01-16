---
title: TaxonomyCategoryAttributeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one TaxonomyCategoryAttribute and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryAttributeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryAttributeEdge.md
---

# Taxonomy​Category​Attribute​Edge

object

An auto-generated type which holds one TaxonomyCategoryAttribute and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Taxonomy​Category​Attribute!](https://shopify.dev/docs/api/admin-graphql/latest/unions/TaxonomyCategoryAttribute)

  non-null

  The item at the end of TaxonomyCategoryAttributeEdge.

***

## Map

### Connections with this object

* <->[TaxonomyCategoryAttributeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-edges)
