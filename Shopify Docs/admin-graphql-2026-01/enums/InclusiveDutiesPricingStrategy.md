---
title: InclusiveDutiesPricingStrategy - GraphQL Admin
description: Answers the question if prices include duties and / or taxes.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InclusiveDutiesPricingStrategy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InclusiveDutiesPricingStrategy.md
---

# Inclusive​Duties​Pricing​Strategy

enum

Answers the question if prices include duties and / or taxes.

## Valid values

* ADD\_​DUTIES\_​AT\_​CHECKOUT

  Add duties at checkout when configured to collect.

* INCLUDE\_​DUTIES\_​IN\_​PRICE

  Include duties in price when configured to collect.

***

## Fields

* [Market​Price​Inclusions.inclusiveDutiesPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions#field-MarketPriceInclusions.fields.inclusiveDutiesPricingStrategy)

  OBJECT

  The inclusive pricing strategy for a market.

* [Market​Price​Inclusions​Input.dutiesPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketPriceInclusionsInput#fields-dutiesPricingStrategy)

  INPUT OBJECT

  The input fields used to create a price inclusion.

***

## Map

### Fields with this enum

* <-|[Market​Price​Inclusions.inclusiveDutiesPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketPriceInclusions#field-MarketPriceInclusions.fields.inclusiveDutiesPricingStrategy)

### Inputs with this enum

* [Market​Price​Inclusions​Input.dutiesPricingStrategy](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketPriceInclusionsInput#fields-dutiesPricingStrategy)
