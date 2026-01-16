---
title: PriceCalculationType - GraphQL Admin
description: >-
  How to calculate the parent product variant's price while bulk updating
  variant relationships.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceCalculationType'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceCalculationType.md
---

# Price​Calculation​Type

enum

How to calculate the parent product variant's price while bulk updating variant relationships.

## Valid values

* COMPONENTS\_​SUM

  The price of the parent will be the sum of the components price times their quantity.

* FIXED

  The price of the parent will be set to the price provided.

* NONE

  The price of the parent will not be adjusted.

***

## Fields

* [Price​Input.calculation](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceInput#fields-calculation)

  INPUT OBJECT

  The input fields for updating the price of a parent product variant.

***

## Map

### Inputs with this enum

* [Price​Input.calculation](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceInput#fields-calculation)
