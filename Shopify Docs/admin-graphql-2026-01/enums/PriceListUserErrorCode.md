---
title: PriceListUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `PriceListUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListUserErrorCode.md
---

# Price​List​User​Error​Code

enum

Possible error codes that can be returned by `PriceListUserError`.

## Valid values

* BLANK

  The input value is blank.

* CATALOG\_​CONTEXT\_​DOES\_​NOT\_​SUPPORT\_​QUANTITY\_​PRICE\_​BREAKS

  Quantity price breaks can be associated only with company location catalogs or catalogs associated with compatible markets.

* CATALOG\_​CONTEXT\_​DOES\_​NOT\_​SUPPORT\_​QUANTITY\_​RULES

  Quantity rules can be associated only with company location catalogs or catalogs associated with compatible markets.

* CATALOG\_​DOES\_​NOT\_​EXIST

  The specified catalog does not exist.

* CATALOG\_​MARKET\_​AND\_​PRICE\_​LIST\_​CURRENCY\_​MISMATCH

  The price list currency must match the market catalog currency.

* CATALOG\_​TAKEN

  Catalog has a price list already assigned.

* CONTEXT\_​RULE\_​LIMIT\_​ONE\_​OPTION

  Only one context rule option may be specified.

* COUNTRY\_​PRICE\_​LIST\_​ASSIGNMENT

  A country catalog cannot be assigned to a price list.

* CURRENCY\_​MARKET\_​MISMATCH

  A price list’s currency must be the market currency.

* CURRENCY\_​NOT\_​SUPPORTED

  The price list currency is not supported by the shop's payment gateway.

* GENERIC\_​ERROR

  Something went wrong when trying to save the price list. Please try again.

* INCLUSION

  The input value isn't included in the list.

* INVALID\_​ADJUSTMENT\_​MAX\_​VALUE

  The adjustment value must not be greater than 1000% for `type` `PERCENTAGE_INCREASE`.

* INVALID\_​ADJUSTMENT\_​MIN\_​VALUE

  The adjustment value must not be greater than 100% for `type` `PERCENTAGE_DECREASE`.

* INVALID\_​ADJUSTMENT\_​VALUE

  The adjustment value must be a positive value and not be greater than 100% for `type` `PERCENTAGE_DECREASE` and not be greater than 1000% for `type` `PERCENTAGE_INCREASE`.

* PRICE\_​LIST\_​LOCKED

  The price list is currently being modified. Please try again later.

* PRICE\_​LIST\_​NOT\_​ALLOWED\_​FOR\_​PRIMARY\_​MARKET

  Cannot create price list for a primary market.

* PRICE\_​LIST\_​NOT\_​FOUND

  The specified price list doesn't exist.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

***

## Fields

* [Price​List​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError#field-PriceListUserError.fields.code)

  OBJECT

  Error codes for failed contextual pricing operations.

***

## Map

### Fields with this enum

* <-|[Price​List​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError#field-PriceListUserError.fields.code)
