---
title: GiftCardTransactionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple GiftCardTransactions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection.md
---

# Gift​Card​Transaction​Connection

connection

An auto-generated type for paginating through multiple GiftCardTransactions.

## Fields with this connection

* [Gift​Card.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.transactions)

  OBJECT

  A gift card that customers use as a payment method. Stores the initial value, current balance, and expiration date.

  You can issue gift cards to a specific [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or send them to a [`GiftCardRecipient`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient) with a personalized message. The card tracks its transaction history through [`GiftCardCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction) and [`GiftCardDebitTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction) records. You can create and deactivate gift cards using the [`GiftCardCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate) and [`GiftCardDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate) mutations, respectively.

  ***

  Note

  After a gift card is deactivated, it can't be used for further purchases or re-enabled.

  ***

***

## Possible returns

* edges

  [\[Gift​Card​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Gift​Card​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction)

  non-null

  A list of nodes that are contained in GiftCardTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Gift​Card.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.transactions)

### Possible returns

* <->[Gift​Card​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection#returns-edges)
* <->[Gift​Card​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection#returns-nodes)
* <->[Gift​Card​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection#returns-pageInfo)
