---
title: AppUsagePricingInput - GraphQL Admin
description: >-
  The input fields to issue arbitrary charges for app usage associated with a
  subscription.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppUsagePricingInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppUsagePricingInput.md
---

# App​Usage​Pricing​Input

input\_object

The input fields to issue arbitrary charges for app usage associated with a subscription.

## Fields

* capped​Amount

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The maximum amount of usage charges that can be incurred within a subscription billing interval.

* terms

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The terms and conditions for app usage. These terms stipulate the pricing model for the charges that an app creates.

***

## Input objects using this input

* [App​Plan​Input.appUsagePricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppPlanInput#fields-appUsagePricingDetails)

  INPUT OBJECT

  The pricing model for the app subscription. The pricing model input can be either `appRecurringPricingDetails` or `appUsagePricingDetails`.

***

## Map

### Input objects using this input

* [App​Plan​Input.appUsagePricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppPlanInput#fields-appUsagePricingDetails)
