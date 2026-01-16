---
title: AppDiscountTypeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple AppDiscountTypes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection.md
---

# App​Discount​Type​Connection

connection

An auto-generated type for paginating through multiple AppDiscountTypes.

## Queries with this connection

* [app​Discount​Types​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypesNodes)

  query

  A list of app discount types installed by apps.

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

  [\[App​Discount​Type​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountTypeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Discount​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

  non-null

  A list of nodes that are contained in AppDiscountTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[app​Discount​Types​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypesNodes)

### Possible returns

* <->[App​Discount​Type​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-edges)
* <->[App​Discount​Type​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-nodes)
* <->[App​Discount​Type​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-pageInfo)
