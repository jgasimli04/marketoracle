---
title: QuantityPriceBreakConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple QuantityPriceBreaks.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection.md
---

# Quantity​Price​Break​Connection

connection

An auto-generated type for paginating through multiple QuantityPriceBreaks.

## Fields with this connection

* [Price​List​Price.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.quantityPriceBreaks)

  OBJECT

  Pricing for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Represents the variant's price, compare-at price, and whether the price is fixed or calculated using percentage-based adjustments. The [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType) distinguishes between prices set directly on the price list (fixed) and prices calculated using the price list's adjustment configuration (relative).

  Learn more about [building catalogs with different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

* [Product​Variant​Contextual​Pricing.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityPriceBreaks)

  OBJECT

  The price of a product variant in a specific country. Prices vary between countries.

***

## Possible returns

* edges

  [\[Quantity​Price​Break​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreakEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Quantity​Price​Break!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak)

  non-null

  A list of nodes that are contained in QuantityPriceBreakEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Price​List​Price.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.quantityPriceBreaks)
* {}[Product​Variant​Contextual​Pricing.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityPriceBreaks)

### Possible returns

* <->[Quantity​Price​Break​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-edges)
* <->[Quantity​Price​Break​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-nodes)
* <->[Quantity​Price​Break​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-pageInfo)
