---
title: WebhookSubscriptionEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one WebhookSubscription and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionEdge.md
---

# Webhook​Subscription​Edge

object

An auto-generated type which holds one WebhookSubscription and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Webhook​Subscription!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  non-null

  The item at the end of WebhookSubscriptionEdge.

***

## Map

### Connections with this object

* <->[WebhookSubscriptionConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-edges)
