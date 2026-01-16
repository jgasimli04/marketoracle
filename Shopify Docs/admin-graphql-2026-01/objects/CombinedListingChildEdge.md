---
title: CombinedListingChildEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CombinedListingChild and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChildEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChildEdge.md
---

# Combined​Listing​Child​Edge

object

An auto-generated type which holds one CombinedListingChild and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Combined​Listing​Child!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChild)

  non-null

  The item at the end of CombinedListingChildEdge.

***

## Map

### Connections with this object

* <->[CombinedListingChildConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-edges)
