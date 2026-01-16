---
title: PriceListPriceUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `PriceListPriceUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceUserErrorCode.md
---

# Price​List​Price​User​Error​Code

enum

Possible error codes that can be returned by `PriceListPriceUserError`.

## Valid values

* BLANK

  The input value is blank.

* PRICE\_​LIST\_​CURRENCY\_​MISMATCH

  The specified currency doesn't match the price list's currency.

* PRICE\_​LIST\_​NOT\_​FOUND

  The price list doesn't exist.

* PRICE\_​NOT\_​FIXED

  Only fixed prices can be deleted.

* VARIANT\_​NOT\_​FOUND

  A fixed price for the specified product variant doesn't exist.

***

## Fields

* [Price​List​Price​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError#field-PriceListPriceUserError.fields.code)

  OBJECT

  An error for a failed price list price operation.

***

## Map

### Fields with this enum

* <-|[Price​List​Price​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError#field-PriceListPriceUserError.fields.code)
