---
title: DiscountCustomerGetsValue - GraphQL Admin
description: >-
  The type of the discount value and how it will be applied. For example, it
  might be a percentage discount on a fixed number of items. Alternatively, it
  might be a fixed amount evenly distributed across all items or on each
  individual item. A third example is a percentage discount on all items.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerGetsValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCustomerGetsValue.md
---

# Discount​Customer​Gets​Value

union

Requires Apps must have `read_discounts` access scope.

The type of the discount value and how it will be applied. For example, it might be a percentage discount on a fixed number of items. Alternatively, it might be a fixed amount evenly distributed across all items or on each individual item. A third example is a percentage discount on all items.

## Possible types

* [Discount​Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAmount)

  OBJECT

  The fixed amount value of a discount, and whether the amount is applied to each entitled item or spread evenly across the entitled items.

  * amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The value of the discount.

  * applies​On​Each​Item

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items.

* [Discount​On​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountOnQuantity)

  OBJECT

  Defines quantity-based discount rules that specify how many items are eligible for a discount effect. This object enables bulk purchase incentives and tiered pricing strategies.

  For example, a "Buy 4 candles, get 2 candles 50% off (mix and match)" promotion would specify a quantity threshold of 2 items that will receive a percentage discount effect, encouraging customers to purchase more items to unlock savings.

  The configuration combines quantity requirements with discount effects, allowing merchants to create sophisticated pricing rules that reward larger purchases and increase average order values.

  * effect

    [Discount​Effect!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountEffect)

    non-null

    The discount's effect on qualifying items.

  * quantity

    [Discount​Quantity!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountQuantity)

    non-null

    The number of items being discounted. The customer must have at least this many items of specified products or product variants in their order to be eligible for the discount.

* [Discount​Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPercentage)

  OBJECT

  Creates percentage-based discounts that reduce item prices by a specified percentage amount. This gives merchants a flexible way to offer proportional savings that automatically scale with order value.

  For example, a "20% off all winter clothing" promotion would use this object to apply consistent percentage savings across different price points.

  Learn more about [discount types](https://help.shopify.com/manual/discounts/).

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The percentage value of the discount.

***

## Fields with this union

* [Discount​Customer​Gets.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets#field-DiscountCustomerGets.fields.value)

  OBJECT

  The items in the order that qualify for the discount, their quantities, and the total value of the discount.

***

```graphql
union DiscountCustomerGetsValue = DiscountAmount | DiscountOnQuantity | DiscountPercentage
```
