---
title: DiscountCodeBasicInput - GraphQL Admin
description: >-
  The input fields for creating or updating an [amount off
  discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount)
  that's applied on a cart and at checkout when a customer enters a code. Amount
  off discounts can be a percentage off or a fixed amount off.


  When creating, required fields are:
    - `code`
    - `context` (or deprecated `customerSelection`)
    - `customerGets`
    - `startsAt`
    - `title`
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput.md
---

# Discount​Code​Basic​Input

input\_object

The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

When creating, required fields are:

* `code`
* `context` (or deprecated `customerSelection`)
* `customerGets`
* `startsAt`
* `title`

## Fields

* applies​Once​Per​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether a customer can only use the discount once.

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code that customers use to apply the discount.

* combines​With

  [Discount​Combines​With​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput)

  The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

* context

  [Discount​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput)

  The context defining which buyers can use the discount. You can target specific customer IDs, customer segments, or make the discount available to all buyers.

* customer​Gets

  [Discount​Customer​Gets​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput)

  The items in the order that qualify for the discount, their quantities, and the total value of the discount.

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

* usage​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times that a customer can use the discount. For discounts with unlimited usage, specify `null`.

* customer​Selection

  [Discount​Customer​Selection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSelectionInput)

  Deprecated

***

## Map

No referencing types
