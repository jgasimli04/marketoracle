---
title: QuantityRuleOriginType - GraphQL Admin
description: The origin of quantity rule on a price list.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleOriginType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/QuantityRuleOriginType.md
---

# Quantity​Rule​Origin​Type

enum

The origin of quantity rule on a price list.

## Valid values

* FIXED

  Quantity rule is explicitly defined.

* RELATIVE

  Quantity rule falls back to the relative rule.

***

## Fields

* [Price​List.quantityRules(originType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.quantityRules.arguments.originType)

  ARGUMENT

  A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.

  Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.

  Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

* [Quantity​Rule.originType](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule#field-QuantityRule.fields.originType)

  OBJECT

  The quantity rule for the product variant in a given context.

***

## Map

### Fields with this enum

* <-|[Quantity​Rule.originType](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule#field-QuantityRule.fields.originType)

### Arguments with this enum

* <-|[Price​List.quantityRules(originType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.quantityRules.arguments.originType)
