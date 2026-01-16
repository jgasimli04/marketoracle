---
title: SubscriptionContractSubscriptionStatus - GraphQL Admin
description: The possible status values of a subscription.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractSubscriptionStatus.md
---

# Subscription​Contract​Subscription​Status

enum

The possible status values of a subscription.

## Valid values

* ACTIVE

  The contract is active and continuing per its policies.

* CANCELLED

  The contract was ended by an unplanned customer action.

* EXPIRED

  The contract has ended per the expected circumstances. All billing and deliverycycles of the subscriptions were executed.

* FAILED

  The contract ended because billing failed and no further billing attempts are expected.

* PAUSED

  The contract is temporarily paused and is expected to resume in the future.

***

## Fields

* [Subscription​Billing​Cycle​Bulk​Filters.contractStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters#fields-contractStatus)

  INPUT OBJECT

  The input fields for filtering subscription billing cycles in bulk actions.

* [Subscription​Contract.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.status)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Draft.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.status)

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

* [Subscription​Draft​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-status)

  INPUT OBJECT

  The input fields required to create a Subscription Draft.

***

## Map

### Fields with this enum

* <-|[Subscription​Contract.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.status)
* <-|[Subscription​Draft.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.status)

### Inputs with this enum

* [Subscription​Billing​Cycle​Bulk​Filters.contractStatus](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleBulkFilters#fields-contractStatus)
* [Subscription​Draft​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-status)
