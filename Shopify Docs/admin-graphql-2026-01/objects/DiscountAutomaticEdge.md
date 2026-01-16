---
title: DiscountAutomaticEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one DiscountAutomatic and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticEdge.md
---

# Discount​Automatic​Edge

object

An auto-generated type which holds one DiscountAutomatic and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Discount​Automatic!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

  non-null

  The item at the end of DiscountAutomaticEdge.

***

## Map

### Connections with this object

* <->[DiscountAutomaticConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticConnection#returns-edges)
