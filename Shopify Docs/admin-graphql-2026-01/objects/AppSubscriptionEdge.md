---
title: AppSubscriptionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one AppSubscription and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionEdge.md
---

# App​Subscription​Edge

object

An auto-generated type which holds one AppSubscription and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [App​Subscription!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  non-null

  The item at the end of AppSubscriptionEdge.

***

## Map

### Connections with this object

* <->[AppSubscriptionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection#returns-edges)
