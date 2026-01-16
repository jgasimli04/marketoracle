---
title: CustomerSegmentMemberConnection - GraphQL Admin
description: The connection type for the `CustomerSegmentMembers` object.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection.md
---

# Customer​Segment​Member​Connection

connection

The connection type for the `CustomerSegmentMembers` object.

## Queries with this connection

* [customer​Segment​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembers)

  query

  A paginated list of customers that belong to an individual [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment). Segments group customers based on criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). Access segment members with their profile information and purchase summary data. The connection includes statistics for analyzing segment attributes (such as average and sum calculations) and a total count of all members. The maximum page size is 1000.

  * segment​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the segment.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  * query​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the segment members query.

  * timezone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The timezone that's used to interpret relative date arguments. The timezone defaults to UTC if the timezone isn't provided.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the list. The sorting behaviour defaults to ascending order.

  * sort​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Sort the list by a given key. Valid values: • `created_at` - Sort by customer creation date • `first_order_date` - Sort by the date of the customer's first order • `last_abandoned_order_date` - Sort by the date of the customer's last abandoned checkout • `last_order_date` - Sort by the date of the customer's most recent order • `number_of_orders` - Sort by the total number of orders placed by the customer • `amount_spent` - Sort by the total amount the customer has spent across all orders

    Use with the `reverse` parameter to control sort direction (ascending by default, descending when reverse=true).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

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

  ***

***

## Possible returns

* edges

  [\[Customer​Segment​Member​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMemberEdge)

  non-null

  A list of edges.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

* statistics

  [Segment​Statistics!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentStatistics)

  non-null

  The statistics for a given segment.

* total​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total number of members in a given segment.

***

## Map

### Queries with this connection

* \<?>[customer​Segment​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembers)

### Possible returns

* <->[Customer​Segment​Member​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-edges)
* <->[Customer​Segment​Member​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-pageInfo)
* <->[Customer​Segment​Member​Connection.statistics](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-statistics)
* <->[Customer​Segment​Member​Connection.totalCount](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-totalCount)
