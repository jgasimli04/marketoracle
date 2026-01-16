---
title: ReturnableFulfillmentConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ReturnableFulfillments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection.md
---

# Returnable​Fulfillment​Connection

connection

An auto-generated type for paginating through multiple ReturnableFulfillments.

## Queries with this connection

* [returnable​Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillments)

  query

  List of returnable fulfillments.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Order ID that will scope all returnable fulfillments.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Possible returns

* edges

  [\[Returnable​Fulfillment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Returnable​Fulfillment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment)

  non-null

  A list of nodes that are contained in ReturnableFulfillmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[returnable​Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillments)

### Possible returns

* <->[Returnable​Fulfillment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-edges)
* <->[Returnable​Fulfillment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-nodes)
* <->[Returnable​Fulfillment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-pageInfo)
