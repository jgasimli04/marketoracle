---
title: SubscriptionDiscountAllocation - GraphQL Admin
description: Represents what a particular discount reduces from a line price.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountAllocation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountAllocation.md
---

# Subscription​Discount​Allocation

object

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents what a particular discount reduces from a line price.

## Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Allocation amount.

* discount

  [Subscription​Discount!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount)

  non-null

  Discount that created the allocation.

***

## Map

### Fields with this object

* {}[SubscriptionLine.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.discountAllocations)
