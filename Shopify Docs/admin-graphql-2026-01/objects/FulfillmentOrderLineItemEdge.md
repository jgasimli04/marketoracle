---
title: FulfillmentOrderLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one FulfillmentOrderLineItem and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemEdge.md
---

# Fulfillment​Order​Line​Item​Edge

object

An auto-generated type which holds one FulfillmentOrderLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Fulfillment​Order​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem)

  non-null

  The item at the end of FulfillmentOrderLineItemEdge.

***

## Map

### Connections with this object

* <->[FulfillmentOrderLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection#returns-edges)
