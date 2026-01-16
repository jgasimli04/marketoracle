---
title: PriceListProductPriceInput - GraphQL Admin
description: The input fields representing the price for all variants of a product.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListProductPriceInput.md
---

# Price​List​Product​Price​Input

input\_object

The input fields representing the price for all variants of a product.

## Fields

* compare​At​Price

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  Specifies the compare-at price and currency to apply to the product's variants on the price list.

* price

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  Specifies the price and currency to apply to the product's variants on the price list.

* product​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  Specifies the ID of the product to update its variants for.

***

## Map

No referencing types
