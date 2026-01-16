---
title: ReverseFulfillmentOrderThirdPartyConfirmationStatus - GraphQL Admin
description: The status of a reverse fulfillment order third-party confirmation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderThirdPartyConfirmationStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ReverseFulfillmentOrderThirdPartyConfirmationStatus.md
---

# Reverse​Fulfillment​Order​Third​Party​Confirmation​Status

enum

The status of a reverse fulfillment order third-party confirmation.

## Valid values

* ACCEPTED

  The reverse fulfillment order was accepted by the fulfillment service.

* CANCEL\_​ACCEPTED

  The reverse fulfillment order cancelation was accepted by the fulfillment service.

* CANCEL\_​REJECTED

  The reverse fulfillment order cancelation was rejected by the fulfillment service.

* PENDING\_​ACCEPTANCE

  The reverse fulfillment order is awaiting acceptance by the fulfillment service.

* PENDING\_​CANCELATION

  The reverse fulfillment order is awaiting cancelation by the fulfillment service.

* REJECTED

  The reverse fulfillment order was rejected by the fulfillment service.

***

## Fields

* [Reverse​Fulfillment​Order​Third​Party​Confirmation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderThirdPartyConfirmation#field-ReverseFulfillmentOrderThirdPartyConfirmation.fields.status)

  OBJECT

  The third-party confirmation of a reverse fulfillment order.

***

## Map

### Fields with this enum

* <-|[Reverse​Fulfillment​Order​Third​Party​Confirmation.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderThirdPartyConfirmation#field-ReverseFulfillmentOrderThirdPartyConfirmation.fields.status)
