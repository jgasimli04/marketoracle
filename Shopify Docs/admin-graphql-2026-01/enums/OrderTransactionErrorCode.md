---
title: OrderTransactionErrorCode - GraphQL Admin
description: 'A standardized error code, independent of the payment provider.'
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionErrorCode.md
---

# Order​Transaction​Error​Code

enum

A standardized error code, independent of the payment provider.

## Valid values

* AMAZON\_​PAYMENTS\_​INVALID\_​PAYMENT\_​METHOD

  The payment method was invalid.

* AMAZON\_​PAYMENTS\_​MAX\_​AMOUNT\_​CHARGED

  The maximum amount has been captured.

* AMAZON\_​PAYMENTS\_​MAX\_​AMOUNT\_​REFUNDED

  The maximum amount has been refunded.

* AMAZON\_​PAYMENTS\_​MAX\_​AUTHORIZATIONS\_​CAPTURED

  The maximum of 10 authorizations has been captured for an order.

* AMAZON\_​PAYMENTS\_​MAX\_​REFUNDS\_​PROCESSED

  The maximum of 10 refunds has been processed for an order.

* AMAZON\_​PAYMENTS\_​ORDER\_​REFERENCE\_​CANCELED

  The order was canceled, which canceled all open authorizations.

* AMAZON\_​PAYMENTS\_​STALE

  The order was not confirmed within three hours.

* CALL\_​ISSUER

  Call the card issuer.

* CARD\_​DECLINED

  The card was declined.

* CONFIG\_​ERROR

  There is an error in the gateway or merchant configuration.

* EXPIRED\_​CARD

  The card is expired.

* GENERIC\_​ERROR

  There was an unknown error with processing the payment.

* INCORRECT\_​ADDRESS

  The address is incorrect.

* INCORRECT\_​CVC

  The card security code (CVC/CVV) is incorrect.

* INCORRECT\_​NUMBER

  The card number is incorrect.

* INCORRECT\_​PIN

  The PIN entered is incorrect.

* INCORRECT\_​ZIP

  The ZIP or postal code doesn't match the one on file.

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

* UNSUPPORTED\_​FEATURE

  The gateway or merchant configuration doesn't support a feature, such as network tokenization.

***

## Fields

* [Order​Transaction.errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.errorCode)

  OBJECT

  The `OrderTransaction` object represents a payment transaction that's associated with an order. An order transaction is a specific action or event that happens within the context of an order, such as a customer paying for a purchase or receiving a refund, or other payment-related activity.

  Use the `OrderTransaction` object to capture the complete lifecycle of a payment, from initial authorization to final settlement, including refunds and currency exchanges. Common use cases for using the `OrderTransaction` object include:

  * Processing new payments for orders
  * Managing payment authorizations and captures
  * Processing refunds for returned items
  * Tracking payment status and errors
  * Managing multi-currency transactions
  * Handling payment gateway integrations

  Each `OrderTransaction` object has a [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind) that defines the type of transaction and a [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus) that indicates the current state of the transaction. The object stores detailed information about payment methods, gateway processing, and settlement details.

  Learn more about [payment processing](https://help.shopify.com/manual/payments) and [payment gateway integrations](https://www.shopify.com/ca/payment-gateways).

***

## Map

### Fields with this enum

* <-|[Order​Transaction.errorCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.errorCode)
