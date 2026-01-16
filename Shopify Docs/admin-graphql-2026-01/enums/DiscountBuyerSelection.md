---
title: DiscountBuyerSelection - GraphQL Admin
description: All buyers are eligible for the discount.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountBuyerSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountBuyerSelection.md
---

# Discount​Buyer​Selection

enum

All buyers are eligible for the discount.

## Valid values

* ALL

  All buyers are eligible for the discount.

***

## Fields

* [Discount​Buyer​Selection​All.all](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountBuyerSelectionAll#field-DiscountBuyerSelectionAll.fields.all)

  OBJECT

  Indicates that a discount applies to all buyers without restrictions, enabling universal promotions that reach every customer. This selection removes buyer-specific limitations from discount eligibility.

  For example, a flash sale or grand opening promotion would target all buyers to maximize participation and store visibility.

  Learn more about [discount targeting](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).

* [Discount​Context​Input.all](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput#fields-all)

  INPUT OBJECT

  The input fields for the buyers who can use this discount.

***

## Map

### Fields with this enum

* <-|[Discount​Buyer​Selection​All.all](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountBuyerSelectionAll#field-DiscountBuyerSelectionAll.fields.all)

### Inputs with this enum

* [Discount​Context​Input.all](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput#fields-all)
