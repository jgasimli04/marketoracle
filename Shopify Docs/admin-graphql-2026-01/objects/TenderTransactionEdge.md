---
title: TenderTransactionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one TenderTransaction and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionEdge.md
---

# Tender​Transaction​Edge

object

An auto-generated type which holds one TenderTransaction and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Tender​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction)

  non-null

  The item at the end of TenderTransactionEdge.

***

## Map

### Connections with this object

* <->[TenderTransactionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-edges)
