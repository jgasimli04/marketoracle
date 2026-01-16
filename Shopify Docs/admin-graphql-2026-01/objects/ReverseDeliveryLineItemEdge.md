---
title: ReverseDeliveryLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReverseDeliveryLineItem and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItemEdge.md
---

# Reverse​Delivery​Line​Item​Edge

object

An auto-generated type which holds one ReverseDeliveryLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Reverse​Delivery​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItem)

  non-null

  The item at the end of ReverseDeliveryLineItemEdge.

***

## Map

### Connections with this object

* <->[ReverseDeliveryLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-edges)
