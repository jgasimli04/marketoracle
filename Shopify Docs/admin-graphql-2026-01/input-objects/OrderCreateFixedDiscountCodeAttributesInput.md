---
title: OrderCreateFixedDiscountCodeAttributesInput - GraphQL Admin
description: The input fields for a fixed amount discount code to apply to an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFixedDiscountCodeAttributesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFixedDiscountCodeAttributesInput.md
---

# Order​Create​Fixed​Discount​Code​Attributes​Input

input\_object

The input fields for a fixed amount discount code to apply to an order.

## Fields

* amount​Set

  [Money​Bag​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput)

  The amount that's deducted from the order total. When you create an order, this value is the monetary amount to deduct.

* code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The discount code that was entered at checkout.

***

## Input objects using this input

* [Order​Create​Discount​Code​Input.itemFixedDiscountCode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput#fields-itemFixedDiscountCode)

  INPUT OBJECT

  The input fields for a discount code to apply to an order. Only one type of discount can be applied to an order.

***

## Map

### Input objects using this input

* [Order​Create​Discount​Code​Input.itemFixedDiscountCode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput#fields-itemFixedDiscountCode)
