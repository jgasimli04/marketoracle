---
title: SubscriptionAtomicLineInput - GraphQL Admin
description: The input fields for mapping a subscription line to a discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicLineInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicLineInput.md
---

# Subscription​Atomic​Line​Input

input\_object

The input fields for mapping a subscription line to a discount.

## Fields

* discounts

  [\[Subscription​Atomic​Manual​Discount​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicManualDiscountInput)

  The discount to be added to the subscription line.

* line

  [Subscription​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput)

  required

  The new subscription line.

***

## Input objects using this input

* [Subscription​Contract​Atomic​Create​Input.lines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput#fields-lines)

  INPUT OBJECT

  The input fields required to create a Subscription Contract.

***

## Map

### Input objects using this input

* [Subscription​Contract​Atomic​Create​Input.lines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractAtomicCreateInput#fields-lines)
