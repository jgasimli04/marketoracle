---
title: InclusiveTaxPricingStrategy - GraphQL Admin
description: Answers the question if prices include duties and / or taxes.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InclusiveTaxPricingStrategy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InclusiveTaxPricingStrategy.md
---

# Inclusive​Tax​Pricing​Strategy

enum

Answers the question if prices include duties and / or taxes.

## Valid values

* ADD\_​TAXES\_​AT\_​CHECKOUT

  Add taxes at checkout when configured to collect.

* INCLUDES\_​TAXES\_​IN\_​PRICE

  Include taxes in price when configured to collect.

* INCLUDES\_​TAXES\_​IN\_​PRICE\_​BASED\_​ON\_​COUNTRY

  Include taxes in price based on country when configured to collect.

***

## Fields

* [Market​Price​Inclusions.inclusiveTaxPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions#field-MarketPriceInclusions.fields.inclusiveTaxPricingStrategy)

  OBJECT

  The inclusive pricing strategy for a market.

* [Market​Price​Inclusions​Input.taxPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketPriceInclusionsInput#fields-taxPricingStrategy)

  INPUT OBJECT

  The input fields used to create a price inclusion.

***

## Map

### Fields with this enum

* <-|[Market​Price​Inclusions.inclusiveTaxPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions#field-MarketPriceInclusions.fields.inclusiveTaxPricingStrategy)

### Inputs with this enum

* [Market​Price​Inclusions​Input.taxPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketPriceInclusionsInput#fields-taxPricingStrategy)
