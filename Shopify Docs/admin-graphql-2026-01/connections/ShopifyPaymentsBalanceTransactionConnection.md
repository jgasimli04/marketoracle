---
title: ShopifyPaymentsBalanceTransactionConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ShopifyPaymentsBalanceTransactions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection.md
---

# Shopify​Payments​Balance​Transaction​Connection

connection

An auto-generated type for paginating through multiple ShopifyPaymentsBalanceTransactions.

## Fields with this connection

* [Shopify​Payments​Account.balanceTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.balanceTransactions)

  OBJECT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

***

## Possible returns

* edges

  [\[Shopify​Payments​Balance​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Payments​Balance​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction)

  non-null

  A list of nodes that are contained in ShopifyPaymentsBalanceTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Shopify​Payments​Account.balanceTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.balanceTransactions)

### Possible returns

* <->[Shopify​Payments​Balance​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-edges)
* <->[Shopify​Payments​Balance​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-nodes)
* <->[Shopify​Payments​Balance​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-pageInfo)
