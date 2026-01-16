---
title: MarketType - GraphQL Admin
description: The market types.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType.md'
---

# Market​Type

enum

The market types.

## Valid values

* COMPANY\_​LOCATION

  The market applies to the visitor based on the company location.

* LOCATION

  The market applies to the visitor based on the location.

* NONE

  The market does not apply to any visitor.

* REGION

  The market applies to the visitor based on region.

***

## Fields

* [Market.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.type)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Market​Catalog.markets(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets.arguments.type)

  ARGUMENT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets and defines what [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see through its [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings. The catalog can include a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

* [Market​Catalog.marketsCount(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.marketsCount.arguments.type)

  ARGUMENT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets and defines what [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see through its [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings. The catalog can include a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

* [Query​Root.markets(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.markets.arguments.type)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [markets.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-type)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Market.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.type)

### Arguments with this enum

* <-|[Market​Catalog.markets(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets.arguments.type)
* <-|[Market​Catalog.marketsCount(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.marketsCount.arguments.type)
* <-|[Query​Root.markets(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.markets.arguments.type)
* <-|[markets.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets#arguments-type)
