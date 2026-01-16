---
title: AppRecurringPricingInput - GraphQL Admin
description: >-
  Instructs the app subscription to generate a fixed charge on a recurring
  basis. The frequency is specified by the billing interval.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput.md
---

# App​Recurring​Pricing​Input

input\_object

Instructs the app subscription to generate a fixed charge on a recurring basis. The frequency is specified by the billing interval.

## Fields

* discount

  [App​Subscription​Discount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountInput)

  The discount applied to the subscription for a given number of billing intervals.

* interval

  [App​Pricing​Interval](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval)

  Default:EVERY\_30\_DAYS

  How often the app subscription generates a charge.

* price

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The amount to be charged to the store every billing interval.

***

## Input objects using this input

* [App​Plan​Input.appRecurringPricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppPlanInput#fields-appRecurringPricingDetails)

  INPUT OBJECT

  The pricing model for the app subscription. The pricing model input can be either `appRecurringPricingDetails` or `appUsagePricingDetails`.

***

## Map

### Input objects using this input

* [App​Plan​Input.appRecurringPricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppPlanInput#fields-appRecurringPricingDetails)
