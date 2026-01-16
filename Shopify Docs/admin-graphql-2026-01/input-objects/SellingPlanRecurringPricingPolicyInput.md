---
title: SellingPlanRecurringPricingPolicyInput - GraphQL Admin
description: >-
  The input fields required to create or update a recurring selling plan pricing
  policy.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringPricingPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringPricingPolicyInput.md
---

# Selling​Plan​Recurring​Pricing​Policy​Input

input\_object

The input fields required to create or update a recurring selling plan pricing policy.

## Fields

* adjustment​Type

  [Selling​Plan​Pricing​Policy​Adjustment​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

  Price adjustment type defined by the policy.

* adjustment​Value

  [Selling​Plan​Pricing​Policy​Value​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyValueInput)

  Price adjustment value defined by the policy.

* after​Cycle

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  Cycle after which the pricing policy applies.

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  ID of the pricing policy.

***

## Input objects using this input

* [Selling​Plan​Pricing​Policy​Input.recurring](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyInput#fields-recurring)

  INPUT OBJECT

  The input fields required to create or update a selling plan pricing policy.

***

## Map

### Input objects using this input

* [Selling​Plan​Pricing​Policy​Input.recurring](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyInput#fields-recurring)
