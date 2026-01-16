---
title: ShopPayPaymentRequestReceiptProcessingStatusErrorCode - GraphQL Admin
description: 'A standardized error code, independent of the payment provider.'
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptProcessingStatusErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptProcessingStatusErrorCode.md
---

# Shop​Pay​Payment​Request​Receipt​Processing​Status​Error​Code

enum

A standardized error code, independent of the payment provider.

## Valid values

* AMOUNT\_​TOO\_​SMALL

  The amount is too small.

* CALL\_​ISSUER

  Call the card issuer.

* CARD\_​DECLINED

  The card was declined.

* CONFIG\_​ERROR

  There is an error in the gateway or merchant configuration.

* EXPIRED\_​CARD

  The card is expired.

* FRAUD\_​SUSPECTED

  The card issuer has flagged the transaction as potentially fraudulent.

* GENERIC\_​ERROR

  There was an unknown error with processing the payment.

* INCORRECT\_​ADDRESS

  The address does not match the card number.

* INCORRECT\_​CVC

  The CVC does not match the card number.

* INCORRECT\_​NUMBER

  The card number is incorrect.

* INCORRECT\_​PIN

  The entered PIN is incorrect.

* INCORRECT\_​ZIP

  The ZIP or postal code does not match the card number.

* INVALID\_​AMOUNT

  The amount is either too high or too low for the provider.

* INVALID\_​COUNTRY

  The payment method is not available in the customer's country.

* INVALID\_​CVC

  The format of the CVC is incorrect.

* INVALID\_​EXPIRY\_​DATE

  The format of the expiry date is incorrect.

* INVALID\_​NUMBER

  The format of the card number is incorrect.

* PAYMENT\_​METHOD\_​UNAVAILABLE

  The payment method is momentarily unavailable.

* PICK\_​UP\_​CARD

  The card has been reported as lost or stolen, and the card issuer has requested that the merchant keep the card and call the number on the back.

* PROCESSING\_​ERROR

  There was an error while processing the payment.

* TEST\_​MODE\_​LIVE\_​CARD

  A real card was used but the gateway was in test mode.

* THREE\_​D\_​SECURE\_​FAILED

  The 3D Secure check failed.

* UNSUPPORTED\_​FEATURE

  The gateway or merchant configuration doesn't support a feature, such as network tokenization.

***

## Fields

* [Shop​Pay​Payment​Request​Receipt​Processing​Status.errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus#field-ShopPayPaymentRequestReceiptProcessingStatus.fields.errorCode)

  OBJECT

  The processing status of a Shop Pay payment request. Represents the different states a payment request can be in during its lifecycle, from initial creation through to completion or failure.

***

## Map

### Fields with this enum

* <-|[Shop​Pay​Payment​Request​Receipt​Processing​Status.errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptProcessingStatus#field-ShopPayPaymentRequestReceiptProcessingStatus.fields.errorCode)
