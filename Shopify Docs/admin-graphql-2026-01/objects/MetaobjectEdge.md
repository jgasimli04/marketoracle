---
title: MetaobjectEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one Metaobject and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectEdge.md'
---

# Metaobject​Edge

object

An auto-generated type which holds one Metaobject and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Metaobject!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  non-null

  The item at the end of MetaobjectEdge.

***

## Map

### Connections with this object

* <->[MetaobjectConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-edges)
