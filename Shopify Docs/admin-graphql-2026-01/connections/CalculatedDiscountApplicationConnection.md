---
title: CalculatedDiscountApplicationConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  CalculatedDiscountApplications.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection.md
---

# Calculated​Discount​Application​Connection

connection

An auto-generated type for paginating through multiple CalculatedDiscountApplications.

## Fields with this connection

* [Calculated​Order.addedDiscountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedDiscountApplications)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

***

## Possible returns

* edges

  [\[Calculated​Discount​Application​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountApplicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Calculated​Discount​Application!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication)

  non-null

  A list of nodes that are contained in CalculatedDiscountApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Calculated​Order.addedDiscountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedDiscountApplications)

### Possible returns

* <->[Calculated​Discount​Application​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-edges)
* <->[Calculated​Discount​Application​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-nodes)
* <->[Calculated​Discount​Application​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-pageInfo)
