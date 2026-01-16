---
title: OrderPaymentStatus - GraphQL Admin
description: The status of a customer's payment for an order.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus.md
---

# Order​Payment​Status

object

Requires `read_orders` access scope.

The status of a customer's payment for an order.

## Fields

* error​Message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A message describing an error during the asynchronous processing of a payment.

* payment​Reference​Id

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The ID of the payment, initially returned by an `orderCreateMandatePayment` or `orderCreatePayment` mutation.

* status

  [Order​Payment​Status​Result!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderPaymentStatusResult)

  non-null

  The status of the payment.

* transactions

  [\[Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  non-null

  The transaction associated with the payment.

* translated​Error​Message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A translated message describing an error during the asynchronous processing of a payment.

***

## Map

No referencing types

***

## Queries

* [order​Payment​Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderPaymentStatus)

  query

  Retrieves the status of a deferred payment by its payment reference ID. Use this query to monitor the processing status of payments that are initiated through payment mutations. Deferred payments are called [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms) in the API.

  The query returns an [`OrderPaymentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderPaymentStatus) object that includes the current payment status, any error messages, and associated transactions. Poll this query to track [asynchronous payment processing](https://shopify.dev/docs/apps/build/payments/processing) after initiating a deferred payment.

  * payment​Reference​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Unique identifier returned by orderCreatePayment.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ID of the order for which the payment was initiated.

  ***

***

## \<?>OrderPaymentStatus Queries

### Queried by

* \<?>[order​Payment​Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderPaymentStatus)
