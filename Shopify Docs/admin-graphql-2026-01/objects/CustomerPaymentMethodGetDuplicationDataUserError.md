---
title: CustomerPaymentMethodGetDuplicationDataUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `CustomerPaymentMethodGetDuplicationData`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetDuplicationDataUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetDuplicationDataUserError.md
---

# Customer​Payment​Method​Get​Duplication​Data​User​Error

object

An error that occurs during the execution of `CustomerPaymentMethodGetDuplicationData`.

## Fields

* code

  [Customer​Payment​Method​Get​Duplication​Data​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodGetDuplicationDataUserErrorCode)

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

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerPaymentMethodGetDuplicationDataUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
