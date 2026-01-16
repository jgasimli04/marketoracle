---
title: FulfillmentLineItemConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple FulfillmentLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection.md
---

# Fulfillment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple FulfillmentLineItems.

## Fields with this connection

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

***

## Possible returns

* edges

  [\[Fulfillment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem)

  non-null

  A list of nodes that are contained in FulfillmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

### Possible returns

* <->[Fulfillment​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection#returns-edges)
* <->[Fulfillment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection#returns-nodes)
* <->[Fulfillment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection#returns-pageInfo)
