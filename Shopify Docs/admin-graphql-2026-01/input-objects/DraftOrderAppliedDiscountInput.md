---
title: DraftOrderAppliedDiscountInput - GraphQL Admin
description: The input fields for applying an order-level discount to a draft order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput.md
---

# Draft​Order​Applied​Discount​Input

input\_object

The input fields for applying an order-level discount to a draft order.

## Fields

* amount​With​Currency

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The applied amount of the discount in the specified currency.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Reason for the discount.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Title of the discount.

* value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The value of the discount. If the type of the discount is fixed amount, then this is a fixed amount in your shop currency. If the type is percentage, then this is the percentage.

* value​Type

  [Draft​Order​Applied​Discount​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderAppliedDiscountType)

  non-null

  The type of discount.

* amount

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  Deprecated

***

## Input objects using this input

* [Draft​Order​Available​Delivery​Options​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-appliedDiscount)

  INPUT OBJECT

  The input fields used to determine available delivery options for a draft order.

* [Draft​Order​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-appliedDiscount)

  INPUT OBJECT

  The input fields used to create or update a draft order.

* [Draft​Order​Line​Item​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-appliedDiscount)

  INPUT OBJECT

  The input fields for a line item included in a draft order.

***

## Map

### Input objects using this input

* [Draft​Order​Available​Delivery​Options​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAvailableDeliveryOptionsInput#fields-appliedDiscount)
* [Draft​Order​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-appliedDiscount)
* [Draft​Order​Line​Item​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-appliedDiscount)
