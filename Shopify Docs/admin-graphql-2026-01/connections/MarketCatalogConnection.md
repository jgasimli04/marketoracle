---
title: MarketCatalogConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple MarketCatalogs.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection.md
---

# Market​Catalog​Connection

connection

An auto-generated type for paginating through multiple MarketCatalogs.

## Fields with this connection

* [Market.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.catalogs)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Markets​Resolved​Values.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.catalogs)

  OBJECT

  The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

***

## Possible returns

* edges

  [\[Market​Catalog​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalogEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Catalog!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog)

  non-null

  A list of nodes that are contained in MarketCatalogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Market.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.catalogs)
* {}[Markets​Resolved​Values.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.catalogs)

### Possible returns

* <->[Market​Catalog​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-edges)
* <->[Market​Catalog​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-nodes)
* <->[Market​Catalog​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-pageInfo)
