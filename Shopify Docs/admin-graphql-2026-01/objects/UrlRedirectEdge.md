---
title: UrlRedirectEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one UrlRedirect and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectEdge.md'
---

# Url​Redirect​Edge

object

An auto-generated type which holds one UrlRedirect and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Url​Redirect!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  non-null

  The item at the end of UrlRedirectEdge.

***

## Map

### Connections with this object

* <->[UrlRedirectConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-edges)
