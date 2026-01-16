---
title: SubscriptionBillingCycleEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SubscriptionBillingCycle and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEdge.md
---

# Subscription​Billing​Cycle​Edge

object

An auto-generated type which holds one SubscriptionBillingCycle and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Subscription​Billing​Cycle!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  non-null

  The item at the end of SubscriptionBillingCycleEdge.

***

## Map

### Connections with this object

* <->[SubscriptionBillingCycleConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-edges)
