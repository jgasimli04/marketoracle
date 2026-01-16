---
title: ReverseFulfillmentOrderEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReverseFulfillmentOrder and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderEdge.md
---

# Reverse​Fulfillment​Order​Edge

object

An auto-generated type which holds one ReverseFulfillmentOrder and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Reverse​Fulfillment​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder)

  non-null

  The item at the end of ReverseFulfillmentOrderEdge.

***

## Map

### Connections with this object

* <->[ReverseFulfillmentOrderConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection#returns-edges)
