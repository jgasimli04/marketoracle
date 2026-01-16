---
title: FulfillmentOrderLocationForMoveEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one FulfillmentOrderLocationForMove and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMoveEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMoveEdge.md
---

# Fulfillment​Order​Location​For​Move​Edge

object

An auto-generated type which holds one FulfillmentOrderLocationForMove and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Fulfillment​Order​Location​For​Move!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove)

  non-null

  The item at the end of FulfillmentOrderLocationForMoveEdge.

***

## Map

### Connections with this object

* <->[FulfillmentOrderLocationForMoveConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLocationForMoveConnection#returns-edges)
