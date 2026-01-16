---
title: DiscountAutomaticBasicInput - GraphQL Admin
description: >-
  The input fields for creating or updating an

  [amount off
  discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)

  that's automatically applied on a cart and at checkout.


  During creation the required fields are:
    - `customerGets`
    - `startsAt`
    - `title`
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput.md
---

# Discount​Automatic​Basic​Input

input\_object

The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

During creation the required fields are:

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

* customer​Gets

  [Discount​Customer​Gets​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput)

  Information about the qualifying items and their discount.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

* minimum​Requirement

  [Discount​Minimum​Requirement​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumRequirementInput)

  The minimum subtotal or quantity of items that are required for the discount to be applied.

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

* starts​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount becomes active and is available to customers.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The discount's name that displays to merchants in the Shopify admin and to customers.

***

## Map

No referencing types
