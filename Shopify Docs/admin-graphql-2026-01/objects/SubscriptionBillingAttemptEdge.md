---
title: SubscriptionBillingAttemptEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SubscriptionBillingAttempt and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptEdge.md
---

# Subscription​Billing​Attempt​Edge

object

An auto-generated type which holds one SubscriptionBillingAttempt and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Subscription​Billing​Attempt!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  non-null

  The item at the end of SubscriptionBillingAttemptEdge.

***

## Map

### Connections with this object

* <->[SubscriptionBillingAttemptConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection#returns-edges)
