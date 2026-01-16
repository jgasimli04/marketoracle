---
title: SubscriptionPricingPolicyCycleDiscountsInput - GraphQL Admin
description: >-
  The input fields for an array containing all pricing changes for each billing
  cycle.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput.md
---

# Subscription​Pricing​Policy​Cycle​Discounts​Input

input\_object

The input fields for an array containing all pricing changes for each billing cycle.

## Fields

* adjustment​Type

  [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

  non-null

  The price adjustment type.

* adjustment​Value

  [Selling​Plan​Pricing​Policy​Value​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyValueInput)

  required

  The price adjustment value.

* after​Cycle

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The cycle after which the pricing policy applies.

* computed​Price

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  The computed price after the adjustments are applied.

***

## Input objects using this input

* [Subscription​Pricing​Policy​Input.cycleDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyInput#fields-cycleDiscounts)

  INPUT OBJECT

  The input fields for expected price changes of the subscription line over time.

***

## Map

### Input objects using this input

* [Subscription​Pricing​Policy​Input.cycleDiscounts](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyInput#fields-cycleDiscounts)
