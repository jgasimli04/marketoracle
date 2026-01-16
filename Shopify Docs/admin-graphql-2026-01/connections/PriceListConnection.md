---
title: PriceListConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple PriceLists.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection.md
---

# Price​List​Connection

connection

An auto-generated type for paginating through multiple PriceLists.

## Queries with this connection

* [price​Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceLists)

  query

  All price lists for a shop.

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

  * sort​Key

    [Price​List​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## Possible returns

* edges

  [\[Price​List​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Price​List!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  non-null

  A list of nodes that are contained in PriceListEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[price​Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceLists)

### Possible returns

* <->[Price​List​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection#returns-edges)
* <->[Price​List​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection#returns-nodes)
* <->[Price​List​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection#returns-pageInfo)
