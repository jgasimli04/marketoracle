---
title: ProductFeedConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ProductFeeds.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection.md
---

# Product​Feed​Connection

connection

An auto-generated type for paginating through multiple ProductFeeds.

## Queries with this connection

* [product​Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeeds)

  query

  The product feeds for the shop.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

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

  [\[Product​Feed​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Feed!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed)

  non-null

  A list of nodes that are contained in ProductFeedEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[product​Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeeds)

### Possible returns

* <->[Product​Feed​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection#returns-edges)
* <->[Product​Feed​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection#returns-nodes)
* <->[Product​Feed​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection#returns-pageInfo)
