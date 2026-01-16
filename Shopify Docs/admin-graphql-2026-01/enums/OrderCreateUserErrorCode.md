---
title: OrderCreateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `OrderCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCreateUserErrorCode.md
---

# Order​Create​User​Error​Code

enum

Possible error codes that can be returned by `OrderCreateUserError`.

## Valid values

* FULFILLMENT\_​SERVICE\_​INVALID

  Indicates that the line item fulfillment service handle is invalid.

* INVALID

  The input value is invalid.

* INVENTORY\_​CLAIM\_​FAILED

  Indicates that the inventory claim failed during order creation.

* PROCESSED\_​AT\_​INVALID

  Indicates that the processed\_at field is invalid, such as when it references a future date.

* REDUNDANT\_​CUSTOMER\_​FIELDS

  Indicates that both customer\_id and customer were provided - only one is permitted.

* SHOP\_​DORMANT

  Indicates that the shop is dormant and cannot create orders.

* TAX\_​LINE\_​RATE\_​MISSING

  Indicates that the tax line rate is missing - only enforced for LineItem or ShippingLine-level tax lines.

***

## Fields

* [Order​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateUserError#field-OrderCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `OrderCreate`.

***

## Map

### Fields with this enum

* <-|[Order​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCreateUserError#field-OrderCreateUserError.fields.code)
