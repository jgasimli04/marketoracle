---
title: SubscriptionBillingCycleSelector - GraphQL Admin
description: >-
  The input fields to select SubscriptionBillingCycle by either date or index.
  Both past and future billing cycles can be selected.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector.md
---

# Subscription​Billing​Cycle​Selector

input\_object

The input fields to select SubscriptionBillingCycle by either date or index. Both past and future billing cycles can be selected.

## Fields

* date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Returns a billing cycle by date.

* index

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Returns a billing cycle by index.

***

## Input objects using this input

* [Subscription​Billing​Attempt​Input.billingCycleSelector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput#fields-billingCycleSelector)

  INPUT OBJECT

  The input fields required to complete a subscription billing attempt.

* [Subscription​Billing​Cycle​Input.selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput#fields-selector)

  INPUT OBJECT

  The input fields for specifying the subscription contract and selecting the associated billing cycle.

***

## Map

### Input objects using this input

* [Subscription​Billing​Attempt​Input.billingCycleSelector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput#fields-billingCycleSelector)
* [Subscription​Billing​Cycle​Input.selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput#fields-selector)
