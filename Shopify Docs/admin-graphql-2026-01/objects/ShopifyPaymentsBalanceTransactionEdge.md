---
title: ShopifyPaymentsBalanceTransactionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ShopifyPaymentsBalanceTransaction and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionEdge.md
---

# Shopify​Payments​Balance​Transaction​Edge

object

An auto-generated type which holds one ShopifyPaymentsBalanceTransaction and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Shopify​Payments​Balance​Transaction!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction)

  non-null

  The item at the end of ShopifyPaymentsBalanceTransactionEdge.

***

## Map

### Connections with this object

* <->[ShopifyPaymentsBalanceTransactionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-edges)
