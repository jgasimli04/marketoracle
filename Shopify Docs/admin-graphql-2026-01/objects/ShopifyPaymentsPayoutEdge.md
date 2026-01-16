---
title: ShopifyPaymentsPayoutEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ShopifyPaymentsPayout and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutEdge.md
---

# Shopify​Payments​Payout​Edge

object

An auto-generated type which holds one ShopifyPaymentsPayout and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Shopify​Payments​Payout!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout)

  non-null

  The item at the end of ShopifyPaymentsPayoutEdge.

***

## Map

### Connections with this object

* <->[ShopifyPaymentsPayoutConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-edges)
