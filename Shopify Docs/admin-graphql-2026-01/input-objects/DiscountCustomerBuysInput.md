---
title: DiscountCustomerBuysInput - GraphQL Admin
description: The input fields for prerequisite items and quantity for the discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysInput.md
---

# Discount​Customer​Buys​Input

input\_object

The input fields for prerequisite items and quantity for the discount.

## Fields

* is​One​Time​Purchase

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:true

  If the discount is applicable when a customer buys a one-time purchase.

* is​Subscription

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  If the discount is applicable when a customer buys a subscription purchase.

* items

  [Discount​Items​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountItemsInput)

  The IDs of items that the customer buys. The items can be either collections or products.

* value

  [Discount​Customer​Buys​Value​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysValueInput)

  The quantity of prerequisite items.

***

## Input objects using this input

* [Discount​Automatic​Bxgy​Input.customerBuys](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-customerBuys)

  INPUT OBJECT

  The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `customerBuys`
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Bxgy​Input.customerBuys](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-customerBuys)

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

* [Discount​Automatic​Bxgy​Input.customerBuys](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-customerBuys)
* [Discount​Code​Bxgy​Input.customerBuys](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-customerBuys)
