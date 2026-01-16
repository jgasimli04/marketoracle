---
title: FulfillmentOrderRejectionReason - GraphQL Admin
description: The reason for a fulfillment order rejection.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRejectionReason
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRejectionReason.md
---

# Fulfillment​Order​Rejection​Reason

enum

The reason for a fulfillment order rejection.

## Valid values

* INCORRECT\_​ADDRESS

  The fulfillment order was rejected because of an incorrect address.

* INCORRECT\_​PRODUCT\_​INFO

  The fulfillment order was rejected because product information is incorrect to be able to ship.

* INELIGIBLE\_​PRODUCT

  The fulfillment order was rejected because of an ineligible product.

* INTERNATIONAL\_​SHIPPING\_​UNAVAILABLE

  The fulfillment order was rejected because international address shipping hasn't been enabled.

* INVALID\_​CONTACT\_​INFORMATION

  The fulfillment order was rejected because of invalid customer contact information.

* INVALID\_​SKU

  The fulfillment order was rejected because of an invalid SKU.

* INVENTORY\_​OUT\_​OF\_​STOCK

  The fulfillment order was rejected because inventory is out of stock.

* MERCHANT\_​BLOCKED\_​OR\_​SUSPENDED

  The fulfillment order was rejected because the merchant is blocked or suspended.

* MISSING\_​CUSTOMS\_​INFO

  The fulfillment order was rejected because customs information was missing for international shipping.

* ORDER\_​TOO\_​LARGE

  The fulfillment order was rejected because the order is too large.

* OTHER

  The fulfillment order was rejected for another reason.

* PACKAGE\_​PREFERENCE\_​NOT\_​SET

  The fulfillment order was rejected because the package preference was not set.

* PAYMENT\_​DECLINED

  The fulfillment order was rejected because the payment method was declined.

* UNDELIVERABLE\_​DESTINATION

  The fulfillment order was rejected because of an undeliverable destination.

***

## Fields

* [fulfillment​Order​Reject​Fulfillment​Request.reason](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest#arguments-reason)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[fulfillment​Order​Reject​Fulfillment​Request.reason](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest#arguments-reason)
