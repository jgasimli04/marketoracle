---
title: SubscriptionLineEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SubscriptionLine and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLineEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLineEdge.md
---

# Subscription​Line​Edge

object

An auto-generated type which holds one SubscriptionLine and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Subscription​Line!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  non-null

  The item at the end of SubscriptionLineEdge.

***

## Map

### Connections with this object

* <->[SubscriptionLineConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-edges)
