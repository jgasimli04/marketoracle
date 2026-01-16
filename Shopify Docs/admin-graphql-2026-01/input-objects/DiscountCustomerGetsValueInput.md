---
title: DiscountCustomerGetsValueInput - GraphQL Admin
description: The input fields for the quantity of items discounted and the discount value.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsValueInput.md
---

# Discount​Customer​Gets​Value​Input

input\_object

The input fields for the quantity of items discounted and the discount value.

## Fields

* discount​Amount

  [Discount​Amount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAmountInput)

  The value of the discount.

  Note: BXGY doesn't support discountAmount.

* discount​On​Quantity

  [Discount​On​Quantity​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountOnQuantityInput)

  The quantity of the items that are discounted and the discount value.

* percentage

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The percentage value of the discount. Value must be between 0.00 - 1.00.

  Note: BXGY doesn't support percentage.

***

## Input objects using this input

* [Discount​Customer​Gets​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput#fields-value)

  INPUT OBJECT

  Specifies the items that will be discounted, the quantity of items that will be discounted, and the value of discount.

***

## Map

### Input objects using this input

* [Discount​Customer​Gets​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput#fields-value)
