---
title: DeletionEventConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DeletionEvents.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection.md
---

# Deletion​Event​Connection

connection

An auto-generated type for paginating through multiple DeletionEvents.

## Queries with this connection

* [deletion​Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionEvents)

  query

  Deprecated

  * subject​Types

    [\[Deletion​Event​Subject​Type!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType)

    ### Arguments

    List of subject types to filter by.

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

  * sort​Key

    [Deletion​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * occurred\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

## Possible returns

* edges

  [\[Deletion​Event​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEventEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Deletion​Event!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEvent)

  non-null

  A list of nodes that are contained in DeletionEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Possible returns

* <->[Deletion​Event​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#returns-edges)
* <->[Deletion​Event​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#returns-nodes)
* <->[Deletion​Event​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#returns-pageInfo)
