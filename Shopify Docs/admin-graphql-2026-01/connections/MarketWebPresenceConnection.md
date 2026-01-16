---
title: MarketWebPresenceConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple MarketWebPresences.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection.md
---

# Market​Web​Presence​Connection

connection

An auto-generated type for paginating through multiple MarketWebPresences.

## Fields with this connection

* [Market.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.webPresences)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Markets​Resolved​Values.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.webPresences)

  OBJECT

  The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

***

## Queries with this connection

* [web​Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPresences)

  query

  The web presences for the shop.

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

  [\[Market​Web​Presence​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Web​Presence!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  non-null

  A list of nodes that are contained in MarketWebPresenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Market.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.webPresences)
* {}[Markets​Resolved​Values.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.webPresences)

### Queries with this connection

* \<?>[web​Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPresences)

### Possible returns

* <->[Market​Web​Presence​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#returns-edges)
* <->[Market​Web​Presence​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#returns-nodes)
* <->[Market​Web​Presence​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#returns-pageInfo)
