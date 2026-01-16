---
title: ReturnableFulfillmentLineItemConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ReturnableFulfillmentLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection.md
---

# Returnable​Fulfillment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ReturnableFulfillmentLineItems.

## Fields with this connection

* [Returnable​Fulfillment.returnableFulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment#field-ReturnableFulfillment.fields.returnableFulfillmentLineItems)

  OBJECT

  A delivered order that's eligible to be returned to the merchant. Provides the items from completed fulfillments that customers can select when initiating a return.

  Use returnable fulfillments to determine which items are eligible for return before creating a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) with the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation. The line items show quantities that are available for return.

  Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

***

## Possible returns

* edges

  [\[Returnable​Fulfillment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Returnable​Fulfillment​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItem)

  non-null

  A list of nodes that are contained in ReturnableFulfillmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Returnable​Fulfillment.returnableFulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment#field-ReturnableFulfillment.fields.returnableFulfillmentLineItems)

### Possible returns

* <->[Returnable​Fulfillment​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-edges)
* <->[Returnable​Fulfillment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-nodes)
* <->[Returnable​Fulfillment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-pageInfo)
