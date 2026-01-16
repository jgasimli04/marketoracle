---
title: MobilePlatformApplicationConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  MobilePlatformApplications.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection.md
---

# Mobile​Platform​Application​Connection

connection

An auto-generated type for paginating through multiple MobilePlatformApplications.

## Queries with this connection

* [mobile​Platform​Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobilePlatformApplications)

  query

  List the mobile platform applications.

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

  ***

***

## Possible returns

* edges

  [\[Mobile​Platform​Application​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Mobile​Platform​Application!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  non-null

  A list of nodes that are contained in MobilePlatformApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[mobile​Platform​Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobilePlatformApplications)

### Possible returns

* <->[Mobile​Platform​Application​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-edges)
* <->[Mobile​Platform​Application​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-nodes)
* <->[Mobile​Platform​Application​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-pageInfo)
