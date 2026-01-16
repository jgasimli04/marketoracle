---
title: SubscriptionContractEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one SubscriptionContract and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractEdge.md
---

# Subscription​Contract​Edge

object

An auto-generated type which holds one SubscriptionContract and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Subscription​Contract!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  non-null

  The item at the end of SubscriptionContractEdge.

***

## Map

### Connections with this object

* <->[SubscriptionContractConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection#returns-edges)
