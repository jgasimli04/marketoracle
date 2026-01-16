---
title: MarketLocalizableResourceConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  MarketLocalizableResources.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection.md
---

# Market​Localizable​Resource​Connection

connection

An auto-generated type for paginating through multiple MarketLocalizableResources.

## Queries with this connection

* [market​Localizable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResources)

  query

  Resources that can have localized values for different markets.

  * resource​Type

    [Market​Localizable​Resource​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketLocalizableResourceType)

    required

    ### Arguments

    Return only resources of a type.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* [market​Localizable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResourcesByIds)

  query

  Resources that can have localized values for different markets.

  * resource​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Return only resources for given IDs.

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

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Possible returns

* edges

  [\[Market​Localizable​Resource​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResourceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Localizable​Resource!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource)

  non-null

  A list of nodes that are contained in MarketLocalizableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[market​Localizable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResources)
* \<?>[market​Localizable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResourcesByIds)

### Possible returns

* <->[Market​Localizable​Resource​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-edges)
* <->[Market​Localizable​Resource​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-nodes)
* <->[Market​Localizable​Resource​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-pageInfo)
