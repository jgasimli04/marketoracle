---
title: MetafieldDefinitionConstraintValueEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MetafieldDefinitionConstraintValue and
  a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraintValueEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraintValueEdge.md
---

# Metafield​Definition​Constraint​Value​Edge

object

An auto-generated type which holds one MetafieldDefinitionConstraintValue and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Metafield​Definition​Constraint​Value!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraintValue)

  non-null

  The item at the end of MetafieldDefinitionConstraintValueEdge.

***

## Map

### Connections with this object

* <->[MetafieldDefinitionConstraintValueConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection#returns-edges)
