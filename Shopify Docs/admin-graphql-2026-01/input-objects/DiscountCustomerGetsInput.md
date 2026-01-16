---
title: DiscountCustomerGetsInput - GraphQL Admin
description: >-
  Specifies the items that will be discounted, the quantity of items that will
  be discounted, and the value of discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsInput.md
---

# Discount​Customer​Gets​Input

input\_object

Specifies the items that will be discounted, the quantity of items that will be discounted, and the value of discount.

## Fields

* applies​On​One​Time​Purchase

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the discount applies on regular one-time-purchase items.

* applies​On​Subscription

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

* items

  [Discount​Items​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountItemsInput)

  The IDs of the items that the customer gets. The items can be either collections or products.

* value

  [Discount​Customer​Gets​Value​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsValueInput)

  The quantity of items discounted and the discount value.

***

## Input objects using this input

* [Discount​Automatic​Basic​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-customerGets)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  During creation the required fields are:

  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Automatic​Bxgy​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-customerGets)

  INPUT OBJECT

  The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `customerBuys`
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Basic​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-customerGets)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Bxgy​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-customerGets)

  INPUT OBJECT

  The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `customerBuys`
  * `customerGets`
  * `startsAt`
  * `title`

***

## Map

### Input objects using this input

* [Discount​Automatic​Basic​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-customerGets)
* [Discount​Automatic​Bxgy​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-customerGets)
* [Discount​Code​Basic​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-customerGets)
* [Discount​Code​Bxgy​Input.customerGets](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-customerGets)
