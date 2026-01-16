---
title: SellingPlanBillingPolicy - GraphQL Admin
description: >-
  Represents the billing frequency associated to the selling plan (for example,
  bill every week, or bill every

  three months). The selling plan billing policy and associated records (selling
  plan groups, selling plans, pricing

  policies, and delivery policy) are deleted 48 hours after a merchant
  uninstalls their subscriptions app.

  We recommend backing up these records if you need to restore them later.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanBillingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanBillingPolicy.md
---

# Selling​Plan​Billing​Policy

union

Requires `read_products` access scope.

Represents the billing frequency associated to the selling plan (for example, bill every week, or bill every three months). The selling plan billing policy and associated records (selling plan groups, selling plans, pricing policies, and delivery policy) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.

## Possible types

* [Selling​Plan​Fixed​Billing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedBillingPolicy)

  OBJECT

  The fixed selling plan billing policy defines how much of the price of the product will be billed to customer at checkout. If there is an outstanding balance, it determines when it will be paid.

  * checkout​Charge

    [Selling​Plan​Checkout​Charge!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanCheckoutCharge)

    non-null

    The checkout charge when the full amount isn't charged at checkout.

  * remaining​Balance​Charge​Exact​Time

    [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    The exact time when to capture the full payment.

  * remaining​Balance​Charge​Time​After​Checkout

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The period after remaining\_balance\_charge\_trigger, before capturing the full payment. Expressed as an ISO8601 duration.

  * remaining​Balance​Charge​Trigger

    [Selling​Plan​Remaining​Balance​Charge​Trigger!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanRemainingBalanceChargeTrigger)

    non-null

    When to capture payment for amount due.

* [Selling​Plan​Recurring​Billing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringBillingPolicy)

  OBJECT

  Represents a recurring selling plan billing policy.

  * anchors

    [\[Selling​Plan​Anchor!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanAnchor)

    non-null

    Specific anchor dates upon which the billing interval calculations should be made.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the selling plan billing policy was created.

  * interval

    [Selling​Plan​Interval!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanInterval)

    non-null

    The billing frequency, it can be either: day, week, month or year.

  * interval​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of intervals between billings.

  * max​Cycles

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Maximum number of billing iterations.

  * min​Cycles

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Minimum number of billing iterations.

***

## Fields with this union

* [Selling​Plan.billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.billingPolicy)

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
union SellingPlanBillingPolicy = SellingPlanFixedBillingPolicy | SellingPlanRecurringBillingPolicy
```
