---
title: SegmentConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Segments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection.md
---

# Segment​Connection

connection

An auto-generated type for paginating through multiple Segments.

## Queries with this connection

* [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)

  query

  Returns a paginated list of [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) objects for the shop. Segments are dynamic groups of customers that meet specific criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). You can filter segments by search query and sort them by creation date or other criteria.

  The query supports standard [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) arguments and returns a [`SegmentConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentConnection) containing segment details including names, creation dates, and the query definitions that determine segment membership.

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

    [Segment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SegmentSortKeys)

    Default:CREATION\_DATE

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * name

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

## Possible returns

* edges

  [\[Segment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Segment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  non-null

  A list of nodes that are contained in SegmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)

### Possible returns

* <->[Segment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-edges)
* <->[Segment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-nodes)
* <->[Segment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-pageInfo)
