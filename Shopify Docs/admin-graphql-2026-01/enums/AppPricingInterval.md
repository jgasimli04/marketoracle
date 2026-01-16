---
title: AppPricingInterval - GraphQL Admin
description: The frequency at which the shop is billed for an app subscription.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval.md
---

# App​Pricing​Interval

enum

The frequency at which the shop is billed for an app subscription.

## Valid values

* ANNUAL

  The app subscription bills the shop annually.

* EVERY\_​30\_​DAYS

  The app subscription bills the shop every 30 days.

***

## Fields

* [App​Recurring​Pricing.interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing#field-AppRecurringPricing.fields.interval)

  OBJECT

  The pricing information about a subscription app. The object contains an interval (the frequency at which the shop is billed for an app subscription) and a price (the amount to be charged to the subscribing shop at each interval).

* [App​Recurring​Pricing​Input.interval](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput#fields-interval)

  INPUT OBJECT

  Instructs the app subscription to generate a fixed charge on a recurring basis. The frequency is specified by the billing interval.

* [App​Usage​Pricing.interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing#field-AppUsagePricing.fields.interval)

  OBJECT

  Defines usage-based pricing terms for app subscriptions where merchants pay based on their actual consumption of app features or services. This pricing model provides flexibility for merchants who want to pay only for what they use rather than fixed monthly fees.

  For example, an email marketing app might charge variable pricing per email sent, with a monthly cap of variable pricing, allowing small merchants to pay minimal amounts while protecting larger merchants from excessive charges.

  Use the `AppUsagePricing` object to:

  * View consumption-based billing for variable app usage
  * See spending caps that protect merchants from unexpected charges

  The balance and capped amount fields provide apps with data about current usage costs and remaining budget within the billing period, which apps can present to merchants to promote transparency in variable pricing.

  For implementation guidance, see the [usage billing documentation](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).

***

## Map

### Fields with this enum

* <-|[App​Recurring​Pricing.interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing#field-AppRecurringPricing.fields.interval)
* <-|[App​Usage​Pricing.interval](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing#field-AppUsagePricing.fields.interval)

### Inputs with this enum

* [App​Recurring​Pricing​Input.interval](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppRecurringPricingInput#fields-interval)
