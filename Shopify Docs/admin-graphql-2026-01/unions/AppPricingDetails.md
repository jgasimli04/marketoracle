---
title: AppPricingDetails - GraphQL Admin
description: >-
  The information about the price that's charged to a shop every plan period.

  The concrete type can be `AppRecurringPricing` for recurring billing or
  `AppUsagePricing` for usage-based billing.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/AppPricingDetails'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/AppPricingDetails.md
---

# App​Pricing​Details

union

The information about the price that's charged to a shop every plan period. The concrete type can be `AppRecurringPricing` for recurring billing or `AppUsagePricing` for usage-based billing.

## Possible types

* [App​Recurring​Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing)

  OBJECT

  The pricing information about a subscription app. The object contains an interval (the frequency at which the shop is billed for an app subscription) and a price (the amount to be charged to the subscribing shop at each interval).

  * discount

    [App​Subscription​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount)

    The discount applied to the subscription for a given number of billing intervals.

  * interval

    [App​Pricing​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval)

    non-null

    The frequency at which the subscribing shop is billed for an app subscription.

  * plan​Handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The app store pricing plan handle.

  * price

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The amount and currency to be charged to the subscribing shop every billing interval.

* [App​Usage​Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing)

  OBJECT

  Defines usage-based pricing terms for app subscriptions where merchants pay based on their actual consumption of app features or services. This pricing model provides flexibility for merchants who want to pay only for what they use rather than fixed monthly fees.

  For example, an email marketing app might charge variable pricing per email sent, with a monthly cap of variable pricing, allowing small merchants to pay minimal amounts while protecting larger merchants from excessive charges.

  Use the `AppUsagePricing` object to:

  * View consumption-based billing for variable app usage
  * See spending caps that protect merchants from unexpected charges

  The balance and capped amount fields provide apps with data about current usage costs and remaining budget within the billing period, which apps can present to merchants to promote transparency in variable pricing.

  For implementation guidance, see the [usage billing documentation](https://shopify.dev/docs/apps/launch/billing/subscription-billing/create-usage-based-subscriptions).

  * balance​Used

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The total usage records for interval.

  * capped​Amount

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The capped amount prevents the merchant from being charged for any usage over that amount during a billing period. This prevents billing from exceeding a maximum threshold over the duration of the billing period. For the merchant to continue using the app after exceeding a capped amount, they would need to agree to a new usage charge.

  * interval

    [App​Pricing​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPricingInterval)

    non-null

    The frequency with which the app usage records are billed.

  * terms

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The terms and conditions for app usage pricing. Must be present in order to create usage charges. The terms are presented to the merchant when they approve an app's usage charges.

***

## Fields with this union

* [App​Plan​V2.pricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPlanV2#field-AppPlanV2.fields.pricingDetails)

  OBJECT

  Contains the pricing details for the app plan that a merchant has subscribed to within their current billing arrangement.

  This simplified object focuses on the essential pricing information merchants need to understand their current subscription costs and billing structure.

  Details about subscription management and pricing strategies are available in the [app billing documentation](https://shopify.dev/docs/apps/launch/billing).

***

```graphql
union AppPricingDetails = AppRecurringPricing | AppUsagePricing
```
