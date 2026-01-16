---
title: CustomerPaymentMethodCreateFromDuplicationDataUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `CustomerPaymentMethodCreateFromDuplicationData`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodCreateFromDuplicationDataUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodCreateFromDuplicationDataUserError.md
---

# Customer​Payment​Method​Create​From​Duplication​Data​User​Error

object

An error that occurs during the execution of `CustomerPaymentMethodCreateFromDuplicationData`.

## Fields

* code

  [Customer​Payment​Method​Create​From​Duplication​Data​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodCreateFromDuplicationDataUserErrorCode)

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

## ||-CustomerPaymentMethodCreateFromDuplicationDataUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
