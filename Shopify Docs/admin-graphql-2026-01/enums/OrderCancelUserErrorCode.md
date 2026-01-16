---
title: OrderCancelUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `OrderCancelUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCancelUserErrorCode.md
---

# Order​Cancel​User​Error​Code

enum

Possible error codes that can be returned by `OrderCancelUserError`.

## Valid values

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVALID

  The input value is invalid.

* NO\_​REFUND\_​PERMISSION

  An order refund was requested but the user does not have the refund\_orders permission.

* NO\_​REFUND\_​TO\_​STORE\_​CREDIT\_​PERMISSION

  An order refund was requested but the user does not have the refund\_to\_store\_credit permission.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

* STORE\_​CREDIT\_​REFUND\_​B2B\_​NOT\_​SUPPORTED

  A store credit order refund was requested but the order is a B2B order.

* STORE\_​CREDIT\_​REFUND\_​EXPIRATION\_​IN\_​PAST

  A store credit order refund was requested but the expiration date is in the past.

* STORE\_​CREDIT\_​REFUND\_​MISSING\_​CUSTOMER

  A store credit order refund was requested but the order has no customer.

***

## Fields

* [Order​Cancel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancelUserError#field-OrderCancelUserError.fields.code)

  OBJECT

  Errors related to order cancellation.

***

## Map

### Fields with this enum

* <-|[Order​Cancel​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCancelUserError#field-OrderCancelUserError.fields.code)
