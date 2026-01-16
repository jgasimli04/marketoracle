---
title: ChannelEdge - GraphQL Admin
description: An auto-generated type which holds one Channel and a cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelEdge'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelEdge.md'
---

# Channel​Edge

object

An auto-generated type which holds one Channel and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Channel!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  non-null

  The item at the end of ChannelEdge.

***

## Map

### Connections with this object

* <->[ChannelConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-edges)
