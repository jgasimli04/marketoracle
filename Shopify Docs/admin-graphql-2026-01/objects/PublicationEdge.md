---
title: PublicationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one Publication and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationEdge.md'
---

# Publication​Edge

object

An auto-generated type which holds one Publication and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Publication!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  non-null

  The item at the end of PublicationEdge.

***

## Map

### Connections with this object

* <->[PublicationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#returns-edges)
