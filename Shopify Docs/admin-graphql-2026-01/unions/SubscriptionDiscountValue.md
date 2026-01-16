---
title: SubscriptionDiscountValue - GraphQL Admin
description: The value of the discount and how it will be applied.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscountValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscountValue.md
---

# Subscription​Discount​Value

union

Requires `read_own_subscription_contracts` access scope.

The value of the discount and how it will be applied.

## Possible types

* [Subscription​Discount​Fixed​Amount​Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountFixedAmountValue)

  OBJECT

  The value of the discount and how it will be applied.

  * amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The fixed amount value of the discount.

  * applies​On​Each​Item

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the amount is applied per item.

* [Subscription​Discount​Percentage​Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountPercentageValue)

  OBJECT

  The percentage value of the discount.

  * percentage

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The percentage value of the discount.

***

## Fields with this union

* [Subscription​Manual​Discount.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount#field-SubscriptionManualDiscount.fields.value)

  OBJECT

  Custom subscription discount.

***

```graphql
union SubscriptionDiscountValue = SubscriptionDiscountFixedAmountValue | SubscriptionDiscountPercentageValue
```
