---
title: PaymentTermsDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `PaymentTermsDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsDeleteUserError.md
---

# Payment​Terms​Delete​User​Error

object

An error that occurs during the execution of `PaymentTermsDelete`.

## Fields

* code

  [Payment​Terms​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsDeleteUserErrorCode)

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

* [payment​Terms​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsDelete)

  mutation

  Delete payment terms for an order. To delete payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsDeleteInput)

    required

    ### Arguments

    The input fields used to delete the payment terms.

  ***

***

## <\~> PaymentTermsDeleteUserError Mutations

### Mutated by

* <\~>[payment​Terms​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PaymentTermsDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
