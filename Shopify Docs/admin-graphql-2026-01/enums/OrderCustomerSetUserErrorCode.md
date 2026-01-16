---
title: OrderCustomerSetUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `OrderCustomerSetUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCustomerSetUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCustomerSetUserErrorCode.md
---

# Order​Customer​Set​User​Error​Code

enum

Possible error codes that can be returned by `OrderCustomerSetUserError`.

## Valid values

* INVALID

  The input value is invalid.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* NOT\_​PERMITTED

  The customer does not have the permissions to place this order.

* NOT\_​SAVED

  An error ocurred while saving the order.

***

## Fields

* [Order​Customer​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError#field-OrderCustomerSetUserError.fields.code)

  OBJECT

  Errors related to order customer set.

***

## Map

### Fields with this enum

* <-|[Order​Customer​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError#field-OrderCustomerSetUserError.fields.code)
