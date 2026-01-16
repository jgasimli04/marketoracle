---
title: SubscriptionManualDiscountValueInput - GraphQL Admin
description: The input fields for the discount value and its distribution.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountValueInput.md
---

# Subscription​Manual​Discount​Value​Input

input\_object

The input fields for the discount value and its distribution.

## Fields

* fixed​Amount

  [Subscription​Manual​Discount​Fixed​Amount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountFixedAmountInput)

  Fixed amount input in the currency defined by the subscription.

* percentage

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The percentage value of the discount. Value must be between 0 - 100.

***

## Input objects using this input

* [Subscription​Atomic​Manual​Discount​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicManualDiscountInput#fields-value)

  INPUT OBJECT

  The input fields for mapping a subscription line to a discount.

* [Subscription​Manual​Discount​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput#fields-value)

  INPUT OBJECT

  The input fields for a subscription discount on a contract.

***

## Map

### Input objects using this input

* [Subscription​Atomic​Manual​Discount​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicManualDiscountInput#fields-value)
* [Subscription​Manual​Discount​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput#fields-value)
