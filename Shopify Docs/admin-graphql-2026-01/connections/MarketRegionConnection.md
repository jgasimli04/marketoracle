---
title: MarketRegionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple MarketRegions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection.md
---

# Market​Region​Connection

connection

An auto-generated type for paginating through multiple MarketRegions.

## Fields with this connection

* [Regions​Condition.regions](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition#field-RegionsCondition.fields.regions)

  OBJECT

  A condition checking the visitor's region.

* [Market.regions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.regions)

  OBJECT

  Deprecated

***

## Possible returns

* edges

  [\[Market​Region​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Region!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

  non-null

  A list of nodes that are contained in MarketRegionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Regions​Condition.regions](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition#field-RegionsCondition.fields.regions)

### Possible returns

* <->[Market​Region​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection#returns-edges)
* <->[Market​Region​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection#returns-nodes)
* <->[Market​Region​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection#returns-pageInfo)
