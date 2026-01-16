---
title: ReverseDeliveryEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReverseDelivery and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryEdge.md
---

# Reverse​Delivery​Edge

object

An auto-generated type which holds one ReverseDelivery and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Reverse​Delivery!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  non-null

  The item at the end of ReverseDeliveryEdge.

***

## Map

### Connections with this object

* <->[ReverseDeliveryConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-edges)
