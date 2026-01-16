---
title: LineItemConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple LineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection.md
---

# Line​Item​Connection

connection

An auto-generated type for paginating through multiple LineItems.

## Fields with this connection

* [Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems)

  OBJECT

  The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

  Use the `Order` object when you need to:

  * Display order details on customer account pages or admin dashboards.
  * Create orders for phone sales, wholesale customers, or subscription services.
  * Update order information like shipping addresses, notes, or fulfillment status.
  * Process returns, exchanges, and partial refunds.
  * Generate invoices, receipts, and shipping labels.

  The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

  ***

  Note

  Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

  ***

  ***

  Caution

  Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

  ***

  Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

* [Order.nonFulfillableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.nonFulfillableLineItems)

  OBJECT

  The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

  Use the `Order` object when you need to:

  * Display order details on customer account pages or admin dashboards.
  * Create orders for phone sales, wholesale customers, or subscription services.
  * Update order information like shipping addresses, notes, or fulfillment status.
  * Process returns, exchanges, and partial refunds.
  * Generate invoices, receipts, and shipping labels.

  The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

  ***

  Note

  Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

  ***

  ***

  Caution

  Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

  ***

  Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

***

## Possible returns

* edges

  [\[Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  A list of nodes that are contained in LineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems)
* {}[Order.nonFulfillableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.nonFulfillableLineItems)

### Possible returns

* <->[Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-edges)
* <->[Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-nodes)
* <->[Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-pageInfo)
