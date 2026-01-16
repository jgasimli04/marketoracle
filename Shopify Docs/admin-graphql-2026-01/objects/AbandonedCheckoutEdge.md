---
title: AbandonedCheckoutEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one AbandonedCheckout and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutEdge.md
---

# Abandoned​Checkout​Edge

object

An auto-generated type which holds one AbandonedCheckout and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Abandoned​Checkout!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout)

  non-null

  The item at the end of AbandonedCheckoutEdge.

***

## Map

### Connections with this object

* <->[AbandonedCheckoutConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-edges)
