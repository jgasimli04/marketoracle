---
title: DiscountNodeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DiscountNodes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection.md
---

# Discount​Node​Connection

connection

An auto-generated type for paginating through multiple DiscountNodes.

## Fields with this connection

* [Customer​Merge​Preview​Default​Fields.discountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodes)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

## Queries with this connection

* [discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes)

  query

  Returns a list of discounts.

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

    [Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * code

        string

      * combines\_with

        string

      * created\_at

        time

      * discount\_class

        string

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * method

        string

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

        Filter by the discount code. Not supported for bulk discounts.

      - Example:

        * `code:WELCOME10`

        Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with.

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by the date and time, in the shop's timezone, when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes).

      - Valid values:

        * `order`
        * `product`
        * `shipping`

        Example:

        * `discount_class:product`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount ends.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods).

      - Valid values:

        * `automatic`
        * `code`

        Example:

        * `method:code`

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

        Filter by the discount name that displays to merchants in the Shopify admin and to customers.

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

        Filter by the date and time, in the shop's timezone, when the discount was last updated.

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

  [\[Discount​Node​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Node!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode)

  non-null

  A list of nodes that are contained in DiscountNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Customer​Merge​Preview​Default​Fields.discountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodes)

### Queries with this connection

* \<?>[discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes)

### Possible returns

* <->[Discount​Node​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-edges)
* <->[Discount​Node​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-nodes)
* <->[Discount​Node​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-pageInfo)
