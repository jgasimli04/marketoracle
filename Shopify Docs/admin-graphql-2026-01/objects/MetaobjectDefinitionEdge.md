---
title: MetaobjectDefinitionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MetaobjectDefinition and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitionEdge.md
---

# Metaobject​Definition​Edge

object

An auto-generated type which holds one MetaobjectDefinition and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Metaobject​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  non-null

  The item at the end of MetaobjectDefinitionEdge.

***

## Map

### Connections with this object

* <->[MetaobjectDefinitionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection#returns-edges)
