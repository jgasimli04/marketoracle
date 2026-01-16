---
title: PaymentTermsUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `PaymentTermsUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsUpdateUserError.md
---

# Payment​Terms​Update​User​Error

object

An error that occurs during the execution of `PaymentTermsUpdate`.

## Fields

* code

  [Payment​Terms​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsUpdateUserErrorCode)

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

* [payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate)

  mutation

  Update payment terms on an order. To update payment terms on a draft order, use a draft order mutation and include the request with the `DraftOrderInput`.

  * input

    [Payment​Terms​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput)

    required

    ### Arguments

    The input fields used to update the payment terms.

  ***

***

## <\~> PaymentTermsUpdateUserError Mutations

### Mutated by

* <\~>[payment​Terms​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentTermsUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PaymentTermsUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
