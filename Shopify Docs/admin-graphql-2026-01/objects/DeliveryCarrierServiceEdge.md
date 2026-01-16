---
title: DeliveryCarrierServiceEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DeliveryCarrierService and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceEdge.md
---

# Delivery​Carrier​Service​Edge

object

An auto-generated type which holds one DeliveryCarrierService and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Delivery​Carrier​Service!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  non-null

  The item at the end of DeliveryCarrierServiceEdge.

***

## Map

### Connections with this object

* <->[DeliveryCarrierServiceConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#returns-edges)
