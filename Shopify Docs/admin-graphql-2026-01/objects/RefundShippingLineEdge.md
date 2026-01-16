---
title: RefundShippingLineEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one RefundShippingLine and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLineEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLineEdge.md
---

# Refund​Shipping​Line​Edge

object

An auto-generated type which holds one RefundShippingLine and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Refund​Shipping​Line!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLine)

  non-null

  The item at the end of RefundShippingLineEdge.

***

## Map

### Connections with this object

* <->[RefundShippingLineConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundShippingLineConnection#returns-edges)
