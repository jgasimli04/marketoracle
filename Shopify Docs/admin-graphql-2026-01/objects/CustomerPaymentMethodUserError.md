---
title: CustomerPaymentMethodUserError - GraphQL Admin
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
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError.md
---

# Customer​Payment​Method​User​Error

object

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

## Fields

* code

  [Customer​Payment​Method​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodUserErrorCode)

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

* [customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementCreate)

  mutation

  Creates a PayPal billing agreement for a customer.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer.

  * billing​Address

    [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    The billing address.

  * billing​Agreement​Id

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The billing agreement ID from PayPal that starts with 'B-' (for example, `B-1234XXXXX`).

  * inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether the PayPal billing agreement is inactive.

  ***

* [customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate)

  mutation

  Updates a PayPal billing agreement for a customer.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer payment method.

  * billing​Address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

    required

    The billing address.

  ***

***

## <\~> CustomerPaymentMethodUserError Mutations

### Mutated by

* <\~>[customer​Payment​Method​Paypal​Billing​Agreement​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementCreate)
* <\~>[customer​Payment​Method​Paypal​Billing​Agreement​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodPaypalBillingAgreementUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerPaymentMethodUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
