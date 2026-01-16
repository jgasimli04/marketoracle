---
title: CustomerPaymentMethodEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CustomerPaymentMethod and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodEdge.md
---

# Customer​Payment​Method​Edge

object

An auto-generated type which holds one CustomerPaymentMethod and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Customer​Payment​Method!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  non-null

  The item at the end of CustomerPaymentMethodEdge.

***

## Map

### Connections with this object

* <->[CustomerPaymentMethodConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-edges)
