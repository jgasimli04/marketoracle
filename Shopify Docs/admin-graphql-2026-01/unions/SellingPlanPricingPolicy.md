---
title: SellingPlanPricingPolicy - GraphQL Admin
description: >-
  Represents the type of pricing associated to the selling plan (for example, a
  title: SellingPlanPricingPolicy - GraphQL Admin
description: >-
  Represents the type of pricing associated to the selling plan (for example, a
  $10 or 20% discount that is set

  for a limited period or that is fixed for the duration of the subscription).
  Selling plan pricing policies and

  associated records (selling plan groups, selling plans, billing policy, and
  delivery policy) are deleted 48

  hours after a merchant uninstalls their subscriptions app. We recommend
  backing up these records if you need

  to restore them later.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy.md
gid: 97fb5e38-b65d-de1c-2d49-cc09f1c522b70 or 20% discount that is set

  for a limited period or that is fixed for the duration of the subscription).
  Selling plan pricing policies and

  associated records (selling plan groups, selling plans, billing policy, and
  delivery policy) are deleted 48

  hours after a merchant uninstalls their subscriptions app. We recommend
  backing up these records if you need

  to restore them later.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy.md
---

# Selling​Plan​Pricing​Policy

union

Requires `read_products` access scope.

Represents the type of pricing associated to the selling plan (for example, a $10 or 20% discount that is set for a limited period or that is fixed for the duration of the subscription). Selling plan pricing policies and associated records (selling plan groups, selling plans, billing policy, and delivery policy) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.

## Possible types

* [Selling​Plan​Fixed​Pricing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy)

  OBJECT

  Represents the pricing policy of a subscription or deferred purchase option selling plan. The selling plan fixed pricing policy works with the billing and delivery policy to determine the final price. Discounts are divided among fulfillments. For example, a subscription with a $10 discount and two deliveries will have a $5 discount applied to each delivery.

  * adjustment​Type

    [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

    non-null

    The price adjustment type.

  * adjustment​Value

    [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

    non-null

    The price adjustment value.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the fixed selling plan pricing policy was created.

* [Selling​Plan​Recurring​Pricing​Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy)

  OBJECT

  Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options.

  * adjustment​Type

    [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

    non-null

    The price adjustment type.

  * adjustment​Value

    [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

    non-null

    The price adjustment value.

  * after​Cycle

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    Cycle after which this pricing policy applies.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the recurring selling plan pricing policy was created.

***

## Fields with this union

* [Selling​Plan.pricingPolicies](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.pricingPolicies)

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
union SellingPlanPricingPolicy = SellingPlanFixedPricingPolicy | SellingPlanRecurringPricingPolicy
```
