---
title: ReturnReasonDefinitionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReturnReasonDefinition and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinitionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinitionEdge.md
---

# Return​Reason​Definition​Edge

object

An auto-generated type which holds one ReturnReasonDefinition and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Return​Reason​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition)

  non-null

  The item at the end of ReturnReasonDefinitionEdge.

***

## Map

### Connections with this object

* <->[ReturnReasonDefinitionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-edges)
