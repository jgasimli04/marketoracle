---
title: TenderTransactionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple TenderTransactions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection.md
---

# Tender​Transaction​Connection

connection

An auto-generated type for paginating through multiple TenderTransactions.

## Queries with this connection

* [tender​Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions)

  query

  Transactions representing a movement of money between customers and the shop. Each transaction records the amount, payment method, processing details, and the associated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Positive amounts indicate customer payments to the merchant. Negative amounts represent refunds from the merchant to the customer. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions#arguments-query) parameter to filter transactions by attributes such as transaction ID, processing date, and point-of-sale device ID.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * point\_of\_sale\_device\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * processed\_at

      time

    * test

      boolean

  ***

***

## Possible returns

* edges

  [\[Tender​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Tender​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction)

  non-null

  A list of nodes that are contained in TenderTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[tender​Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions)

### Possible returns

* <->[Tender​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-edges)
* <->[Tender​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-nodes)
* <->[Tender​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-pageInfo)
