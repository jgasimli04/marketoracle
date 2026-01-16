---
title: DeliveryConditionCriteria - GraphQL Admin
description: The value (weight or price) that the condition field is compared to.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryConditionCriteria
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryConditionCriteria.md
---

# Delivery​Condition​Criteria

union

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

The value (weight or price) that the condition field is compared to.

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

* [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Weight)

  OBJECT

  A weight measurement with its numeric value and unit. Used throughout the API, for example in shipping calculations, delivery conditions, order line items, and inventory measurements.

  The weight combines a decimal value with a standard unit of measurement to ensure consistent weight handling across different regional systems.

  * unit

    [Weight​Unit!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WeightUnit)

    non-null

    The unit of measurement for `value`.

  * value

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The weight value using the unit system specified with `unit`.

***

## Fields with this union

* [Delivery​Condition.conditionCriteria](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition#field-DeliveryCondition.fields.conditionCriteria)

  OBJECT

  A condition that must pass for a delivery method definition to be applied to an order.

***

```graphql
union DeliveryConditionCriteria = MoneyV2 | Weight
```
