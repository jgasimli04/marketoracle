---
title: OrderStagedChangeRemoveShippingLine - GraphQL Admin
description: A shipping line removed during an order edit.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeRemoveShippingLine
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeRemoveShippingLine.md
---

# Order​Staged​Change​Remove​Shipping​Line

object

Requires `read_order_edits` access scope.

A shipping line removed during an order edit.

## Fields

* shipping​Line

  [Shipping​Line!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  non-null

  The removed shipping line.

***

## Map

### Possible type in

* [Order​Staged​Change](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)
