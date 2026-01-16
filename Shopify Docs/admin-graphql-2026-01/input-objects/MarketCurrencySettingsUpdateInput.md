---
title: MarketCurrencySettingsUpdateInput - GraphQL Admin
description: The input fields used to update the currency settings of a market.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput.md
---

# Market​Currency​Settings​Update​Input

input\_object

The input fields used to update the currency settings of a market.

## Fields

* base​Currency

  [Currency​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  The currency which this market’s customers must use if local currencies are disabled.

* base​Currency​Manual​Rate

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The manual exchange rate that will be used to convert shop currency prices. If null, then the automatic exchange rates will be used.

* local​Currencies

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not local currencies are enabled. If enabled, then prices will be converted to give each customer the best experience based on their region. If disabled, then all customers in this market will see prices in the market's base currency.

* rounding​Enabled

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not rounding is enabled on multi-currency prices.

***

## Input objects using this input

* [Market​Create​Input.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput#fields-currencySettings)

  INPUT OBJECT

  The input fields required to create a market.

* [Market​Update​Input.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput#fields-currencySettings)

  INPUT OBJECT

  The input fields used to update a market.

***

## Map

### Input objects using this input

* [Market​Create​Input.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput#fields-currencySettings)
* [Market​Update​Input.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput#fields-currencySettings)
