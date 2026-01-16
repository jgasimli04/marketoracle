---
title: DiscountAutomaticFreeShippingInput - GraphQL Admin
description: >-
  The input fields for creating or updating a

  [free shipping
  discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping)

  that's automatically applied on a cart and at checkout.


  When creating, required fields are:

  - `startsAt`

  - `title`
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput.md
---

# Discount​Automatic​Free​Shipping​Input

input\_object

The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

When creating, required fields are:

* `startsAt`
* `title`

## Fields

* applies​On​One​Time​Purchase

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the discount applies on regular one-time-purchase items.

* applies​On​Subscription

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

* combines​With

  [Discount​Combines​With​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput)

  The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with the shipping discount.

* context

  [Discount​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput)

  The context defining which buyers can use the discount. You can target specific customer IDs, customer segments, or make the discount available to all buyers. Discounts automatically apply on Point of Sale (POS) for Pro locations when the context is not set to ALL.

* destination

  [Discount​Shipping​Destination​Selection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountShippingDestinationSelectionInput)

  A list of destinations where the discount will apply.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

* maximum​Shipping​Price

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The maximum shipping price that qualifies for the discount.

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
