---
title: OrderCreatePercentageDiscountCodeAttributesInput - GraphQL Admin
description: The input fields for a percentage discount code to apply to an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreatePercentageDiscountCodeAttributesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreatePercentageDiscountCodeAttributesInput.md
---

# Order​Create​Percentage​Discount​Code​Attributes​Input

input\_object

The input fields for a percentage discount code to apply to an order.

## Fields

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The discount code that was entered at checkout.

* percentage

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The amount that's deducted from the order total. When you create an order, this value is the percentage to deduct.

***

## Input objects using this input

* [Order​Create​Discount​Code​Input.itemPercentageDiscountCode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput#fields-itemPercentageDiscountCode)

  INPUT OBJECT

  The input fields for a discount code to apply to an order. Only one type of discount can be applied to an order.

***

## Map

### Input objects using this input

* [Order​Create​Discount​Code​Input.itemPercentageDiscountCode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput#fields-itemPercentageDiscountCode)
