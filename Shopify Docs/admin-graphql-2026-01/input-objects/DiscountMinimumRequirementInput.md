---
title: DiscountMinimumRequirementInput - GraphQL Admin
description: The input fields for the minimum quantity or subtotal required for a discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumRequirementInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumRequirementInput.md
---

# Discount​Minimum​Requirement​Input

input\_object

The input fields for the minimum quantity or subtotal required for a discount.

## Fields

* quantity

  [Discount​Minimum​Quantity​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumQuantityInput)

  The minimum required quantity.

* subtotal

  [Discount​Minimum​Subtotal​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumSubtotalInput)

  The minimum required subtotal.

***

## Input objects using this input

* [Discount​Automatic​Basic​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-minimumRequirement)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  During creation the required fields are:

  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Automatic​Free​Shipping​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-minimumRequirement)

  INPUT OBJECT

  The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `startsAt`
  * `title`

* [Discount​Code​Basic​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-minimumRequirement)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Free​Shipping​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-minimumRequirement)

  INPUT OBJECT

  The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's applied on a cart and at checkout when a customer enters a code.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `startsAt`
  * `title`

***

## Map

### Input objects using this input

* [Discount​Automatic​Basic​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-minimumRequirement)
* [Discount​Automatic​Free​Shipping​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-minimumRequirement)
* [Discount​Code​Basic​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-minimumRequirement)
* [Discount​Code​Free​Shipping​Input.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-minimumRequirement)
