---
title: ValidationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one Validation and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationEdge.md'
---

# Validation​Edge

object

An auto-generated type which holds one Validation and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Validation!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  non-null

  The item at the end of ValidationEdge.

***

## Map

### Connections with this object

* <->[ValidationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ValidationConnection#returns-edges)
