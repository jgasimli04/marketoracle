---
title: DeliveryProfileEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DeliveryProfile and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileEdge.md
---

# Delivery​Profile​Edge

object

An auto-generated type which holds one DeliveryProfile and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Delivery​Profile!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  non-null

  The item at the end of DeliveryProfileEdge.

***

## Map

### Connections with this object

* <->[DeliveryProfileConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-edges)
