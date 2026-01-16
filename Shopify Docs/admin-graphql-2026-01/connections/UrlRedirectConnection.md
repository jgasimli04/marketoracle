---
title: UrlRedirectConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple UrlRedirects.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection.md
---

# Url​Redirect​Connection

connection

An auto-generated type for paginating through multiple UrlRedirects.

## Queries with this connection

* [url​Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects)

  query

  A list of redirects for a shop.

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

    [Url​Redirect​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectSortKeys)

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

    * * id

        id

      * path

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * target

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Url​Redirect​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Url​Redirect!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  non-null

  A list of nodes that are contained in UrlRedirectEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[url​Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects)

### Possible returns

* <->[Url​Redirect​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-edges)
* <->[Url​Redirect​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-nodes)
* <->[Url​Redirect​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-pageInfo)
