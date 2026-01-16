---
title: SubscriptionDiscount - GraphQL Admin
description: Subscription draft discount types.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount.md
---

# Subscription​Discount

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Subscription draft discount types.

## Possible types

* [Subscription​Applied​Code​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount)

  OBJECT

  Represents an applied code discount.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID.

  * redeem​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The redeem code of the discount that applies on the subscription.

  * rejection​Reason

    [Subscription​Discount​Rejection​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDiscountRejectionReason)

    The reason that the discount on the subscription draft is rejected.

* [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  OBJECT

  Custom subscription discount.

  * entitled​Lines

    [Subscription​Discount​Entitled​Lines!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines)

    non-null

    Entitled line items used to apply the subscription discount on.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID.

  * recurring​Cycle​Limit

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The maximum number of times the subscription discount will be applied on orders.

  * rejection​Reason

    [Subscription​Discount​Rejection​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionDiscountRejectionReason)

    The reason that the discount on the subscription draft is rejected.

  * target​Type

    [Discount​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountTargetType)

    non-null

    Type of line the discount applies on.

  * title

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The title associated with the subscription discount.

  * type

    [Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountType)

    non-null

    The type of the subscription discount.

  * usage​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of times the discount was applied.

  * value

    [Subscription​Discount​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscountValue)

    non-null

    The value of the subscription discount.

***

## Fields with this union

* [Subscription​Discount​Allocation.discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountAllocation#field-SubscriptionDiscountAllocation.fields.discount)

  OBJECT

  Represents what a particular discount reduces from a line price.

* [Subscription​Discount​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple SubscriptionDiscounts.

* [Subscription​Discount​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEdge#field-SubscriptionDiscountEdge.fields.node)

  OBJECT

  An auto-generated type which holds one SubscriptionDiscount and a cursor during pagination.

* [Subscription​Draft.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discounts)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

* [Subscription​Draft.discountsAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsAdded)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

* [Subscription​Draft.discountsRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsRemoved)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

* [Subscription​Draft.discountsUpdated](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsUpdated)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

***

```graphql
union SubscriptionDiscount = SubscriptionAppliedCodeDiscount | SubscriptionManualDiscount
```
