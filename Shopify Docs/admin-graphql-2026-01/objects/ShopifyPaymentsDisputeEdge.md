---
title: ShopifyPaymentsDisputeEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ShopifyPaymentsDispute and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEdge.md
---

# Shopify​Payments​Dispute​Edge

object

An auto-generated type which holds one ShopifyPaymentsDispute and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Shopify​Payments​Dispute!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute)

  non-null

  The item at the end of ShopifyPaymentsDisputeEdge.

***

## Map

### Connections with this object

* <->[ShopifyPaymentsDisputeConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-edges)
