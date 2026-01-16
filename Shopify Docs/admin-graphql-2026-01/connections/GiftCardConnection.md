---
title: GiftCardConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple GiftCards.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection.md
---

# Gift​Card​Connection

connection

An auto-generated type for paginating through multiple GiftCards.

## Fields with this connection

* [Customer​Merge​Preview​Default​Fields.giftCards](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.giftCards)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

## Queries with this connection

* [gift​Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards)

  query

  Returns a paginated list of [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) objects issued for the shop.

  You can filter gift cards by attributes such as status, last characters of the code, balance status, and other values using the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards#arguments-query) parameter. You can also apply [`SavedSearch`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) objects to filter results.

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

    [Gift​Card​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * balance\_status

        string

      * created\_at

        time

      * expires\_on

        date

      * id

        id

      * initial\_value

        string

      * source

        string

      * status

        string

      - Filter by a case-insensitive search of multiple fields in a document, including gift card codes.

      - Example:
        * `query=a5bh6h64b329j4k7`
        * `query=Bob Norman`

      - Valid values:
        * `full`
        * `partial`
        * `empty`
        * `full_or_partial`
        Example:
        * `balance_status:full`

      - Example:
        * `created_at:>=2020-01-01T12:00:00Z`

      - Example:

        * `expires_on:>=2020-01-01`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

      - Example:
        * `initial_value:>=100`

      - Valid values:
        * `manual`
        * `purchased`
        * `api_client`
        Example:
        * `source:manual`
        Valid values:
        * `disabled`
        * `enabled`
        * `expired`
        * `expiring`
        Example:
        * `status:disabled OR status:expired`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Gift​Card​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Gift​Card!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  non-null

  A list of nodes that are contained in GiftCardEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Customer​Merge​Preview​Default​Fields.giftCards](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.giftCards)

### Queries with this connection

* \<?>[gift​Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards)

### Possible returns

* <->[Gift​Card​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-edges)
* <->[Gift​Card​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-nodes)
* <->[Gift​Card​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-pageInfo)
