---
title: OrderCreateManualPaymentOrderCreateManualPaymentErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `OrderCreateManualPaymentOrderCreateManualPaymentError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateManualPaymentOrderCreateManualPaymentErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateManualPaymentOrderCreateManualPaymentErrorCode.md
---

# Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error​Code

enum

Possible error codes that can be returned by `OrderCreateManualPaymentOrderCreateManualPaymentError`.

## Valid values

* AMOUNT\_​EXCEEDS\_​BALANCE

  Amount exceeds the remaining balance.

* AMOUNT\_​NOT\_​POSITIVE

  Amount must be positive.

* GATEWAY\_​NOT\_​FOUND

  Payment gateway is not found.

* ORDER\_​IS\_​TEMPORARILY\_​UNAVAILABLE

  Order is temporarily unavailable.

* ORDER\_​NOT\_​FOUND

  Order is not found.

* PROCESSED\_​AT\_​INVALID

  Indicates that the processedAt field is invalid, such as when it references a future date.

***

## Fields

* [Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateManualPaymentOrderCreateManualPaymentError#field-OrderCreateManualPaymentOrderCreateManualPaymentError.fields.code)

  OBJECT

  An error that occurs during the execution of a order create manual payment mutation.

***

## Map

### Fields with this enum

* <-|[Order​Create​Manual​Payment​Order​Create​Manual​Payment​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateManualPaymentOrderCreateManualPaymentError#field-OrderCreateManualPaymentOrderCreateManualPaymentError.fields.code)
