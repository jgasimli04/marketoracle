---
title: CommentConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Comments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection.md
---

# Comment​Connection

connection

An auto-generated type for paginating through multiple Comments.

## Fields with this connection

* [Article.comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments)

  OBJECT

  An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

  Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

***

## Queries with this connection

* [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)

  query

  List of the shop's comments.

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

    [Comment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * id

        id

      * published\_at

        time

      * published\_status

        string

      * status

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the comment was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the comment was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

      - Valid values:
        * `any`
        * `published`
        * `unpublished`
        Example:
        * `published_status:any`
        * `published_status:published`
        * `published_status:unpublished`

    * updated\_at

      time

      Filter by the date and time when the comment was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

  ***

***

## Possible returns

* edges

  [\[Comment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Comment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  non-null

  A list of nodes that are contained in CommentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Article.comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments)

### Queries with this connection

* \<?>[comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)

### Possible returns

* <->[Comment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-edges)
* <->[Comment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-nodes)
* <->[Comment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-pageInfo)
