---
title: SellingPlanCheckoutChargeValue - GraphQL Admin
description: The portion of the price to be charged at checkout.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanCheckoutChargeValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanCheckoutChargeValue.md
---

# Selling​Plan​Checkout​Charge​Value

union

Requires `read_products` access scope.

The portion of the price to be charged at checkout.

## Possible types

* [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  OBJECT

  A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD.

  * amount

    [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

    non-null

    A monetary value in decimal format, allowing for precise representation of cents or fractional currency. For example, 12.99.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The three-letter currency code that represents a world currency used in a store. Currency codes include standard [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes, and non-standard codes. For example, USD.

* [Selling​Plan​Checkout​Charge​Percentage​Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanCheckoutChargePercentageValue)

  OBJECT

  The percentage value of the price used for checkout charge.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The percentage value of the price used for checkout charge.

***

## Fields with this union

* [Selling​Plan​Checkout​Charge.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanCheckoutCharge#field-SellingPlanCheckoutCharge.fields.value)

  OBJECT

  The amount charged at checkout when the full amount isn't charged at checkout.

***

```graphql
union SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue
```
