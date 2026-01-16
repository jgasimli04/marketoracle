---
title: ShopPayPaymentRequestReceiptProcessingStatusState - GraphQL Admin
description: The state of the payment request receipt.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptProcessingStatusState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptProcessingStatusState.md
---

# Shop​Pay​Payment​Request​Receipt​Processing​Status​State

enum

The state of the payment request receipt.

## Valid values

* ACTION\_​REQUIRED

  The payment request requires action from the buyer.

* COMPLETED

  The payment request processing completed successfully.

* FAILED

  The payment request processing failed.

* PROCESSING

  The payment request currently being processed.

* READY

  The payment request is ready and queued to be processed.

***

## Fields

* [Shop​Pay​Payment​Request​Receipt​Processing​Status.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus#field-ShopPayPaymentRequestReceiptProcessingStatus.fields.state)

  OBJECT

  The processing status of a Shop Pay payment request. Represents the different states a payment request can be in during its lifecycle, from initial creation through to completion or failure.

***

## Map

### Fields with this enum

* <-|[Shop​Pay​Payment​Request​Receipt​Processing​Status.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus#field-ShopPayPaymentRequestReceiptProcessingStatus.fields.state)
