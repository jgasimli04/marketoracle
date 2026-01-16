---
title: ProductPublicationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ProductPublication and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublicationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublicationEdge.md
---

# Product​Publication​Edge

object

An auto-generated type which holds one ProductPublication and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Product​Publication!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication)

  non-null

  The item at the end of ProductPublicationEdge.

***

## Map

### Connections with this object

* <->[ProductPublicationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-edges)
