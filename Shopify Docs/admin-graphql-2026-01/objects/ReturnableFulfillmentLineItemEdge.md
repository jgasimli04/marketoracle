---
title: ReturnableFulfillmentLineItemEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReturnableFulfillmentLineItem and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItemEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItemEdge.md
---

# Returnable​Fulfillment​Line​Item​Edge

object

An auto-generated type which holds one ReturnableFulfillmentLineItem and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Returnable​Fulfillment​Line​Item!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItem)

  non-null

  The item at the end of ReturnableFulfillmentLineItemEdge.

***

## Map

### Connections with this object

* <->[ReturnableFulfillmentLineItemConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-edges)
