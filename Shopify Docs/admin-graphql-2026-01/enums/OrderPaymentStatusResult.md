---
title: OrderPaymentStatusResult - GraphQL Admin
description: The type of a payment status.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderPaymentStatusResult
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderPaymentStatusResult.md
---

# Order​Payment​Status​Result

enum

The type of a payment status.

## Valid values

* AUTHORIZED

  The payment is authorized.

* CAPTURED

  The payment is captured.

* ERROR

  There was an error initiating the payment.

* INITIATED

  The payment is awaiting processing.

* PENDING

  The payment is pending with the provider, and may take a while.

* PROCESSING

  The payment is still being processed.

* PURCHASED

  The payment is in purchased status.

* REDIRECT\_​REQUIRED

  Redirect required.

* REFUNDED

  The payment is refunded.

* RETRYABLE

  Payment can be retried.

* SUCCESS

  The payment succeeded.

* UNKNOWN

  Status is unknown.

* VOIDED

  The payment is voided.

***

## Fields

* [Order​Payment​Status.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus#field-OrderPaymentStatus.fields.status)

  OBJECT

  The status of a customer's payment for an order.

***

## Map

### Fields with this enum

* <-|[Order​Payment​Status.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus#field-OrderPaymentStatus.fields.status)
