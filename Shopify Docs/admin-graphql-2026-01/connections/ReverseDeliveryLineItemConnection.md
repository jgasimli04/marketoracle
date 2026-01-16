---
title: ReverseDeliveryLineItemConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ReverseDeliveryLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection.md
---

# Reverse​Delivery​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ReverseDeliveryLineItems.

## Fields with this connection

* [Reverse​Delivery.reverseDeliveryLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.reverseDeliveryLineItems)

  OBJECT

  A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant. For example, a buyer requests a return, and a merchant sends the buyer a shipping label. The reverse delivery contains the context of the items sent back, how they're being sent back (for example, a shipping label), and the current state of the delivery (tracking information).

***

## Possible returns

* edges

  [\[Reverse​Delivery​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Delivery​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItem)

  non-null

  A list of nodes that are contained in ReverseDeliveryLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Reverse​Delivery.reverseDeliveryLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.reverseDeliveryLineItems)

### Possible returns

* <->[Reverse​Delivery​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-edges)
* <->[Reverse​Delivery​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-nodes)
* <->[Reverse​Delivery​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-pageInfo)
