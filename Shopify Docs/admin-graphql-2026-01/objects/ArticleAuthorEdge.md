---
title: ArticleAuthorEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ArticleAuthor and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthorEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthorEdge.md
---

# Article​Author​Edge

object

An auto-generated type which holds one ArticleAuthor and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Article​Author!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthor)

  non-null

  The item at the end of ArticleAuthorEdge.

***

## Map

### Connections with this object

* <->[ArticleAuthorConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection#returns-edges)
