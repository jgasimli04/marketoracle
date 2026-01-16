---
title: AbandonedCheckoutLineItemConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  AbandonedCheckoutLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection.md
---

# Abandoned​Checkout​Line​Item​Connection

connection

An auto-generated type for paginating through multiple AbandonedCheckoutLineItems.

## Fields with this connection

* [Abandoned​Checkout.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems)

  OBJECT

  An incomplete checkout where the customer added items and provided contact information but didn't complete the purchase. Tracks the customer's cart contents, pricing details, addresses, and timestamps to enable recovery campaigns and abandonment analytics.

  The checkout includes a recovery URL that merchants can send to customers to resume their purchase. [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects preserve the original [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) selections, quantities, and pricing at the time of abandonment.

***

## Possible returns

* edges

  [\[Abandoned​Checkout​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Abandoned​Checkout​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem)

  non-null

  A list of nodes that are contained in AbandonedCheckoutLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Abandoned​Checkout.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems)

### Possible returns

* <->[Abandoned​Checkout​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-edges)
* <->[Abandoned​Checkout​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-nodes)
* <->[Abandoned​Checkout​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-pageInfo)
