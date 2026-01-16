---
title: DiscountCombinesWithInput - GraphQL Admin
description: >-
  The input fields to determine which discount classes the discount can combine
  with.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput.md
---

# Discount​Combines​With​Input

input\_object

The input fields to determine which discount classes the discount can combine with.

## Fields

* order​Discounts

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the discount combines with the [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* product​Discounts

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the discount combines with the [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* shipping​Discounts

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the discount combines with the [shipping discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

***

## Input objects using this input

* [Discount​Automatic​App​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-combinesWith)

  INPUT OBJECT

  The input fields for creating or updating an automatic discount that's managed by an app.

  Use these input fields when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Discount​Automatic​Basic​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-combinesWith)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  During creation the required fields are:

  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Automatic​Bxgy​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-combinesWith)

  INPUT OBJECT

  The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `customerBuys`
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Automatic​Free​Shipping​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-combinesWith)

  INPUT OBJECT

  The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `startsAt`
  * `title`

* [Discount​Code​App​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-combinesWith)

  INPUT OBJECT

  The input fields for creating or updating a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

  Use these input fields when you need advanced or custom discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Discount​Code​Basic​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-combinesWith)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Bxgy​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-combinesWith)

  INPUT OBJECT

  The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `customerBuys`
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Free​Shipping​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-combinesWith)

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

* [Discount​Automatic​App​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-combinesWith)
* [Discount​Automatic​Basic​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-combinesWith)
* [Discount​Automatic​Bxgy​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-combinesWith)
* [Discount​Automatic​Free​Shipping​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-combinesWith)
* [Discount​Code​App​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-combinesWith)
* [Discount​Code​Basic​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-combinesWith)
* [Discount​Code​Bxgy​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-combinesWith)
* [Discount​Code​Free​Shipping​Input.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-combinesWith)
