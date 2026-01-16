---
title: PriceRulePrerequisiteToEntitlementQuantityRatio - GraphQL Admin
description: >-
  Quantity of prerequisite items required for the price rule to be applicable,
  compared to quantity of entitled items.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRulePrerequisiteToEntitlementQuantityRatio
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRulePrerequisiteToEntitlementQuantityRatio.md
---

# Price​Rule​Prerequisite​To​Entitlement​Quantity​Ratio

object

Requires `read_price_rules` access scope.

Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items.

## Fields

* entitlement​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of entitled items in the ratio.

* prerequisite​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of prerequisite items in the ratio.

***

## Map

### Fields with this object

* {}[PriceRule.prerequisiteToEntitlementQuantityRatio](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.prerequisiteToEntitlementQuantityRatio)
