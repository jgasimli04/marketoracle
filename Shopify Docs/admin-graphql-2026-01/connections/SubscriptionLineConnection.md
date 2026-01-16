---
title: SubscriptionLineConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple SubscriptionLines.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection.md
---

# Subscription​Line​Connection

connection

An auto-generated type for paginating through multiple SubscriptionLines.

## Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.lines)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.lines](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-lines)

  INTERFACE

  Represents subscription contract common fields.

* [Subscription​Discount​Entitled​Lines.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines#field-SubscriptionDiscountEntitledLines.fields.lines)

  OBJECT

  Represents the subscription lines the discount applies on.

* [Subscription​Draft.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.lines)

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

* [Subscription​Draft.linesAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesAdded)

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

* [Subscription​Draft.linesRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesRemoved)

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

## Possible returns

* edges

  [\[Subscription​Line​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLineEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  non-null

  A list of nodes that are contained in SubscriptionLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Subscription​Billing​Cycle​Edited​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.lines)
* {}[Subscription​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)
* ||-[Subscription​Contract​Base.lines](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-lines)
* {}[Subscription​Discount​Entitled​Lines.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines#field-SubscriptionDiscountEntitledLines.fields.lines)
* {}[Subscription​Draft.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.lines)
* {}[Subscription​Draft.linesAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesAdded)
* {}[Subscription​Draft.linesRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesRemoved)

### Possible returns

* <->[Subscription​Line​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-edges)
* <->[Subscription​Line​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-nodes)
* <->[Subscription​Line​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-pageInfo)
