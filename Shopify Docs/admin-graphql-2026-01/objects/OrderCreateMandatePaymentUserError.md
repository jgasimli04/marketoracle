---
title: OrderCreateMandatePaymentUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderCreateMandatePayment`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateMandatePaymentUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateMandatePaymentUserError.md
---

# Order​Create​Mandate​Payment​User​Error

object

An error that occurs during the execution of `OrderCreateMandatePayment`.

## Fields

* code

  [Order​Create​Mandate​Payment​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateMandatePaymentUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

* [order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)

  mutation

  Creates a payment for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) using a stored [`PaymentMandate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate). A payment mandate represents the customer's authorization to charge their payment method for deferred payments, such as pre-orders or try-before-you-buy purchases.

  The mutation processes the payment asynchronously and returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) for tracking the payment status. You can specify the payment amount to collect, and use the [`autoCapture`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-autoCapture) argument to either immediately capture the payment or only authorize it for later capture. Each payment request requires a unique [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment#arguments-idempotencyKey) to prevent duplicate charges. Subsequent calls with the same key return the original payment result rather than creating a new payment.

  Learn more about [deferred payments and payment mandates](https://shopify.dev/docs/apps/build/purchase-options/deferred#charging-the-remaining-balance) and [idempotent requests](https://shopify.dev/docs/api/usage/idempotent-requests).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to collect the balance for.

  * payment​Schedule​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the payment schedule to collect the balance for.

  * idempotency​Key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    A unique key to identify the payment request.

  * mandate​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The mandate ID used for payment.

  * amount

    [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    The payment amount to collect.

  * auto​Capture

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the payment should be authorized or captured. If `false`, then the authorization of the payment is triggered.

  ***

***

## <\~> OrderCreateMandatePaymentUserError Mutations

### Mutated by

* <\~>[order​Create​Mandate​Payment](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateMandatePayment)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderCreateMandatePaymentUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
