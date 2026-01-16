---
title: ShopifyPaymentsPayoutConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ShopifyPaymentsPayouts.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection.md
---

# Shopify​Payments​Payout​Connection

connection

An auto-generated type for paginating through multiple ShopifyPaymentsPayouts.

## Fields with this connection

* [Shopify​Payments​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts)

  OBJECT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

* [Shopify​Payments​Bank​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts)

  OBJECT

  A bank account that can receive payouts.

***

## Possible returns

* edges

  [\[Shopify​Payments​Payout​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Payments​Payout!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout)

  non-null

  A list of nodes that are contained in ShopifyPaymentsPayoutEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Shopify​Payments​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts)
* {}[Shopify​Payments​Bank​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts)

### Possible returns

* <->[Shopify​Payments​Payout​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-edges)
* <->[Shopify​Payments​Payout​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-nodes)
* <->[Shopify​Payments​Payout​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-pageInfo)
