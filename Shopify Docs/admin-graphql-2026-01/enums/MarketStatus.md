---
title: MarketStatus - GraphQL Admin
description: The possible market statuses.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus.md'
---

# Market​Status

enum

The possible market statuses.

## Valid values

* ACTIVE

  The market is active.

* DRAFT

  The market is in draft.

***

## Fields

* [Market.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.status)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Market​Catalog.markets(status)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets.arguments.status)

  ARGUMENT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets and defines what [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see through its [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings. The catalog can include a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

* [Market​Catalog.marketsCount(status)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.marketsCount.arguments.status)

  ARGUMENT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets and defines what [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see through its [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings. The catalog can include a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

* [Market​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput#fields-status)

  INPUT OBJECT

  The input fields required to create a market.

* [Market​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput#fields-status)

  INPUT OBJECT

  The input fields used to update a market.

***

## Map

### Fields with this enum

* <-|[Market.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.status)

### Inputs with this enum

* [Market​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCreateInput#fields-status)
* [Market​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketUpdateInput#fields-status)

### Arguments with this enum

* <-|[Market​Catalog.markets(status)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets.arguments.status)
* <-|[Market​Catalog.marketsCount(status)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.marketsCount.arguments.status)
