---
title: MetafieldEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one Metafield and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldEdge.md'
---

# Metafield​Edge

object

An auto-generated type which holds one Metafield and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Metafield!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  non-null

  The item at the end of MetafieldEdge.

***

## Map

### Connections with this object

* <->[MetafieldConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection#returns-edges)
