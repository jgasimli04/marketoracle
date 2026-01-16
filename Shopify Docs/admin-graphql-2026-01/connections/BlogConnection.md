---
title: BlogConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Blogs.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection.md
---

# Blog​Connection

connection

An auto-generated type for paginating through multiple Blogs.

## Queries with this connection

* [blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)

  query

  Returns a paginated list of the shop's [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) objects. Blogs serve as containers for [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects and provide content management capabilities for the store's editorial content.

  Supports [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to control the number of blogs returned and their order. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-query) argument to filter results by specific criteria.

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

    [Blog​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * handle

      string

    * * id

        id

      * title

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  ***

***

## Possible returns

* edges

  [\[Blog​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Blog!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  non-null

  A list of nodes that are contained in BlogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)

### Possible returns

* <->[Blog​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-edges)
* <->[Blog​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-nodes)
* <->[Blog​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-pageInfo)
