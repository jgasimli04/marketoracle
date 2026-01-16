---
title: OrderTransactionStatus - GraphQL Admin
description: The different states that an `OrderTransaction` can have.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus.md
---

# Order​Transaction​Status

enum

The different states that an `OrderTransaction` can have.

## Valid values

* AWAITING\_​RESPONSE

  Awaiting a response.

* ERROR

  There was an error while processing the transaction.

* FAILURE

  The transaction failed.

* PENDING

  The transaction is pending.

* SUCCESS

  The transaction succeeded.

* UNKNOWN

  The transaction status is unknown.

***

## Fields

* [Order​Create​Order​Transaction​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-status)

  INPUT OBJECT

  The input fields for a transaction to create for an order.

* [Order​Transaction.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status)

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

* <-|[Order​Transaction.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status)

### Inputs with this enum

* [Order​Create​Order​Transaction​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-status)
