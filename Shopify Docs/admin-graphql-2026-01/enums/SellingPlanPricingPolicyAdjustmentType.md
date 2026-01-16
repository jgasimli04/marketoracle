---
title: SellingPlanPricingPolicyAdjustmentType - GraphQL Admin
description: Represents a selling plan pricing policy adjustment type.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType.md
---

# Selling​Plan​Pricing​Policy​Adjustment​Type

enum

Represents a selling plan pricing policy adjustment type.

## Valid values

* FIXED\_​AMOUNT

  Fixed amount off adjustment.

* PERCENTAGE

  Percentage off adjustment.

* PRICE

  Price of the policy.

***

## Fields

* [Selling​Plan​Fixed​Pricing​Policy.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy#field-SellingPlanFixedPricingPolicy.fields.adjustmentType)

  OBJECT

  Represents the pricing policy of a subscription or deferred purchase option selling plan. The selling plan fixed pricing policy works with the billing and delivery policy to determine the final price. Discounts are divided among fulfillments. For example, a subscription with a $10 discount and two deliveries will have a $5 discount applied to each delivery.

* [Selling​Plan​Fixed​Pricing​Policy​Input.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedPricingPolicyInput#fields-adjustmentType)

  INPUT OBJECT

  The input fields required to create or update a fixed selling plan pricing policy.

* [Selling​Plan​Pricing​Policy​Base.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase#fields-adjustmentType)

  INTERFACE

  Represents selling plan pricing policy common fields.

* [Selling​Plan​Recurring​Pricing​Policy.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy#field-SellingPlanRecurringPricingPolicy.fields.adjustmentType)

  OBJECT

  Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options.

* [Selling​Plan​Recurring​Pricing​Policy​Input.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringPricingPolicyInput#fields-adjustmentType)

  INPUT OBJECT

  The input fields required to create or update a recurring selling plan pricing policy.

* [Subscription​Cycle​Price​Adjustment.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionCyclePriceAdjustment#field-SubscriptionCyclePriceAdjustment.fields.adjustmentType)

  OBJECT

  Represents a Subscription Line Pricing Cycle Adjustment.

* [Subscription​Pricing​Policy​Cycle​Discounts​Input.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput#fields-adjustmentType)

  INPUT OBJECT

  The input fields for an array containing all pricing changes for each billing cycle.

***

## Map

### Fields with this enum

* <-|[Selling​Plan​Fixed​Pricing​Policy.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy#field-SellingPlanFixedPricingPolicy.fields.adjustmentType)
* <-|[Selling​Plan​Recurring​Pricing​Policy.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy#field-SellingPlanRecurringPricingPolicy.fields.adjustmentType)
* <-|[Subscription​Cycle​Price​Adjustment.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionCyclePriceAdjustment#field-SubscriptionCyclePriceAdjustment.fields.adjustmentType)

### Inputs with this enum

* [Selling​Plan​Fixed​Pricing​Policy​Input.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedPricingPolicyInput#fields-adjustmentType)
* [Selling​Plan​Recurring​Pricing​Policy​Input.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringPricingPolicyInput#fields-adjustmentType)
* [Subscription​Pricing​Policy​Cycle​Discounts​Input.adjustmentType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput#fields-adjustmentType)
