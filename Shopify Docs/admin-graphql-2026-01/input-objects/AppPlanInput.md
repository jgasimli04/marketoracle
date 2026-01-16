---
title: AppPlanInput - GraphQL Admin
description: >-
  The pricing model for the app subscription.

  The pricing model input can be either `appRecurringPricingDetails` or
  `appUsagePricingDetails`.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppPlanInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppPlanInput.md
---

# App​Plan​Input

input\_object

The pricing model for the app subscription. The pricing model input can be either `appRecurringPricingDetails` or `appUsagePricingDetails`.

## Fields

* app​Recurring​Pricing​Details

  [App​Recurring​Pricing​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput)

  The pricing details for recurring billing.

* app​Usage​Pricing​Details

  [App​Usage​Pricing​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppUsagePricingInput)

  The pricing details for usage-based billing.

***

## Input objects using this input

* [App​Subscription​Line​Item​Input.plan](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionLineItemInput#fields-plan)

  INPUT OBJECT

  The input fields to add more than one pricing plan to an app subscription.

***

## Map

### Input objects using this input

* [App​Subscription​Line​Item​Input.plan](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionLineItemInput#fields-plan)
