---
title: CommentEdge - GraphQL Admin
description: An auto-generated type which holds one Comment and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEdge.md'
---

# Comment​Edge

object

An auto-generated type which holds one Comment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Comment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  non-null

  The item at the end of CommentEdge.

***

## Map

### Connections with this object

* <->[CommentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-edges)
