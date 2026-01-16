---
title: PaymentScheduleEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one PaymentSchedule and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentScheduleEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentScheduleEdge.md
---

# Payment​Schedule​Edge

object

An auto-generated type which holds one PaymentSchedule and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Payment​Schedule!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule)

  non-null

  The item at the end of PaymentScheduleEdge.

***

## Map

### Connections with this object

* <->[PaymentScheduleConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-edges)
