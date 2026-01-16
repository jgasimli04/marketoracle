---
title: GiftCardTransactionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one GiftCardTransaction and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionEdge.md
---

# Gift​Card​Transaction​Edge

object

An auto-generated type which holds one GiftCardTransaction and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Gift​Card​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction)

  non-null

  The item at the end of GiftCardTransactionEdge.

***

## Map

### Connections with this object

* <->[GiftCardTransactionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection#returns-edges)
