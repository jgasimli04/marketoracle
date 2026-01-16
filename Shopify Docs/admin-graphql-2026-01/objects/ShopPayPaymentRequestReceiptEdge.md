---
title: ShopPayPaymentRequestReceiptEdge - GraphQL Admin
description: >-
  An auto-generated type which holds one ShopPayPaymentRequestReceipt and a
  cursor during pagination.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptEdge
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptEdge.md
---

# Shop​Pay​Payment​Request​Receipt​Edge

object

An auto-generated type which holds one ShopPayPaymentRequestReceipt and a cursor during pagination.

## Fields

* cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The position of each node in an array, used in [pagination](https://shopify.dev/api/usage/pagination-graphql).

* node

  [Shop​Pay​Payment​Request​Receipt!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt)

  non-null

  The item at the end of ShopPayPaymentRequestReceiptEdge.

***

## Map

### Connections with this object

* <->[ShopPayPaymentRequestReceiptConnection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopPayPaymentRequestReceiptConnection#returns-edges)
