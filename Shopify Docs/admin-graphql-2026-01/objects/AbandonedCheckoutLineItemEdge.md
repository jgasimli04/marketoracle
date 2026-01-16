---
title: AbandonedCheckoutLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one AbandonedCheckoutLineItem and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemEdge.md
---

# Abandoned​Checkout​Line​Item​Edge

object

An auto-generated type which holds one AbandonedCheckoutLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Abandoned​Checkout​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem)

  non-null

  The item at the end of AbandonedCheckoutLineItemEdge.

***

## Map

### Connections with this object

* <->[AbandonedCheckoutLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-edges)
