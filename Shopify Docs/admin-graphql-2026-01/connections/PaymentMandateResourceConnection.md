---
title: PaymentMandateResourceConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  PaymentMandateResources.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection.md
---

# Payment​Mandate​Resource​Connection

connection

An auto-generated type for paginating through multiple PaymentMandateResources.

## Fields with this connection

* [Customer​Payment​Method.mandates](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.mandates)

  OBJECT

  A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

  The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

***

## Possible returns

* edges

  [\[Payment​Mandate​Resource​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResourceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Payment​Mandate​Resource!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResource)

  non-null

  A list of nodes that are contained in PaymentMandateResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Customer​Payment​Method.mandates](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.mandates)

### Possible returns

* <->[Payment​Mandate​Resource​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-edges)
* <->[Payment​Mandate​Resource​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-nodes)
* <->[Payment​Mandate​Resource​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-pageInfo)
