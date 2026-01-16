---
title: ReverseFulfillmentOrderConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ReverseFulfillmentOrders.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection.md
---

# Reverse​Fulfillment​Order​Connection

connection

An auto-generated type for paginating through multiple ReverseFulfillmentOrders.

## Fields with this connection

* [Return.reverseFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.reverseFulfillmentOrders)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

***

## Possible returns

* edges

  [\[Reverse​Fulfillment​Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Fulfillment​Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder)

  non-null

  A list of nodes that are contained in ReverseFulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Return.reverseFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.reverseFulfillmentOrders)

### Possible returns

* <->[Reverse​Fulfillment​Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection#returns-edges)
* <->[Reverse​Fulfillment​Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection#returns-nodes)
* <->[Reverse​Fulfillment​Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection#returns-pageInfo)
