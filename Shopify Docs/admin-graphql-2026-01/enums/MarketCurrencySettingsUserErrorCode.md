---
title: MarketCurrencySettingsUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `MarketCurrencySettingsUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketCurrencySettingsUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketCurrencySettingsUserErrorCode.md
---

# Market​Currency​Settings​User​Error​Code

enum

Possible error codes that can be returned by `MarketCurrencySettingsUserError`.

## Valid values

* MANAGED\_​MARKET

  The currency settings of the given market cannot be changed because the market manager has exclusive control of pricing.

* MARKET\_​NOT\_​FOUND

  The specified market wasn't found.

* MULTIPLE\_​CURRENCIES\_​NOT\_​SUPPORTED

  The shop's payment gateway does not support enabling more than one currency.

* NO\_​LOCAL\_​CURRENCIES\_​ON\_​SINGLE\_​COUNTRY\_​MARKET

  Can't enable or disable local currencies on a single country market.

* PRIMARY\_​MARKET\_​USES\_​SHOP\_​CURRENCY

  The primary market must use the shop currency.

* UNIFIED\_​MARKETS\_​ENABLED

  This action is restricted if unified markets is enabled.

* UNSUPPORTED\_​CURRENCY

  The specified currency is not supported.

***

## Fields

* [Market​Currency​Settings​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettingsUserError#field-MarketCurrencySettingsUserError.fields.code)

  OBJECT

  Error codes for failed market multi-currency operations.

***

## Map

### Fields with this enum

* <-|[Market​Currency​Settings​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettingsUserError#field-MarketCurrencySettingsUserError.fields.code)
