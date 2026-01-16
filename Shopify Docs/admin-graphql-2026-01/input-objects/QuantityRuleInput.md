---
title: QuantityRuleInput - GraphQL Admin
description: >-
  The input fields for the per-order quantity rule to be applied on the product
  variant.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityRuleInput.md
---

# Quantity​Rule​Input

input\_object

The input fields for the per-order quantity rule to be applied on the product variant.

## Fields

* increment

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity increment.

* maximum

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Default:null

  The maximum quantity.

* minimum

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The minimum quantity.

* variant​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  Product variant on which to apply the quantity rule.

***

## Input objects using this input

* [Quantity​Pricing​By​Variant​Update​Input.quantityRulesToAdd](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput#fields-quantityRulesToAdd)

  INPUT OBJECT

  The input fields used to update quantity pricing.

***

## Map

### Input objects using this input

* [Quantity​Pricing​By​Variant​Update​Input.quantityRulesToAdd](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput#fields-quantityRulesToAdd)
