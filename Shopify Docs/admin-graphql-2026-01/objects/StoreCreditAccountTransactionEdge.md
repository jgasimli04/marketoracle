---
title: StoreCreditAccountTransactionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one StoreCreditAccountTransaction and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountTransactionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountTransactionEdge.md
---

# Store​Credit​Account​Transaction​Edge

object

An auto-generated type which holds one StoreCreditAccountTransaction and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Store​Credit​Account​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)

  non-null

  The item at the end of StoreCreditAccountTransactionEdge.

***

## Map

### Connections with this object

* <->[StoreCreditAccountTransactionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection#returns-edges)
