---
title: FulfillmentHoldReason - GraphQL Admin
description: The reason for a fulfillment hold.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentHoldReason
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentHoldReason.md
---

# Fulfillment​Hold​Reason

enum

The reason for a fulfillment hold.

## Valid values

* AWAITING\_​PAYMENT

  The fulfillment hold is applied because payment is pending.

* AWAITING\_​RETURN\_​ITEMS

  The fulfillment hold is applied because of return items not yet received during an exchange.

* HIGH\_​RISK\_​OF\_​FRAUD

  The fulfillment hold is applied because of a high risk of fraud.

* INCORRECT\_​ADDRESS

  The fulfillment hold is applied because of an incorrect address.

* INVENTORY\_​OUT\_​OF\_​STOCK

  The fulfillment hold is applied because inventory is out of stock.

* ONLINE\_​STORE\_​POST\_​PURCHASE\_​CROSS\_​SELL

  The fulfillment hold is applied because of a post purchase upsell offer.

* OTHER

  The fulfillment hold is applied for another reason.

* UNKNOWN\_​DELIVERY\_​DATE

  The fulfillment hold is applied because of an unknown delivery date.

***

## Fields

* [Fulfillment​Hold.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold#field-FulfillmentHold.fields.reason)

  OBJECT

  A fulfillment hold currently applied on a fulfillment order.

* [Fulfillment​Order​Hold​Input.reason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput#fields-reason)

  INPUT OBJECT

  The input fields for the fulfillment hold applied on the fulfillment order.

***

## Map

### Fields with this enum

* <-|[Fulfillment​Hold.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentHold#field-FulfillmentHold.fields.reason)

### Inputs with this enum

* [Fulfillment​Order​Hold​Input.reason](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput#fields-reason)
