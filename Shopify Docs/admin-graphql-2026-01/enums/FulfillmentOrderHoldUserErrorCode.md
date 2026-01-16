---
title: FulfillmentOrderHoldUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `FulfillmentOrderHoldUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode.md
---

# Fulfillment​Order​Hold​User​Error​Code

enum

Possible error codes that can be returned by `FulfillmentOrderHoldUserError`.

## Valid values

* DUPLICATE\_​FULFILLMENT\_​HOLD\_​HANDLE

  The handle provided for the fulfillment hold is already in use by this app for another hold on this fulfillment order.

* DUPLICATED\_​FULFILLMENT\_​ORDER\_​LINE\_​ITEMS

  The fulfillment order line items are not unique.

* FULFILLMENT\_​ORDER\_​HOLD\_​LIMIT\_​REACHED

  The maximum number of fulfillment holds for this fulfillment order has been reached for this app. An app can only have up to 10 holds on a single fulfillment order at any one time.

* FULFILLMENT\_​ORDER\_​NOT\_​FOUND

  The fulfillment order could not be found.

* FULFILLMENT\_​ORDER\_​NOT\_​SPLITTABLE

  The fulfillment order is not in a splittable state.

* GREATER\_​THAN\_​ZERO

  The fulfillment order line item quantity must be greater than 0.

* INVALID\_​LINE\_​ITEM\_​QUANTITY

  The fulfillment order line item quantity is invalid.

* TAKEN

  The input value is already taken.

***

## Fields

* [Fulfillment​Order​Hold​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError#field-FulfillmentOrderHoldUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `FulfillmentOrderHold`.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Order​Hold​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError#field-FulfillmentOrderHoldUserError.fields.code)
