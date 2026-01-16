---
title: PriceRuleValue - GraphQL Admin
description: >-
  The type of the price rule value. The price rule value might be a percentage
  value, or a fixed amount.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/PriceRuleValue'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/PriceRuleValue.md'
---

# Price​Rule​Value

union

Requires `read_price_rules` access scope.

The type of the price rule value. The price rule value might be a percentage value, or a fixed amount.

## Possible types

* [Price​Rule​Fixed​Amount​Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleFixedAmountValue)

  OBJECT

  The value of a fixed amount price rule.

  * amount

    [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

    non-null

    The monetary value of the price rule.

* [Price​Rule​Percent​Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRulePercentValue)

  OBJECT

  The value of a percent price rule.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The percent value of the price rule.

***

## Fields with this union

* [Price​Rule.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.value)

  OBJECT

  Deprecated

***

```graphql
union PriceRuleValue = PriceRuleFixedAmountValue | PriceRulePercentValue
```
