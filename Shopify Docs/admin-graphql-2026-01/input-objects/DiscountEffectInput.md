---
title: DiscountEffectInput - GraphQL Admin
description: >-
  The input fields for how the discount will be applied. Currently, only
  percentage off is supported.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountEffectInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountEffectInput.md
---

# Discount​Effect​Input

input\_object

The input fields for how the discount will be applied. Currently, only percentage off is supported.

## Fields

* amount

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The value of the discount.

* percentage

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The percentage value of the discount. Value must be between 0.00 - 1.00.

***

## Input objects using this input

* [Discount​On​Quantity​Input.effect](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountOnQuantityInput#fields-effect)

  INPUT OBJECT

  The input fields for the quantity of items discounted and the discount value.

***

## Map

### Input objects using this input

* [Discount​On​Quantity​Input.effect](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountOnQuantityInput#fields-effect)
