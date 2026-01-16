---
title: SellingPlanRecurringDeliveryPolicyInput - GraphQL Admin
description: The input fields to create or update a recurring delivery policy.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringDeliveryPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringDeliveryPolicyInput.md
---

# Selling​Plan​Recurring​Delivery​Policy​Input

input\_object

The input fields to create or update a recurring delivery policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput)

  The specific anchor dates upon which the delivery interval calculations should be made.

* cutoff

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  A buffer period for orders to be included in a cycle.

* intent

  [Selling​Plan​Recurring​Delivery​Policy​Intent](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyIntent)

  Intention of this delivery policy, it can be either: delivery or fulfillment.

* interval

  [Selling​Plan​Interval](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

  The delivery frequency, it can be either: day, week, month or year.

* interval​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of intervals between deliveries.

* pre​Anchor​Behavior

  [Selling​Plan​Recurring​Delivery​Policy​Pre​Anchor​Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyPreAnchorBehavior)

  The pre-anchor behavior. It can be either: asap or next.

***

## Input objects using this input

* [Selling​Plan​Delivery​Policy​Input.recurring](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanDeliveryPolicyInput#fields-recurring)

  INPUT OBJECT

  The input fields that are required to create or update a delivery policy.

***

## Map

### Input objects using this input

* [Selling​Plan​Delivery​Policy​Input.recurring](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanDeliveryPolicyInput#fields-recurring)
