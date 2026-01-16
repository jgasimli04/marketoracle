---
title: CustomerPaymentMethodRemoteUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `CustomerPaymentMethodRemoteUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodRemoteUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodRemoteUserErrorCode.md
---

# Customer​Payment​Method​Remote​User​Error​Code

enum

Possible error codes that can be returned by `CustomerPaymentMethodRemoteUserError`.

## Valid values

* AUTHORIZE\_​NET\_​NOT\_​ENABLED\_​FOR\_​SUBSCRIPTIONS

  Authorize.net is not enabled for subscriptions.

* BRAINTREE\_​NOT\_​ENABLED\_​FOR\_​SUBSCRIPTIONS

  Braintree is not enabled for subscriptions.

* EXACTLY\_​ONE\_​REMOTE\_​REFERENCE\_​REQUIRED

  Exactly one remote reference is required.

* INVALID

  The input value is invalid.

* PRESENT

  The input value needs to be blank.

* TAKEN

  The input value is already taken.

***

## Fields

* [Customer​Payment​Method​Remote​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodRemoteUserError#field-CustomerPaymentMethodRemoteUserError.fields.code)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

***

## Map

### Fields with this enum

* <-|[Customer​Payment​Method​Remote​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodRemoteUserError#field-CustomerPaymentMethodRemoteUserError.fields.code)
