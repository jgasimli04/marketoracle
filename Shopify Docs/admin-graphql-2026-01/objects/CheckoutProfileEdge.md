---
title: CheckoutProfileEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CheckoutProfile and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfileEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfileEdge.md
---

# Checkout​Profile​Edge

object

An auto-generated type which holds one CheckoutProfile and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Checkout​Profile!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile)

  non-null

  The item at the end of CheckoutProfileEdge.

***

## Map

### Connections with this object

* <->[CheckoutProfileConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutProfileConnection#returns-edges)
