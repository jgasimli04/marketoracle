---
title: AbandonedCheckoutConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple AbandonedCheckouts.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection.md
---

# Abandoned​Checkout​Connection

connection

An auto-generated type for paginating through multiple AbandonedCheckouts.

## Queries with this connection

* [abandoned​Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts)

  query

  Returns a list of abandoned checkouts. A checkout is considered abandoned when a customer adds contact information but doesn't complete their purchase. Includes both abandoned and recovered checkouts.

  Each checkout provides [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) details, [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects, pricing information, and a recovery URL for re-engaging customers who didn't complete their purchase.

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

    [Abandoned​Checkout​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonedCheckoutSortKeys)

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

        The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created.

    * email\_state

      string

      Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`.

    * * id

        id

      * recovery\_state

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Possible values: `recovered` and `not_recovered`.

    * status

      string

      Possible values: `open` and `closed`.

    * updated\_at

      time

      The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Abandoned​Checkout​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Abandoned​Checkout!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout)

  non-null

  A list of nodes that are contained in AbandonedCheckoutEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[abandoned​Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts)

### Possible returns

* <->[Abandoned​Checkout​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-edges)
* <->[Abandoned​Checkout​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-nodes)
* <->[Abandoned​Checkout​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-pageInfo)
