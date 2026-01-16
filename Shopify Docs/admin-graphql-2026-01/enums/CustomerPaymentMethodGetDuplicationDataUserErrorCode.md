---
title: CustomerPaymentMethodGetDuplicationDataUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `CustomerPaymentMethodGetDuplicationDataUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodGetDuplicationDataUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPaymentMethodGetDuplicationDataUserErrorCode.md
---

# Customer​Payment​Method​Get​Duplication​Data​User​Error​Code

enum

Possible error codes that can be returned by `CustomerPaymentMethodGetDuplicationDataUserError`.

## Valid values

* CUSTOMER\_​DOES\_​NOT\_​EXIST

  Customer doesn't exist.

* INVALID\_​INSTRUMENT

  Invalid payment instrument.

* INVALID\_​ORGANIZATION\_​SHOP

  Must be targeted to another shop in the same organization.

* PAYMENT\_​METHOD\_​DOES\_​NOT\_​EXIST

  Payment method doesn't exist.

* SAME\_​SHOP

  Target shop cannot be the same as the source.

* TOO\_​MANY\_​REQUESTS

  Too many requests.

***

## Fields

* [Customer​Payment​Method​Get​Duplication​Data​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetDuplicationDataUserError#field-CustomerPaymentMethodGetDuplicationDataUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `CustomerPaymentMethodGetDuplicationData`.

***

## Map

### Fields with this enum

* <-|[Customer​Payment​Method​Get​Duplication​Data​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodGetDuplicationDataUserError#field-CustomerPaymentMethodGetDuplicationDataUserError.fields.code)
