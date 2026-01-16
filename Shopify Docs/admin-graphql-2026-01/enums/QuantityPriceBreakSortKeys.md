---
title: QuantityPriceBreakSortKeys - GraphQL Admin
description: The set of valid sort keys for the QuantityPriceBreak query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPriceBreakSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityPriceBreakSortKeys.md
---

# Quantity​Price​Break​Sort​Keys

enum

The set of valid sort keys for the QuantityPriceBreak query.

## Valid values

* ID

  Sort by the `id` value.

* MINIMUM\_​QUANTITY

  Sort by the `minimum_quantity` value.

***

## Fields

* [Price​List​Price.quantityPriceBreaks(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.quantityPriceBreaks.arguments.sortKey)

  ARGUMENT

  Pricing for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Represents the variant's price, compare-at price, and whether the price is fixed or calculated using percentage-based adjustments. The [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType) distinguishes between prices set directly on the price list (fixed) and prices calculated using the price list's adjustment configuration (relative).

  Learn more about [building catalogs with different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

* [Product​Variant​Contextual​Pricing.quantityPriceBreaks(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityPriceBreaks.arguments.sortKey)

  ARGUMENT

  The price of a product variant in a specific country. Prices vary between countries.

***

## Map

### Arguments with this enum

* <-|[Price​List​Price.quantityPriceBreaks(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.quantityPriceBreaks.arguments.sortKey)
* <-|[Product​Variant​Contextual​Pricing.quantityPriceBreaks(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityPriceBreaks.arguments.sortKey)
