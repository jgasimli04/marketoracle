---
title: DiscountCodeFreeShippingInput - GraphQL Admin
description: >-
  The input fields for creating or updating a [free shipping
  discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping)
  that's applied on a cart and at checkout when a customer enters a code.


  When creating, required fields are:
    - `code`
    - `context` (or deprecated `customerSelection`)
    - `startsAt`
    - `title`
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput.md
---

# Discount​Code​Free​Shipping​Input

input\_object

The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

When creating, required fields are:

* `code`
* `context` (or deprecated `customerSelection`)
* `startsAt`
* `title`

## Fields

* applies​Once​Per​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether a customer can only use the discount once.

* applies​On​One​Time​Purchase

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the discount applies on one-time purchases. A one-time purchase is a transaction where you pay a single time for a product, without any ongoing commitments or recurring charges.

* applies​On​Subscription

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code that customers use to apply the discount.

* combines​With

  [Discount​Combines​With​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput)

  The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with the shipping discount.

* context

  [Discount​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput)

  The context defining which buyers can use the discount. You can target specific customer IDs, customer segments, or make the discount available to all buyers.

* destination

  [Discount​Shipping​Destination​Selection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountShippingDestinationSelectionInput)

  The shipping destinations where the free shipping discount can be applied. You can specify whether the discount applies to all countries, or specify individual countries.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

* maximum​Shipping​Price

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The maximum shipping price, in the shop's currency, that qualifies for free shipping.\
  \
  For example, if set to 20.00, then only shipping rates that cost $20.00 or less will be made free. To apply the discount to all shipping rates, specify `null`.

* minimum​Requirement

  [Discount​Minimum​Requirement​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumRequirementInput)

  The minimum subtotal or quantity of items that are required for the discount to be applied.

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts.\
  \
  For example, if set to `3`, then the discount only applies to the first three billing cycles of a subscription. If set to `0`, then the discount applies indefinitely.

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
