---
title: FulfillmentOrderEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one FulfillmentOrder and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderEdge.md
---

# Fulfillment​Order​Edge

object

An auto-generated type which holds one FulfillmentOrder and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Fulfillment​Order!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  non-null

  The item at the end of FulfillmentOrderEdge.

***

## Map

### Connections with this object

* <->[FulfillmentOrderConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#returns-edges)
