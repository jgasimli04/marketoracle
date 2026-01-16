---
title: ReverseFulfillmentOrderStatus - GraphQL Admin
description: The status of a reverse fulfillment order.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderStatus.md
---

# Reverse​Fulfillment​Order​Status

enum

The status of a reverse fulfillment order.

## Valid values

* CANCELED

  The reverse fulfillment order has been canceled.

* CLOSED

  The reverse fulfillment order has been completed.

* OPEN

  The reverse fulfillment order is in progress.

***

## Fields

* [Reverse​Fulfillment​Order.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.status)

  OBJECT

  A group of one or more items in a return that will be processed at a fulfillment service. There can be more than one reverse fulfillment order for a return at a given location.

***

## Map

### Fields with this enum

* <-|[Reverse​Fulfillment​Order.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.status)
