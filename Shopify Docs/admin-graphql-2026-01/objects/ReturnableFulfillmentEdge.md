---
title: ReturnableFulfillmentEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ReturnableFulfillment and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentEdge.md
---

# Returnable​Fulfillment​Edge

object

An auto-generated type which holds one ReturnableFulfillment and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Returnable​Fulfillment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment)

  non-null

  The item at the end of ReturnableFulfillmentEdge.

***

## Map

### Connections with this object

* <->[ReturnableFulfillmentConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-edges)
