---
title: SellingPlanFixedDeliveryPolicyInput - GraphQL Admin
description: The input fields required to create or update a fixed delivery policy.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput.md
---

# Selling​Plan​Fixed​Delivery​Policy​Input

input\_object

The input fields required to create or update a fixed delivery policy.

## Fields

* anchors

  [\[Selling​Plan​Anchor​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput)

  The specific anchor dates upon which the delivery interval calculations should be made.

* cutoff

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  A buffer period for orders to be included in a cycle.

* fulfillment​Exact​Time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the fulfillment should trigger.

* fulfillment​Trigger

  [Selling​Plan​Fulfillment​Trigger](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFulfillmentTrigger)

  What triggers the fulfillment.

* intent

  [Selling​Plan​Fixed​Delivery​Policy​Intent](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyIntent)

  Whether the delivery policy is merchant or buyer-centric.

* pre​Anchor​Behavior

  [Selling​Plan​Fixed​Delivery​Policy​Pre​Anchor​Behavior](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyPreAnchorBehavior)

  The pre-anchor behavior.

***

## Input objects using this input

* [Selling​Plan​Delivery​Policy​Input.fixed](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanDeliveryPolicyInput#fields-fixed)

  INPUT OBJECT

  The input fields that are required to create or update a delivery policy.

***

## Map

### Input objects using this input

* [Selling​Plan​Delivery​Policy​Input.fixed](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanDeliveryPolicyInput#fields-fixed)
