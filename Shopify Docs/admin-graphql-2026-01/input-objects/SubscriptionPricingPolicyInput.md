---
title: SubscriptionPricingPolicyInput - GraphQL Admin
description: >-
  The input fields for expected price changes of the subscription line over
  time.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyInput.md
---

# Subscription​Pricing​Policy​Input

input\_object

The input fields for expected price changes of the subscription line over time.

## Fields

* base​Price

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  The base price per unit for the subscription line in the contract's currency.

* cycle​Discounts

  [\[Subscription​Pricing​Policy​Cycle​Discounts​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput)

  required

  An array containing all pricing changes for each billing cycle.

***

## Input objects using this input

* [Subscription​Line​Input.pricingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput#fields-pricingPolicy)

  INPUT OBJECT

  The input fields required to add a new subscription line to a contract.

* [Subscription​Line​Update​Input.pricingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput#fields-pricingPolicy)

  INPUT OBJECT

  The input fields required to update a subscription line on a contract.

***

## Map

### Input objects using this input

* [Subscription​Line​Input.pricingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput#fields-pricingPolicy)
* [Subscription​Line​Update​Input.pricingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput#fields-pricingPolicy)
