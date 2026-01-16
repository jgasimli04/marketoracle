---
title: CustomerPaymentMethodRemoteUserError - GraphQL Admin
description: >-
  An error in the input of a mutation. Mutations return `UserError` objects to
  indicate validation failures, such as invalid field values or business logic
  violations, that prevent the operation from completing.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodRemoteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodRemoteUserError.md
---

# Customer​Payment​Method​Remote​User​Error

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

## Fields

* code

  [Customer​Payment​Method​Remote​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodRemoteUserErrorCode)

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

* [customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate)

  mutation

  Creates a customer payment method using identifiers from remote payment gateways like Stripe, Authorize.Net, or Braintree. Imports existing payment methods from external gateways and associates them with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) objects in Shopify.

  The operation processes payment methods asynchronously. The returned [`CustomerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod) initially has incomplete details while Shopify validates and processes the remote gateway information. Use the [`customerPaymentMethod`](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerPaymentMethod) query to retrieve the payment method status until all details are available or the payment method is revoked.

  Learn more about [migrating customer payment methods from remote gateways](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/migrate-to-subscriptions-api/migrate-customer-information#step-2-import-payment-methods-for-customers).

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * remote​Reference

    [Customer​Payment​Method​Remote​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerPaymentMethodRemoteInput)

    required

    Remote gateway payment method details.

  ***

***

## <\~> CustomerPaymentMethodRemoteUserError Mutations

### Mutated by

* <\~>[customer​Payment​Method​Remote​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodRemoteCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerPaymentMethodRemoteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
