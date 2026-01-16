---
title: CalculatedLineItemConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple CalculatedLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection.md
---

# Calculated​Line​Item​Connection

connection

An auto-generated type for paginating through multiple CalculatedLineItems.

## Fields with this connection

* [Calculated​Order.addedLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedLineItems)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

* [Calculated​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.lineItems)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

***

## Possible returns

* edges

  [\[Calculated​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Calculated​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  non-null

  A list of nodes that are contained in CalculatedLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Calculated​Order.addedLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedLineItems)
* {}[Calculated​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.lineItems)

### Possible returns

* <->[Calculated​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-edges)
* <->[Calculated​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-nodes)
* <->[Calculated​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-pageInfo)
