---
title: ProductVariantPricePairConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  ProductVariantPricePairs.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection.md
---

# Product​Variant​Price​Pair​Connection

connection

An auto-generated type for paginating through multiple ProductVariantPricePairs.

## Fields with this connection

* [Product​Variant.presentmentPrices](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.presentmentPrices)

  OBJECT

  Deprecated

***

## Possible returns

* edges

  [\[Product​Variant​Price​Pair​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePairEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Variant​Price​Pair!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePair)

  non-null

  A list of nodes that are contained in ProductVariantPricePairEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Possible returns

* <->[Product​Variant​Price​Pair​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-edges)
* <->[Product​Variant​Price​Pair​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-nodes)
* <->[Product​Variant​Price​Pair​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-pageInfo)
