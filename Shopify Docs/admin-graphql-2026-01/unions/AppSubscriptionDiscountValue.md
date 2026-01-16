---
title: AppSubscriptionDiscountValue - GraphQL Admin
description: The value of the discount.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/AppSubscriptionDiscountValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/AppSubscriptionDiscountValue.md
---

# App​Subscription​Discount​Value

union

The value of the discount.

## Possible types

* [App​Subscription​Discount​Amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscountAmount)

  OBJECT

  The fixed amount value of a discount.

  * amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The fixed amount value of a discount.

* [App​Subscription​Discount​Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscountPercentage)

  OBJECT

  The percentage value of a discount.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The percentage value of a discount.

***

## Fields with this union

* [App​Subscription​Discount.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount#field-AppSubscriptionDiscount.fields.value)

  OBJECT

  Discount applied to the recurring pricing portion of a subscription.

***

```graphql
union AppSubscriptionDiscountValue = AppSubscriptionDiscountAmount | AppSubscriptionDiscountPercentage
```
