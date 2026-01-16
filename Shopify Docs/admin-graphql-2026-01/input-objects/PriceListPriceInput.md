---
title: PriceListPriceInput - GraphQL Admin
description: >-
  The input fields for providing the fields and values to use when creating or
  updating a fixed price list price.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListPriceInput.md
---

# Price​List​Price​Input

input\_object

The input fields for providing the fields and values to use when creating or updating a fixed price list price.

## Fields

* compare​At​Price

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The compare-at price of the product variant on this price list.

* price

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The price of the product variant on this price list.

* variant​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The product variant ID associated with the price list price.

***

## Input objects using this input

* [Quantity​Pricing​By​Variant​Update​Input.pricesToAdd](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput#fields-pricesToAdd)

  INPUT OBJECT

  The input fields used to update quantity pricing.

***

## Map

### Input objects using this input

* [Quantity​Pricing​By​Variant​Update​Input.pricesToAdd](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/QuantityPricingByVariantUpdateInput#fields-pricesToAdd)
