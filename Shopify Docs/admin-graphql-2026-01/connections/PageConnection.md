---
title: PageConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Pages.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection.md
---

# Page​Connection

connection

An auto-generated type for paginating through multiple Pages.

## Queries with this connection

* [pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)

  query

  A paginated list of pages from the online store. [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) objects are content pages that merchants create to provide information to customers, such as "About Us", "Contact", or policy pages.

  The query supports filtering with a [search query](https://shopify.dev/docs/api/usage/search-syntax) and sorting by various criteria. Advanced filtering is available through saved searches using the [`savedSearchId`](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages#arguments-savedSearchId) argument.

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

    [Page​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * handle

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the page was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by the handle of the page.

    * * id

        id

      * published\_at

        time

      * published\_status

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the page was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

    * title

      string

      Filter by the title of the page.

    * updated\_at

      time

      Filter by the date and time when the page was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Page​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Page!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  non-null

  A list of nodes that are contained in PageEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)

### Possible returns

* <->[Page​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#returns-edges)
* <->[Page​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#returns-nodes)
* <->[Page​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#returns-pageInfo)
