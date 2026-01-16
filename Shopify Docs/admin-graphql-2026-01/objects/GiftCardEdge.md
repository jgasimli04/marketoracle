---
title: GiftCardEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one GiftCard and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardEdge.md'
---

# Gift​Card​Edge

object

An auto-generated type which holds one GiftCard and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Gift​Card!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  non-null

  The item at the end of GiftCardEdge.

***

## Map

### Connections with this object

* <->[GiftCardConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-edges)
