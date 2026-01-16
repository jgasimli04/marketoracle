---
title: PriceRuleValidityPeriod - GraphQL Admin
description: A time period during which a price rule is applicable.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleValidityPeriod
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleValidityPeriod.md
---

# Price​Rule​Validity​Period

object

Requires `read_price_rules` access scope.

A time period during which a price rule is applicable.

## Fields

* end

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time after which the price rule becomes invalid.

* start

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time after which the price rule is valid.

***

## Map

### Fields with this object

* {}[PriceRule.validityPeriod](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.validityPeriod)
