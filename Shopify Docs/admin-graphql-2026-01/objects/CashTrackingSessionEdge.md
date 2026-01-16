---
title: CashTrackingSessionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CashTrackingSession and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSessionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSessionEdge.md
---

# Cash​Tracking​Session​Edge

object

An auto-generated type which holds one CashTrackingSession and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Cash​Tracking​Session!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession)

  non-null

  The item at the end of CashTrackingSessionEdge.

***

## Map

### Connections with this object

* <->[CashTrackingSessionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection#returns-edges)
