---
title: ShopifyPaymentsBankAccountEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ShopifyPaymentsBankAccount and a cursor
  during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccountEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccountEdge.md
---

# Shopify​Payments​Bank​Account​Edge

object

An auto-generated type which holds one ShopifyPaymentsBankAccount and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Shopify​Payments​Bank​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount)

  non-null

  The item at the end of ShopifyPaymentsBankAccountEdge.

***

## Map

### Connections with this object

* <->[ShopifyPaymentsBankAccountConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBankAccountConnection#returns-edges)
