---
title: PaymentTermsCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `PaymentTermsCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsCreateUserError.md
---

# Payment​Terms​Create​User​Error

object

An error that occurs during the execution of `PaymentTermsCreate`.

## Fields

* code

  [Payment​Terms​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsCreateUserErrorCode)

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

* [payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsCreate)

  mutation

  Create payment terms on an order. To create payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * reference​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the reference orderId to add the payment terms for.

  * payment​Terms​Attributes

    [Payment​Terms​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput)

    required

    The attributes used to create the payment terms.

  ***

***

## <\~> PaymentTermsCreateUserError Mutations

### Mutated by

* <\~>[payment​Terms​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PaymentTermsCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
