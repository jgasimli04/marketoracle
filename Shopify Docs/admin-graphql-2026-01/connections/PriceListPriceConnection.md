---
title: PriceListPriceConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple PriceListPrices.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection.md
---

# Price​List​Price​Connection

connection

An auto-generated type for paginating through multiple PriceListPrices.

## Fields with this connection

* [Price​List.prices](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.prices)

  OBJECT

  A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.

  Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.

  Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

***

## Possible returns

* edges

  [\[Price​List​Price​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Price​List​Price!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)

  non-null

  A list of nodes that are contained in PriceListPriceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Price​List.prices](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.prices)

### Possible returns

* <->[Price​List​Price​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-edges)
* <->[Price​List​Price​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-nodes)
* <->[Price​List​Price​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-pageInfo)
