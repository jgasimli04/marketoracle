---
title: SubscriptionBillingCycleConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  SubscriptionBillingCycles.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection.md
---

# Subscription​Billing​Cycle​Connection

connection

An auto-generated type for paginating through multiple SubscriptionBillingCycles.

## Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.billingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.billingCycles)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Draft.concatenatedBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.concatenatedBillingCycles)

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

## Queries with this connection

* [subscription​Billing​Cycle​Bulk​Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults)

  query

  Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID. This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.

  * job​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the billing cycle bulk operation job.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* [subscription​Billing​Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles)

  query

  Returns subscription billing cycles for a contract ID.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to retrieve billing cycles for.

  * billing​Cycles​Date​Range​Selector

    [Subscription​Billing​Cycles​Date​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    Select subscription billing cycles within a date range.

  * billing​Cycles​Index​Range​Selector

    [Subscription​Billing​Cycles​Index​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesIndexRangeSelector)

    Select subscription billing cycles within an index range.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Subscription​Billing​Cycles​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys)

    Default:CYCLE\_INDEX

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Possible returns

* edges

  [\[Subscription​Billing​Cycle​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Billing​Cycle!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  non-null

  A list of nodes that are contained in SubscriptionBillingCycleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Subscription​Billing​Cycle​Edited​Contract.billingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.billingCycles)
* {}[Subscription​Draft.concatenatedBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.concatenatedBillingCycles)

### Queries with this connection

* \<?>[subscription​Billing​Cycle​Bulk​Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults)
* \<?>[subscription​Billing​Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles)

### Possible returns

* <->[Subscription​Billing​Cycle​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-edges)
* <->[Subscription​Billing​Cycle​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-nodes)
* <->[Subscription​Billing​Cycle​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-pageInfo)
