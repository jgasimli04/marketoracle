---
title: SubscriptionBillingPolicyInput - GraphQL Admin
description: The input fields for a Subscription Billing Policy.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingPolicyInput.md
---

# Subscription​Billing​Policy​Input

input\_object

The input fields for a Subscription Billing Policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput)

  Default:\[]

  Specific anchor dates upon which the billing interval calculations should be made.

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  non-null

  The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).

* interval​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of billing intervals between invoices.

* max​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Maximum amount of cycles required in the subscription.

* min​Cycles

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Minimum amount of cycles required in the subscription.

***

## Input objects using this input

* [Subscription​Draft​Input.billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-billingPolicy)

  INPUT OBJECT

  The input fields required to create a Subscription Draft.

***

## Map

### Input objects using this input

* [Subscription​Draft​Input.billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-billingPolicy)
