---
title: SellingPlanPricingPolicyValueInput - GraphQL Admin
description: >-
  The input fields required to create or update a pricing policy adjustment
  value.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyValueInput.md
---

# Selling​Plan​Pricing​Policy​Value​Input

input\_object

The input fields required to create or update a pricing policy adjustment value.

## Fields

* fixed​Value

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The fixed value for an fixed amount off or a new policy price.

* percentage

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The percentage value.

***

## Input objects using this input

* [Selling​Plan​Fixed​Pricing​Policy​Input.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedPricingPolicyInput#fields-adjustmentValue)

  INPUT OBJECT

  The input fields required to create or update a fixed selling plan pricing policy.

* [Selling​Plan​Recurring​Pricing​Policy​Input.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringPricingPolicyInput#fields-adjustmentValue)

  INPUT OBJECT

  The input fields required to create or update a recurring selling plan pricing policy.

* [Subscription​Pricing​Policy​Cycle​Discounts​Input.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput#fields-adjustmentValue)

  INPUT OBJECT

  The input fields for an array containing all pricing changes for each billing cycle.

***

## Map

### Input objects using this input

* [Selling​Plan​Fixed​Pricing​Policy​Input.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedPricingPolicyInput#fields-adjustmentValue)
* [Selling​Plan​Recurring​Pricing​Policy​Input.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringPricingPolicyInput#fields-adjustmentValue)
* [Subscription​Pricing​Policy​Cycle​Discounts​Input.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput#fields-adjustmentValue)
