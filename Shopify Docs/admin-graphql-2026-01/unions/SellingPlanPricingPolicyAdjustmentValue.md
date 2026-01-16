---
title: SellingPlanPricingPolicyAdjustmentValue - GraphQL Admin
description: Represents a selling plan pricing policy adjustment value type.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue.md
---

# Selling​Plan​Pricing​Policy​Adjustment​Value

union

Requires `read_products` access scope.

Represents a selling plan pricing policy adjustment value type.

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

* [Selling​Plan​Pricing​Policy​Percentage​Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanPricingPolicyPercentageValue)

  OBJECT

  The percentage value of a selling plan pricing policy percentage type.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The percentage value.

***

## Fields with this union

* [Selling​Plan​Fixed​Pricing​Policy.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy#field-SellingPlanFixedPricingPolicy.fields.adjustmentValue)

  OBJECT

  Represents the pricing policy of a subscription or deferred purchase option selling plan. The selling plan fixed pricing policy works with the billing and delivery policy to determine the final price. Discounts are divided among fulfillments. For example, a subscription with a $10 discount and two deliveries will have a $5 discount applied to each delivery.

* [Selling​Plan​Pricing​Policy​Base.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase#fields-adjustmentValue)

  INTERFACE

  Represents selling plan pricing policy common fields.

* [Selling​Plan​Recurring​Pricing​Policy.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy#field-SellingPlanRecurringPricingPolicy.fields.adjustmentValue)

  OBJECT

  Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options.

* [Subscription​Cycle​Price​Adjustment.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionCyclePriceAdjustment#field-SubscriptionCyclePriceAdjustment.fields.adjustmentValue)

  OBJECT

  Represents a Subscription Line Pricing Cycle Adjustment.

***

```graphql
union SellingPlanPricingPolicyAdjustmentValue = MoneyV2 | SellingPlanPricingPolicyPercentageValue
```
