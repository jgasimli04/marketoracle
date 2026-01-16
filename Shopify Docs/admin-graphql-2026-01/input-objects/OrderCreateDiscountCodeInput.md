---
title: OrderCreateDiscountCodeInput - GraphQL Admin
description: >-
  The input fields for a discount code to apply to an order. Only one type of
  discount can be applied to an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateDiscountCodeInput.md
---

# Order​Create​Discount​Code​Input

input\_object

The input fields for a discount code to apply to an order. Only one type of discount can be applied to an order.

## Fields

* free​Shipping​Discount​Code

  [Order​Create​Free​Shipping​Discount​Code​Attributes​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFreeShippingDiscountCodeAttributesInput)

  A free shipping discount code applied to the shipping on an order.

* item​Fixed​Discount​Code

  [Order​Create​Fixed​Discount​Code​Attributes​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFixedDiscountCodeAttributesInput)

  A fixed amount discount code applied to the line items on the order.

* item​Percentage​Discount​Code

  [Order​Create​Percentage​Discount​Code​Attributes​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreatePercentageDiscountCodeAttributesInput)

  A percentage discount code applied to the line items on the order.

***

## Input objects using this input

* [Order​Create​Order​Input.discountCode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-discountCode)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Input objects using this input

* [Order​Create​Order​Input.discountCode](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-discountCode)
