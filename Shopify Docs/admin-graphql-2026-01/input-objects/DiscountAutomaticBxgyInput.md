---
title: DiscountAutomaticBxgyInput - GraphQL Admin
description: >-
  The input fields for creating or updating a

  [buy X get Y discount
  (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)

  that's automatically applied on a cart and at checkout.


  When creating, required fields are:
    - `customerBuys`
    - `customerGets`
    - `startsAt`
    - `title`
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput.md
---

# Discount​Automatic​Bxgy​Input

input\_object

The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

When creating, required fields are:

* `customerBuys`
* `customerGets`
* `startsAt`
* `title`

## Fields

* combines​With

  [Discount​Combines​With​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput)

  The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

* context

  [Discount​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput)

  The context defining which buyers can use the discount. You can target specific customer IDs, customer segments, or make the discount available to all buyers. Discounts automatically apply on Point of Sale (POS) for Pro locations when the context is not set to ALL.

* customer​Buys

  [Discount​Customer​Buys​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysInput)

  The items eligible for the discount and the required quantity of each to receive the discount.

* customer​Gets

  [Discount​Customer​Gets​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput)

  The items in the order that qualify for the discount, their quantities, and the total value of the discount.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

* starts​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount becomes active and is available to customers.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The discount's name that displays to merchants in the Shopify admin and to customers.

* uses​Per​Order​Limit

  [Unsigned​Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  The maximum number of times that the discount can be applied to an order.

***

## Map

No referencing types
