---
title: StoreCreditAccountEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one StoreCreditAccount and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountEdge.md
---

# Store​Credit​Account​Edge

object

An auto-generated type which holds one StoreCreditAccount and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

  non-null

  The item at the end of StoreCreditAccountEdge.

***

## Map

### Connections with this object

* <->[StoreCreditAccountConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-edges)
