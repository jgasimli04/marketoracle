---
title: AppSubscriptionDiscountInput - GraphQL Admin
description: >-
  The input fields to specify a discount to the recurring pricing portion of a
  subscription over a number of billing intervals.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountInput.md
---

# App​Subscription​Discount​Input

input\_object

The input fields to specify a discount to the recurring pricing portion of a subscription over a number of billing intervals.

## Fields

* duration​Limit​In​Intervals

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The total number of billing intervals to which the discount will be applied. Must be greater than 0. The discount will be applied to an indefinite number of billing intervals if this value is left blank.

* value

  [App​Subscription​Discount​Value​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountValueInput)

  The value to be discounted every billing interval.

***

## Input objects using this input

* [App​Recurring​Pricing​Input.discount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput#fields-discount)

  INPUT OBJECT

  Instructs the app subscription to generate a fixed charge on a recurring basis. The frequency is specified by the billing interval.

***

## Map

### Input objects using this input

* [App​Recurring​Pricing​Input.discount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput#fields-discount)
