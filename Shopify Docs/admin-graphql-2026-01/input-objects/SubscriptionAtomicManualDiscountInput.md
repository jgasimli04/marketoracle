---
title: SubscriptionAtomicManualDiscountInput - GraphQL Admin
description: The input fields for mapping a subscription line to a discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicManualDiscountInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicManualDiscountInput.md
---

# Subscription​Atomic​Manual​Discount​Input

input\_object

The input fields for mapping a subscription line to a discount.

## Fields

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times the subscription discount will be applied on orders.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title associated with the subscription discount.

* value

  [Subscription​Manual​Discount​Value​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountValueInput)

  Percentage or fixed amount value of the discount.

***

## Input objects using this input

* [Subscription​Atomic​Line​Input.discounts](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicLineInput#fields-discounts)

  INPUT OBJECT

  The input fields for mapping a subscription line to a discount.

***

## Map

### Input objects using this input

* [Subscription​Atomic​Line​Input.discounts](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicLineInput#fields-discounts)
