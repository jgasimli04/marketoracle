---
title: QuantityPriceBreakInput - GraphQL Admin
description: The input fields and values to use when creating quantity price breaks.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPriceBreakInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPriceBreakInput.md
---

# Quantity​Price​Break​Input

input\_object

The input fields and values to use when creating quantity price breaks.

## Fields

* minimum​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The minimum required quantity for a variant to qualify for this price.

* price

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The price of the product variant when its quantity meets the break's minimum quantity.

* variant​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The product variant ID associated with the quantity break.

***

## Input objects using this input

* [Quantity​Pricing​By​Variant​Update​Input.quantityPriceBreaksToAdd](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput#fields-quantityPriceBreaksToAdd)

  INPUT OBJECT

  The input fields used to update quantity pricing.

***

## Map

### Input objects using this input

* [Quantity​Pricing​By​Variant​Update​Input.quantityPriceBreaksToAdd](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput#fields-quantityPriceBreaksToAdd)
