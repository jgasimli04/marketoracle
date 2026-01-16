---
title: ResourcePublicationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ResourcePublication and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationEdge.md
---

# Resource​Publication​Edge

object

An auto-generated type which holds one ResourcePublication and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Resource​Publication!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublication)

  non-null

  The item at the end of ResourcePublicationEdge.

***

## Map

### Connections with this object

* <->[ResourcePublicationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-edges)
