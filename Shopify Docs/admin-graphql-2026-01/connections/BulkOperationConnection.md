---
title: BulkOperationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple BulkOperations.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection.md
---

# Bulk​Operation​Connection

connection

An auto-generated type for paginating through multiple BulkOperations.

## Queries with this connection

* [bulk​Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperations)

  query

  Returns the app's bulk operations meeting the specified filters. Defaults to sorting by created\_at, with newest operations first.

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

    [Bulk​Operations​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

      Filter operations created after a specific date.

    * * id

        id

      * operation\_type

        string

      * status

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter operations by type.

      - Valid values:

        * `query`
        * `mutation`

        Filter operations by status.

        Valid values:

        * `canceled`
        * `canceling`
        * `completed`
        * `created`
        * `failed`
        * `running`

  ***

***

## Possible returns

* edges

  [\[Bulk​Operation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Bulk​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  non-null

  A list of nodes that are contained in BulkOperationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[bulk​Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperations)

### Possible returns

* <->[Bulk​Operation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-edges)
* <->[Bulk​Operation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-nodes)
* <->[Bulk​Operation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-pageInfo)
