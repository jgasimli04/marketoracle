---
title: StoreCreditAccountTransactionConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  StoreCreditAccountTransactions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection.md
---

# Store​Credit​Account​Transaction​Connection

connection

An auto-generated type for paginating through multiple StoreCreditAccountTransactions.

## Fields with this connection

* [Store​Credit​Account.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions)

  OBJECT

  A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

  The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

***

## Possible returns

* edges

  [\[Store​Credit​Account​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Store​Credit​Account​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)

  non-null

  A list of nodes that are contained in StoreCreditAccountTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Store​Credit​Account.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions)

### Possible returns

* <->[Store​Credit​Account​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection#returns-edges)
* <->[Store​Credit​Account​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection#returns-nodes)
* <->[Store​Credit​Account​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection#returns-pageInfo)
