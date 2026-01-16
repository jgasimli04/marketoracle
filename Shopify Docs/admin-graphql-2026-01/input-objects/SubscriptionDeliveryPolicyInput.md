---
title: SubscriptionDeliveryPolicyInput - GraphQL Admin
description: The input fields for a Subscription Delivery Policy.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryPolicyInput.md
---

# Subscription​Delivery​Policy​Input

input\_object

The input fields for a Subscription Delivery Policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput)

  Default:\[]

  The specific anchor dates upon which the delivery interval calculations should be made.

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  non-null

  The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc).

* interval​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The number of billing intervals between invoices.

***

## Input objects using this input

* [Subscription​Draft​Input.deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-deliveryPolicy)

  INPUT OBJECT

  The input fields required to create a Subscription Draft.

***

## Map

### Input objects using this input

* [Subscription​Draft​Input.deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-deliveryPolicy)
