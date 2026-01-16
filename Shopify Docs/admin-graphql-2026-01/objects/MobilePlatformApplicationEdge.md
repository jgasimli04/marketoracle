---
title: MobilePlatformApplicationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one MobilePlatformApplication and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationEdge.md
---

# Mobile​Platform​Application​Edge

object

An auto-generated type which holds one MobilePlatformApplication and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Mobile​Platform​Application!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  non-null

  The item at the end of MobilePlatformApplicationEdge.

***

## Map

### Connections with this object

* <->[MobilePlatformApplicationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-edges)
