---
title: CatalogEdge - GraphQL Admin
description: An auto-generated type which holds one Catalog and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogEdge.md'
---

# Catalog​Edge

object

An auto-generated type which holds one Catalog and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Catalog!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  non-null

  The item at the end of CatalogEdge.

***

## Map

### Connections with this object

* <->[CatalogConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-edges)
