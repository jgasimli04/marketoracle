---
title: PriceRuleAllocationMethod - GraphQL Admin
description: The method by which the price rule's value is allocated to its entitled items.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleAllocationMethod
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceRuleAllocationMethod.md
---

# Price​Rule​Allocation​Method

enum

The method by which the price rule's value is allocated to its entitled items.

## Valid values

* ACROSS

  The value will be applied once across the entitled items.

* EACH

  The value will be applied to each of the entitled items.

***

## Fields

* [Price​Rule.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.allocationMethod)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

***

## Map

### Fields with this enum

* <-|[Price​Rule.allocationMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.allocationMethod)
