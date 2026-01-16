---
title: ShopifyPaymentsDisputeConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ShopifyPaymentsDisputes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection.md
---

# Shopify​Payments​Dispute​Connection

connection

An auto-generated type for paginating through multiple ShopifyPaymentsDisputes.

## Fields with this connection

* [Shopify​Payments​Account.disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.disputes)

  OBJECT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

***

## Queries with this connection

* [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)

  query

  All disputes related to the Shop.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * initiated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

  ***

***

## Possible returns

* edges

  [\[Shopify​Payments​Dispute​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Payments​Dispute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute)

  non-null

  A list of nodes that are contained in ShopifyPaymentsDisputeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Shopify​Payments​Account.disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.disputes)

### Queries with this connection

* \<?>[disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)

### Possible returns

* <->[Shopify​Payments​Dispute​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-edges)
* <->[Shopify​Payments​Dispute​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-nodes)
* <->[Shopify​Payments​Dispute​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-pageInfo)
