---
title: SellingPlanAnchorInput - GraphQL Admin
description: The input fields required to create or update a selling plan anchor.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanAnchorInput.md
---

# Selling​Plan​Anchor​Input

input\_object

The input fields required to create or update a selling plan anchor.

## Fields

* cutoff​Day

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The cutoff day of the anchor.

  If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets the days of the week according to ISO 8601, where 1 is Monday.

  If `type` is MONTHDAY, then the value must be between 1-31.

  If `type` is YEARDAY, then the value must be `null`.

  This field should only be set if the cutoff field for the delivery policy is `null`.

* day

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The day of the anchor.

  If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets the days of the week according to ISO 8601, where 1 is Monday.

  If `type` isn't WEEKDAY, then the value must be between 1-31.

* month

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The month of the anchor. If type is different than YEARDAY, then the value must be `null` or between 1-12.

* type

  [Selling​Plan​Anchor​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanAnchorType)

  Represents the anchor type, must be one of WEEKDAY, MONTHDAY, YEARDAY.

***

## Input objects using this input

* [Selling​Plan​Fixed​Delivery​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput#fields-anchors)

  INPUT OBJECT

  The input fields required to create or update a fixed delivery policy.

* [Selling​Plan​Recurring​Billing​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringBillingPolicyInput#fields-anchors)

  INPUT OBJECT

  The input fields required to create or update a recurring billing policy.

* [Selling​Plan​Recurring​Delivery​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringDeliveryPolicyInput#fields-anchors)

  INPUT OBJECT

  The input fields to create or update a recurring delivery policy.

* [Subscription​Billing​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingPolicyInput#fields-anchors)

  INPUT OBJECT

  The input fields for a Subscription Billing Policy.

* [Subscription​Delivery​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryPolicyInput#fields-anchors)

  INPUT OBJECT

  The input fields for a Subscription Delivery Policy.

***

## Map

### Input objects using this input

* [Selling​Plan​Fixed​Delivery​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanFixedDeliveryPolicyInput#fields-anchors)
* [Selling​Plan​Recurring​Billing​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringBillingPolicyInput#fields-anchors)
* [Selling​Plan​Recurring​Delivery​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanRecurringDeliveryPolicyInput#fields-anchors)
* [Subscription​Billing​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingPolicyInput#fields-anchors)
* [Subscription​Delivery​Policy​Input.anchors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryPolicyInput#fields-anchors)
