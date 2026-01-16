---
title: SellingPlanPricingPolicyBase - GraphQL Admin
description: Represents selling plan pricing policy common fields.
api_version: 2026-01
api_name: admin
type: interface
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase.md
---

# Selling​Plan​Pricing​Policy​Base

interface

Requires `read_products` access scope.

Represents selling plan pricing policy common fields.

## Fields

* adjustment​Type

  [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

  non-null

  The price adjustment type.

* adjustment​Value

  [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

  non-null

  The price adjustment value.

***

## Types implemented in

* [Selling​Plan​Fixed​Pricing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy)

  OBJECT

  Represents the pricing policy of a subscription or deferred purchase option selling plan. The selling plan fixed pricing policy works with the billing and delivery policy to determine the final price. Discounts are divided among fulfillments. For example, a subscription with a $10 discount and two deliveries will have a $5 discount applied to each delivery.

  * adjustment​Type

    [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

    non-null

    The price adjustment type.

  * adjustment​Value

    [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

    non-null

    The price adjustment value.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the fixed selling plan pricing policy was created.

* [Selling​Plan​Recurring​Pricing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy)

  OBJECT

  Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options.

  * adjustment​Type

    [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

    non-null

    The price adjustment type.

  * adjustment​Value

    [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

    non-null

    The price adjustment value.

  * after​Cycle

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Cycle after which this pricing policy applies.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the recurring selling plan pricing policy was created.

***

##### Variables

```json
{
	"adjustmentType": "",
	"adjustmentValue": ""
}
```

##### Schema

```graphql
interface SellingPlanPricingPolicyBase {
  adjustmentType: SellingPlanPricingPolicyAdjustmentType!
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue!
}
```
