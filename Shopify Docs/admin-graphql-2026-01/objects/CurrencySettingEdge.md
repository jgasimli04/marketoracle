---
title: CurrencySettingEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one CurrencySetting and a cursor during
  pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySettingEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySettingEdge.md
---

# Currency​Setting​Edge

object

An auto-generated type which holds one CurrencySetting and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Currency​Setting!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting)

  non-null

  The item at the end of CurrencySettingEdge.

***

## Map

### Connections with this object

* <->[CurrencySettingConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-edges)
