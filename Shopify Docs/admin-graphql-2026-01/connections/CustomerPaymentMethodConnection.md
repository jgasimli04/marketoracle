---
title: CustomerPaymentMethodConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple CustomerPaymentMethods.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection.md
---

# Customer​Payment​Method​Connection

connection

An auto-generated type for paginating through multiple CustomerPaymentMethods.

## Fields with this connection

* [Customer.paymentMethods](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.paymentMethods)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  Caution

  Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  ***

***

## Possible returns

* edges

  [\[Customer​Payment​Method​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Payment​Method!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  non-null

  A list of nodes that are contained in CustomerPaymentMethodEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Customer.paymentMethods](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.paymentMethods)

### Possible returns

* <->[Customer​Payment​Method​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-edges)
* <->[Customer​Payment​Method​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-nodes)
* <->[Customer​Payment​Method​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-pageInfo)
