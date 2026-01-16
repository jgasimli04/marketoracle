---
title: DiscountAmountInput - GraphQL Admin
description: The input fields for the value of the discount and how it is applied.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAmountInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAmountInput.md
---

# Discount​Amount​Input

input\_object

The input fields for the value of the discount and how it is applied.

## Fields

* amount

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The value of the discount.

* applies​On​Each​Item

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items.

***

## Input objects using this input

* [Discount​Customer​Gets​Value​Input.discountAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsValueInput#fields-discountAmount)

  INPUT OBJECT

  The input fields for the quantity of items discounted and the discount value.

***

## Map

### Input objects using this input

* [Discount​Customer​Gets​Value​Input.discountAmount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsValueInput#fields-discountAmount)
