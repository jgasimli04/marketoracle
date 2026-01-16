---
title: SubscriptionDeliveryMethod - GraphQL Admin
description: >-
  Describes the delivery method to use to get the physical goods to the
  customer.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod.md
---

# Subscription​Delivery​Method

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Describes the delivery method to use to get the physical goods to the customer.

## Possible types

* [Subscription​Delivery​Method​Local​Delivery](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDelivery)

  OBJECT

  A subscription delivery method for local delivery. The other subscription delivery methods can be found in the `SubscriptionDeliveryMethod` union type.

  * address

    [Mailing​Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    non-null

    The address to deliver to.

  * local​Delivery​Option

    [Subscription​Delivery​Method​Local​Delivery​Option!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodLocalDeliveryOption)

    non-null

    The details of the local delivery method to use.

* [Subscription​Delivery​Method​Pickup](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickup)

  OBJECT

  A delivery method with a pickup option.

  * pickup​Option

    [Subscription​Delivery​Method​Pickup​Option!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodPickupOption)

    non-null

    The details of the pickup delivery method to use.

* [Subscription​Delivery​Method​Shipping](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShipping)

  OBJECT

  Represents a shipping delivery method: a mailing address and a shipping option.

  * address

    [Mailing​Address!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

    non-null

    The address to ship to.

  * shipping​Option

    [Subscription​Delivery​Method​Shipping​Option!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryMethodShippingOption)

    non-null

    The details of the shipping method to use.

***

## Fields with this union

* [Subscription​Billing​Cycle​Edited​Contract.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.deliveryMethod)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.deliveryMethod)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-deliveryMethod)

  INTERFACE

  Represents subscription contract common fields.

* [Subscription​Draft.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.deliveryMethod)

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
union SubscriptionDeliveryMethod = SubscriptionDeliveryMethodLocalDelivery | SubscriptionDeliveryMethodPickup | SubscriptionDeliveryMethodShipping
```
