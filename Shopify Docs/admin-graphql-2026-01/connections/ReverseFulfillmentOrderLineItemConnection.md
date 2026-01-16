---
title: ReverseFulfillmentOrderLineItemConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ReverseFulfillmentOrderLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection.md
---

# Reverse​Fulfillment​Order​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ReverseFulfillmentOrderLineItems.

## Fields with this connection

* [Reverse​Fulfillment​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.lineItems)

  OBJECT

  A group of one or more items in a return that will be processed at a fulfillment service. There can be more than one reverse fulfillment order for a return at a given location.

***

## Possible returns

* edges

  [\[Reverse​Fulfillment​Order​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Fulfillment​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  non-null

  A list of nodes that are contained in ReverseFulfillmentOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Reverse​Fulfillment​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.lineItems)

### Possible returns

* <->[Reverse​Fulfillment​Order​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-edges)
* <->[Reverse​Fulfillment​Order​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-nodes)
* <->[Reverse​Fulfillment​Order​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-pageInfo)
