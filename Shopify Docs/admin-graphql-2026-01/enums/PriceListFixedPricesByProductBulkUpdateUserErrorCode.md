---
title: PriceListFixedPricesByProductBulkUpdateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `PriceListFixedPricesByProductBulkUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListFixedPricesByProductBulkUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListFixedPricesByProductBulkUpdateUserErrorCode.md
---

# Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error​Code

enum

Possible error codes that can be returned by `PriceListFixedPricesByProductBulkUpdateUserError`.

## Valid values

* DUPLICATE\_​ID\_​IN\_​INPUT

  Duplicate ID in input.

* ID\_​MUST\_​BE\_​MUTUALLY\_​EXCLUSIVE

  IDs must be mutually exclusive across add or delete operations.

* NO\_​UPDATE\_​OPERATIONS\_​SPECIFIED

  No update operations specified.

* PRICE\_​LIMIT\_​EXCEEDED

  Exceeded the 10000 prices to add limit.

* PRICE\_​LIST\_​DOES\_​NOT\_​EXIST

  Price list does not exist.

* PRICES\_​TO\_​ADD\_​CURRENCY\_​MISMATCH

  The currency specified does not match the price list's currency.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

***

## Fields

* [Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListFixedPricesByProductBulkUpdateUserError#field-PriceListFixedPricesByProductBulkUpdateUserError.fields.code)

  OBJECT

  Error codes for failed price list fixed prices by product bulk update operations.

***

## Map

### Fields with this enum

* <-|[Price​List​Fixed​Prices​By​Product​Bulk​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListFixedPricesByProductBulkUpdateUserError#field-PriceListFixedPricesByProductBulkUpdateUserError.fields.code)
