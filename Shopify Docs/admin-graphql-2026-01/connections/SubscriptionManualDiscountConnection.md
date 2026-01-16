---
title: SubscriptionManualDiscountConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  SubscriptionManualDiscounts.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection.md
---

# Subscription​Manual​Discount​Connection

connection

An auto-generated type for paginating through multiple SubscriptionManualDiscounts.

## Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.discounts)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.discounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-discounts)

  INTERFACE

  Represents subscription contract common fields.

***

## Possible returns

* edges

  [\[Subscription​Manual​Discount​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscountEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Manual​Discount!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  non-null

  A list of nodes that are contained in SubscriptionManualDiscountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Subscription​Billing​Cycle​Edited​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.discounts)
* {}[Subscription​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)
* ||-[Subscription​Contract​Base.discounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-discounts)

### Possible returns

* <->[Subscription​Manual​Discount​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection#returns-edges)
* <->[Subscription​Manual​Discount​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection#returns-nodes)
* <->[Subscription​Manual​Discount​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection#returns-pageInfo)
