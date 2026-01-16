---
title: SegmentFilterConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple SegmentFilters.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection.md
---

# Segment​Filter​Connection

connection

An auto-generated type for paginating through multiple SegmentFilters.

## Queries with this connection

* [segment​Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilters)

  query

  A list of filters.

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

  ***

* [segment​Filter​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilterSuggestions)

  query

  A list of filter suggestions associated with a segment. A segment is a group of members (commonly customers) that meet specific criteria.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Returns the elements of a list by keyword or term.

  * first

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  ***

***

## Possible returns

* edges

  [\[Segment​Filter​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentFilterEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Segment​Filter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)

  non-null

  A list of nodes that are contained in SegmentFilterEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[segment​Filter​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilterSuggestions)
* \<?>[segment​Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilters)

### Possible returns

* <->[Segment​Filter​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection#returns-edges)
* <->[Segment​Filter​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection#returns-nodes)
* <->[Segment​Filter​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection#returns-pageInfo)
