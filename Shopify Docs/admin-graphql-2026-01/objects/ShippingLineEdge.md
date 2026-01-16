---
title: ShippingLineEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ShippingLine and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineEdge'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineEdge.md
---

# Shipping​Line​Edge

object

An auto-generated type which holds one ShippingLine and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Shipping​Line!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  non-null

  The item at the end of ShippingLineEdge.

***

## Map

### Connections with this object

* <->[ShippingLineConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShippingLineConnection#returns-edges)
