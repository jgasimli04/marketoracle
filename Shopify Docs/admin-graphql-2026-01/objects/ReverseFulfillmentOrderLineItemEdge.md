---
title: ReverseFulfillmentOrderLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReverseFulfillmentOrderLineItem and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItemEdge.md
---

# Reverse​Fulfillment​Order​Line​Item​Edge

object

An auto-generated type which holds one ReverseFulfillmentOrderLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Reverse​Fulfillment​Order​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  non-null

  The item at the end of ReverseFulfillmentOrderLineItemEdge.

***

## Map

### Connections with this object

* <->[ReverseFulfillmentOrderLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-edges)
