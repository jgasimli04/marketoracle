---
title: CustomerPaymentMethodGetUpdateUrlUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `CustomerPaymentMethodGetUpdateUrl`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetUpdateUrlUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetUpdateUrlUserError.md
---

# Customer​Payment​Method​Get​Update​Url​User​Error

object

An error that occurs during the execution of `CustomerPaymentMethodGetUpdateUrl`.

## Fields

* code

  [Customer​Payment​Method​Get​Update​Url​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodGetUpdateUrlUserErrorCode)

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

* [customer​Payment​Method​Get​Update​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodGetUpdateUrl)

  mutation

  Returns a URL that allows the customer to update a specific payment method.

  Currently, `customerPaymentMethodGetUpdateUrl` only supports Shop Pay.

  * customer​Payment​Method​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment method to be updated.

  ***

***

## <\~> CustomerPaymentMethodGetUpdateUrlUserError Mutations

### Mutated by

* <\~>[customer​Payment​Method​Get​Update​Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerPaymentMethodGetUpdateUrl)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerPaymentMethodGetUpdateUrlUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
