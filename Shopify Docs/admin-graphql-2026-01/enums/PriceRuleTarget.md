---
title: PriceRuleTarget - GraphQL Admin
description: >-
  The type of lines (line_item or shipping_line) to which the price rule
  applies.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTarget'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleTarget.md'
---

# Price​Rule​Target

enum

The type of lines (line\_item or shipping\_line) to which the price rule applies.

## Valid values

* LINE\_​ITEM

  The price rule applies to line items.

* SHIPPING\_​LINE

  The price rule applies to shipping lines.

***

## Fields

* [Price​Rule.target](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.target)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

***

## Map

### Fields with this enum

* <-|[Price​Rule.target](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.target)
