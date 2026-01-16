---
title: DeliveryPromiseParticipantEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DeliveryPromiseParticipant and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipantEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipantEdge.md
---

# Delivery​Promise​Participant​Edge

object

An auto-generated type which holds one DeliveryPromiseParticipant and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Delivery​Promise​Participant!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipant)

  non-null

  The item at the end of DeliveryPromiseParticipantEdge.

***

## Map

### Connections with this object

* <->[DeliveryPromiseParticipantConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryPromiseParticipantConnection#returns-edges)
