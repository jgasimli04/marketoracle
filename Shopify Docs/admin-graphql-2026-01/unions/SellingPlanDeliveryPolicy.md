---
title: SellingPlanDeliveryPolicy - GraphQL Admin
description: >-
  Represents the delivery frequency associated to the selling plan (for example,
  deliver every month, or deliver

  every other week). The selling plan delivery policy and associated records
  (selling plan groups, selling plans,

  pricing policies, and billing policy) are deleted 48 hours after a merchant
  uninstalls their subscriptions app.

  We recommend backing up these records if you need to restore them later.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanDeliveryPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanDeliveryPolicy.md
---

# Selling​Plan​Delivery​Policy

union

Requires `read_products` access scope.

Represents the delivery frequency associated to the selling plan (for example, deliver every month, or deliver every other week). The selling plan delivery policy and associated records (selling plan groups, selling plans, pricing policies, and billing policy) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.

## Possible types

* [Selling​Plan​Fixed​Delivery​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedDeliveryPolicy)

  OBJECT

  Represents a fixed selling plan delivery policy.

  * anchors

    [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

    non-null

    The specific anchor dates upon which the delivery interval calculations should be made.

  * cutoff

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    A buffer period for orders to be included in next fulfillment anchor.

  * fulfillment​Exact​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The date and time when the fulfillment should trigger.

  * fulfillment​Trigger

    [Selling​Plan​Fulfillment​Trigger!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFulfillmentTrigger)

    non-null

    What triggers the fulfillment. The value must be one of ANCHOR, ASAP, EXACT\_TIME, or UNKNOWN.

  * intent

    [Selling​Plan​Fixed​Delivery​Policy​Intent!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyIntent)

    non-null

    Whether the delivery policy is merchant or buyer-centric. Buyer-centric delivery policies state the time when the buyer will receive the goods. Merchant-centric delivery policies state the time when the fulfillment should be started. Currently, only merchant-centric delivery policies are supported.

  * pre​Anchor​Behavior

    [Selling​Plan​Fixed​Delivery​Policy​Pre​Anchor​Behavior!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanFixedDeliveryPolicyPreAnchorBehavior)

    non-null

    The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`.

* [Selling​Plan​Recurring​Delivery​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringDeliveryPolicy)

  OBJECT

  Represents a recurring selling plan delivery policy.

  * anchors

    [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

    non-null

    The specific anchor dates upon which the delivery interval calculations should be made.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the selling plan delivery policy was created.

  * cutoff

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Number of days which represent a buffer period for orders to be included in a cycle.

  * intent

    [Selling​Plan​Recurring​Delivery​Policy​Intent!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyIntent)

    non-null

    Whether the delivery policy is merchant or buyer-centric. Buyer-centric delivery policies state the time when the buyer will receive the goods. Merchant-centric delivery policies state the time when the fulfillment should be started. Currently, only merchant-centric delivery policies are supported.

  * interval

    [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

    non-null

    The delivery frequency, it can be either: day, week, month or year.

  * interval​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of intervals between deliveries.

  * pre​Anchor​Behavior

    [Selling​Plan​Recurring​Delivery​Policy​Pre​Anchor​Behavior!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRecurringDeliveryPolicyPreAnchorBehavior)

    non-null

    The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`.

***

## Fields with this union

* [Selling​Plan.deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.deliveryPolicy)

  OBJECT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  Caution

  Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

***

```graphql
union SellingPlanDeliveryPolicy = SellingPlanFixedDeliveryPolicy | SellingPlanRecurringDeliveryPolicy
```
