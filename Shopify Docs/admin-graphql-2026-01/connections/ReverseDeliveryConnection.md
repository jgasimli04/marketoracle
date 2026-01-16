---
title: ReverseDeliveryConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ReverseDeliveries.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection.md
---

# Reverse​Delivery​Connection

connection

An auto-generated type for paginating through multiple ReverseDeliveries.

## Fields with this connection

* [Reverse​Fulfillment​Order.reverseDeliveries](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.reverseDeliveries)

  OBJECT

  A group of one or more items in a return that will be processed at a fulfillment service. There can be more than one reverse fulfillment order for a return at a given location.

***

## Possible returns

* edges

  [\[Reverse​Delivery​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Delivery!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  non-null

  A list of nodes that are contained in ReverseDeliveryEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Reverse​Fulfillment​Order.reverseDeliveries](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.reverseDeliveries)

### Possible returns

* <->[Reverse​Delivery​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-edges)
* <->[Reverse​Delivery​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-nodes)
* <->[Reverse​Delivery​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-pageInfo)
