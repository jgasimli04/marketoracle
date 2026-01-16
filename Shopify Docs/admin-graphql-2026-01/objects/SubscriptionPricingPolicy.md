---
title: SubscriptionPricingPolicy - GraphQL Admin
description: Represents a Subscription Line Pricing Policy.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionPricingPolicy.md
---

# Subscription​Pricing​Policy

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents a Subscription Line Pricing Policy.

## Fields

* base​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The base price per unit for the subscription line in the contract's currency.

* cycle​Discounts

  [\[Subscription​Cycle​Price​Adjustment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionCyclePriceAdjustment)

  non-null

  The adjustments per cycle for the subscription line.

***

## Map

### Fields with this object

* {}[SubscriptionLine.pricingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.pricingPolicy)
