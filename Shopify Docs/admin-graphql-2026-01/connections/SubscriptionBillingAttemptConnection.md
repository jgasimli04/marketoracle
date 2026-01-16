---
title: SubscriptionBillingAttemptConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  SubscriptionBillingAttempts.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection.md
---

# Subscription​Billing​Attempt​Connection

connection

An auto-generated type for paginating through multiple SubscriptionBillingAttempts.

## Fields with this connection

* [Subscription​Billing​Cycle.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.billingAttempts)

  OBJECT

  A subscription billing cycle.

* [Subscription​Contract.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.billingAttempts)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

***

## Queries with this connection

* [subscription​Billing​Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingAttempts)

  query

  Returns subscription billing attempts on a store.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

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

    [Subscription​Billing​Attempts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * error\_code

      string

    * error\_message

      string

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

***

## Possible returns

* edges

  [\[Subscription​Billing​Attempt​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Billing​Attempt!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  non-null

  A list of nodes that are contained in SubscriptionBillingAttemptEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Subscription​Billing​Cycle.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.billingAttempts)
* {}[Subscription​Contract.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.billingAttempts)

### Queries with this connection

* \<?>[subscription​Billing​Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingAttempts)

### Possible returns

* <->[Subscription​Billing​Attempt​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection#returns-edges)
* <->[Subscription​Billing​Attempt​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection#returns-nodes)
* <->[Subscription​Billing​Attempt​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection#returns-pageInfo)
