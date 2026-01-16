---
title: DiscountCodeBxgyInput - GraphQL Admin
description: >-
  The input fields for creating or updating a

  [buy X get Y discount
  (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y)

  that's applied on a cart and at checkout when a customer enters a code.


  When creating, required fields are:
    - `code`
    - `context` (or deprecated `customerSelection`)
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
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput.md
---

# Discount​Code​Bxgy​Input

input\_object

The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

When creating, required fields are:

* `code`
* `context` (or deprecated `customerSelection`)
* `customerBuys`
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

* usage​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times that a customer can use the discount. For discounts with unlimited usage, specify `null`.

* uses​Per​Order​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times that the discount can be applied to an order.

* customer​Selection

  [Discount​Customer​Selection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSelectionInput)

  Deprecated

***

## Map

No referencing types
