---
title: AppInstallationEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one AppInstallation and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallationEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallationEdge.md
---

# App​Installation​Edge

object

An auto-generated type which holds one AppInstallation and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [App​Installation!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

  non-null

  The item at the end of AppInstallationEdge.

***

## Map

### Connections with this object

* <->[AppInstallationConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection#returns-edges)
