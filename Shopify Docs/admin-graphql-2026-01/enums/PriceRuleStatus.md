---
title: PriceRuleStatus - GraphQL Admin
description: The status of the price rule.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleStatus.md'
---

# Price​Rule​Status

enum

The status of the price rule.

## Valid values

* ACTIVE

  The price rule is active.

* EXPIRED

  The price rule is expired.

* SCHEDULED

  The price rule is scheduled.

***

## Fields

* [Price​Rule.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.status)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

***

## Map

### Fields with this enum

* <-|[Price​Rule.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.status)
