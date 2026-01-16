---
title: FulfillmentOrdersRerouteUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `FulfillmentOrdersRerouteUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrdersRerouteUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrdersRerouteUserErrorCode.md
---

# Fulfillment​Orders​Reroute​User​Error​Code

enum

Possible error codes that can be returned by `FulfillmentOrdersRerouteUserError`.

## Valid values

* CANNOT\_​MOVE\_​FULFILLMENT\_​ORDER\_​WITH\_​REPORTED\_​PROGRESS

  Cannot move a fulfillment order that has progress reported.

* CANNOT\_​REASSIGN\_​LOCATION\_​FOR\_​FULFILLMENT\_​ORDERS

  Cannot reassign location for fulfillment orders.

* DELIVERY\_​METHOD\_​TYPE\_​NOT\_​SUPPORTED

  The delivery method type is not supported.

* FULFILLMENT\_​ORDER\_​NOT\_​FOUND

  Fulfillment order could not be found.

* FULFILLMENT\_​ORDERS\_​MUST\_​BELONG\_​TO\_​SAME\_​LOCATION

  Fulfillment orders must belong to the same location.

* FULFILLMENT\_​ORDERS\_​NOT\_​FROM\_​THE\_​SAME\_​ORDER

  Fulfillment orders are not from the same order.

* FULFILLMENT\_​ORDERS\_​STATE\_​NOT\_​SUPPORTED

  All fulfillment orders must have status and request status compatible with reroutable states.

* NO\_​FULFILLMENT\_​ORDER\_​IDS

  No fulfillment order IDs were provided.

* SINGLE\_​LOCATION\_​SHOP\_​NOT\_​SUPPORTED

  This feature is only supported for multi-location shops.

***

## Fields

* [Fulfillment​Orders​Reroute​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersRerouteUserError#field-FulfillmentOrdersRerouteUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrdersReroute`.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Orders​Reroute​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersRerouteUserError#field-FulfillmentOrdersRerouteUserError.fields.code)
