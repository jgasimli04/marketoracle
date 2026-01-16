---
title: ArticleEdge - GraphQL Admin
description: An auto-generated type which holds one Article and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleEdge.md'
---

# Article​Edge

object

An auto-generated type which holds one Article and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Article!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  non-null

  The item at the end of ArticleEdge.

***

## Map

### Connections with this object

* <->[ArticleConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection#returns-edges)
