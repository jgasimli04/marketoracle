---
title: DiscountCodeNodeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DiscountCodeNodes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection.md
---

# Discount​Code​Node​Connection

connection

An auto-generated type for paginating through multiple DiscountCodeNodes.

## Queries with this connection

* [code​Discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes)

  query

  Deprecated

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

    [Code​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CodeDiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * combines\_with

        string

      * created\_at

        time

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * starts\_at

        time

      * status

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by the date and time when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `discount_type:fixed_amount`

        Filter by the date and time when the discount expires and is no longer available for customer use.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`

        Filter by the date and time when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

## Possible returns

* edges

  [\[Discount​Code​Node​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Code​Node!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  non-null

  A list of nodes that are contained in DiscountCodeNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Possible returns

* <->[Discount​Code​Node​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-edges)
* <->[Discount​Code​Node​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-nodes)
* <->[Discount​Code​Node​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-pageInfo)
