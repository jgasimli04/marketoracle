---
title: OrderCreateFulfillmentStatus - GraphQL Admin
description: The order's status in terms of fulfilled line items.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateFulfillmentStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateFulfillmentStatus.md
---

# Order​Create​Fulfillment​Status

enum

The order's status in terms of fulfilled line items.

## Valid values

* FULFILLED

  Every line item in the order has been fulfilled.

* PARTIAL

  At least one line item in the order has been fulfilled.

* RESTOCKED

  Every line item in the order has been restocked and the order canceled.

***

## Fields

* [Order​Create​Order​Input.fulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-fulfillmentStatus)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Inputs with this enum

* [Order​Create​Order​Input.fulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-fulfillmentStatus)
