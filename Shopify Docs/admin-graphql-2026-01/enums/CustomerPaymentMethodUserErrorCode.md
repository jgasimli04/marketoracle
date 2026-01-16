---
title: CustomerPaymentMethodUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `CustomerPaymentMethodUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodUserErrorCode.md
---

# Customer​Payment​Method​User​Error​Code

enum

Possible error codes that can be returned by `CustomerPaymentMethodUserError`.

## Valid values

* INVALID

  The input value is invalid.

* PRESENT

  The input value needs to be blank.

* TAKEN

  The input value is already taken.

***

## Fields

* [Customer​Payment​Method​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError#field-CustomerPaymentMethodUserError.fields.code)

  OBJECT

  An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

***

## Map

### Fields with this enum

* <-|[Customer​Payment​Method​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodUserError#field-CustomerPaymentMethodUserError.fields.code)
