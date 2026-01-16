---
title: PriceListPriceOriginType - GraphQL Admin
description: >-
  Represents the origin of a price, either fixed (defined on the price list) or
  relative (calculated using a price list adjustment configuration). For
  examples, refer to
  [PriceList](https://shopify.dev/api/admin-graphql/latest/queries/priceList#section-examples).
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType.md
---

# Price​List​Price​Origin​Type

enum

Represents the origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration). For examples, refer to [PriceList](https://shopify.dev/api/admin-graphql/latest/queries/priceList#section-examples).

## Valid values

* FIXED

  The price is defined on the price list.

* RELATIVE

  The price is relative to the adjustment type and value.

***

## Fields

* [Price​List.prices(originType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.prices.arguments.originType)

  ARGUMENT

  A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.

  Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.

  Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

* [Price​List​Price.originType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.originType)

  OBJECT

  Pricing for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Represents the variant's price, compare-at price, and whether the price is fixed or calculated using percentage-based adjustments. The [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType) distinguishes between prices set directly on the price list (fixed) and prices calculated using the price list's adjustment configuration (relative).

  Learn more about [building catalogs with different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

***

## Map

### Fields with this enum

* <-|[Price​List​Price.originType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.originType)

### Arguments with this enum

* <-|[Price​List.prices(originType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.prices.arguments.originType)
