---
title: OrderTransactionKind - GraphQL Admin
description: The different kinds of order transactions.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind.md
---

# Order​Transaction​Kind

enum

The different kinds of order transactions.

## Valid values

* AUTHORIZATION

  An amount reserved against the cardholder's funding source. Money does not change hands until the authorization is captured.

* CAPTURE

  A transfer of the money that was reserved by an authorization.

* CHANGE

  The money returned to the customer when they've paid too much during a cash transaction.

* EMV\_​AUTHORIZATION

  An authorization for a payment taken with an EMV credit card reader.

* REFUND

  A partial or full return of captured funds to the cardholder. A refund can happen only after a capture is processed.

* SALE

  An authorization and capture performed together in a single step.

* SUGGESTED\_​REFUND

  A suggested refund transaction that can be used to create a refund.

* VOID

  A cancelation of an authorization transaction.

***

## Fields

* [Order​Create​Order​Transaction​Input.kind](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-kind)

  INPUT OBJECT

  The input fields for a transaction to create for an order.

* [Order​Transaction.kind](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.kind)

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

* [Order​Transaction​Input.kind](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderTransactionInput#fields-kind)

  INPUT OBJECT

  The input fields for the information needed to create an order transaction.

***

## Map

### Fields with this enum

* <-|[Order​Transaction.kind](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.kind)

### Inputs with this enum

* [Order​Create​Order​Transaction​Input.kind](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-kind)
* [Order​Transaction​Input.kind](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderTransactionInput#fields-kind)
