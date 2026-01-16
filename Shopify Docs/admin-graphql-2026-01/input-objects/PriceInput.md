---
title: PriceInput - GraphQL Admin
description: The input fields for updating the price of a parent product variant.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceInput.md
---

# Price​Input

input\_object

The input fields for updating the price of a parent product variant.

## Fields

* calculation

  [Price​Calculation​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceCalculationType)

  The specific type of calculation done to determine the price of the parent variant. The price is calculated during Bundle creation. Updating a component variant won't recalculate the price.

* price

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  The price of the parent product variant. This will be be used if calcualtion is set to 'FIXED'.

***

## Input objects using this input

* [Product​Variant​Relationship​Update​Input.priceInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput#fields-priceInput)

  INPUT OBJECT

  The input fields for updating a composite product variant.

***

## Map

### Input objects using this input

* [Product​Variant​Relationship​Update​Input.priceInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantRelationshipUpdateInput#fields-priceInput)
