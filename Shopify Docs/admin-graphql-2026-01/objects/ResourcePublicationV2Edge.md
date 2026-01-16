---
title: ResourcePublicationV2Edge - GraphQL Admin
description: >-
  An auto-generated type which holds one ResourcePublicationV2 and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2Edge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2Edge.md
---

# Resource​Publication​V2Edge

object

An auto-generated type which holds one ResourcePublicationV2 and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Resource​Publication​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2)

  non-null

  The item at the end of ResourcePublicationV2Edge.

***

## Map

### Connections with this object

* <->[ResourcePublicationV2Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection#returns-edges)
