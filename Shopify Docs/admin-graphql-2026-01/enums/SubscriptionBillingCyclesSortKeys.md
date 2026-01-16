---
title: SubscriptionBillingCyclesSortKeys - GraphQL Admin
description: The set of valid sort keys for the SubscriptionBillingCycles query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys.md
---

# Subscription​Billing​Cycles​Sort​Keys

enum

The set of valid sort keys for the SubscriptionBillingCycles query.

## Valid values

* CYCLE\_​INDEX

  Sort by the `cycle_index` value.

* ID

  Sort by the `id` value.

***

## Fields

* [Subscription​Billing​Cycle​Edited​Contract.billingCycles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.billingCycles.arguments.sortKey)

  ARGUMENT

  Represents a subscription contract with billing cycles.

* [Subscription​Draft.concatenatedBillingCycles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.concatenatedBillingCycles.arguments.sortKey)

  ARGUMENT

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

* [Query​Root.subscriptionBillingCycles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.subscriptionBillingCycles.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [subscription​Billing​Cycles.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Subscription​Billing​Cycle​Edited​Contract.billingCycles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.billingCycles.arguments.sortKey)
* <-|[Subscription​Draft.concatenatedBillingCycles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.concatenatedBillingCycles.arguments.sortKey)
* <-|[Query​Root.subscriptionBillingCycles(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.subscriptionBillingCycles.arguments.sortKey)
* <-|[subscription​Billing​Cycles.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles#arguments-sortKey)
