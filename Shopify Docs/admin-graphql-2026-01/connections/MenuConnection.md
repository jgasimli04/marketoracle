---
title: MenuConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Menus.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection.md
---

# Menu​Connection

connection

An auto-generated type for paginating through multiple Menus.

## Queries with this connection

* [menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)

  query

  Retrieves navigation menus. Menus organize content into hierarchical navigation structures that merchants can display in the online store (for example, in headers, footers, and sidebars) and customer accounts.

  Each [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) contains a handle for identification, a title for display, and a collection of [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects that can be nested up to 3 levels deep. Default menus have protected handles that can't be modified.

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

    [Menu​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * title

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

  [\[Menu​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Menu!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  non-null

  A list of nodes that are contained in MenuEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)

### Possible returns

* <->[Menu​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#returns-edges)
* <->[Menu​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#returns-nodes)
* <->[Menu​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#returns-pageInfo)
