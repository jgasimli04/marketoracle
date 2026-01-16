---
title: FulfillmentEventConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple FulfillmentEvents.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection.md
---

# Fulfillment​Event​Connection

connection

An auto-generated type for paginating through multiple FulfillmentEvents.

## Fields with this connection

* [Fulfillment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.events)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

***

## Possible returns

* edges

  [\[Fulfillment​Event​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEventEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Event!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent)

  non-null

  A list of nodes that are contained in FulfillmentEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Fulfillment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.events)

### Possible returns

* <->[Fulfillment​Event​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#returns-edges)
* <->[Fulfillment​Event​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#returns-nodes)
* <->[Fulfillment​Event​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#returns-pageInfo)
