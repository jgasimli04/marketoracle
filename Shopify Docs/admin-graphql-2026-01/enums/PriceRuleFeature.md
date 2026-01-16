---
title: PriceRuleFeature - GraphQL Admin
description: The list of features that can be supported by a price rule.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleFeature'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleFeature.md'
---

# Price​Rule​Feature

enum

The list of features that can be supported by a price rule.

## Valid values

* BULK

  The price rule supports bulk discounts.

* BUY\_​ONE\_​GET\_​ONE

  The price rule supports Buy X, Get Y (BXGY) discounts.

* BUY\_​ONE\_​GET\_​ONE\_​WITH\_​ALLOCATION\_​LIMIT

  The price rule supports Buy X, Get Y (BXGY) discounts that specify a custom allocation limit.

* QUANTITY\_​DISCOUNTS

  The price rule supports discounts that require a quantity.

* SPECIFIC\_​CUSTOMERS

  The price rule targets specific customers.

***

## Fields

* [Price​Rule.features](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.features)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

***

## Map

### Fields with this enum

* <-|[Price​Rule.features](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.features)
