---
title: DiscountContextInput - GraphQL Admin
description: The input fields for the buyers who can use this discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput.md
---

# Discount​Context​Input

input\_object

The input fields for the buyers who can use this discount.

## Fields

* all

  [Discount​Buyer​Selection](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountBuyerSelection)

  All buyers are eligible for this discount.

* customers

  [Discount​Customers​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomersInput)

  The list of customer IDs to add or remove from the list of customers.

* customer​Segments

  [Discount​Customer​Segments​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSegmentsInput)

  The list of customer segment IDs to add or remove from the list of customer segments.

***

## Input objects using this input

* [Discount​Automatic​App​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-context)

  INPUT OBJECT

  The input fields for creating or updating an automatic discount that's managed by an app.

  Use these input fields when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Discount​Automatic​Basic​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-context)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's automatically applied on a cart and at checkout.

  During creation the required fields are:

  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Automatic​Bxgy​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-context)

  INPUT OBJECT

  The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `customerBuys`
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Automatic​Free​Shipping​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-context)

  INPUT OBJECT

  The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `startsAt`
  * `title`

* [Discount​Code​App​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-context)

  INPUT OBJECT

  The input fields for creating or updating a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

  Use these input fields when you need advanced or custom discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Discount​Code​Basic​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-context)

  INPUT OBJECT

  The input fields for creating or updating an [amount off discount](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that's applied on a cart and at checkout when a customer enters a code. Amount off discounts can be a percentage off or a fixed amount off.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Bxgy​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-context)

  INPUT OBJECT

  The input fields for creating or updating a [buy X get Y discount (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that's applied on a cart and at checkout when a customer enters a code.

  When creating, required fields are:

  * `code`
  * `context` (or deprecated `customerSelection`)
  * `customerBuys`
  * `customerGets`
  * `startsAt`
  * `title`

* [Discount​Code​Free​Shipping​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-context)

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

* [Discount​Automatic​App​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-context)
* [Discount​Automatic​Basic​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-context)
* [Discount​Automatic​Bxgy​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-context)
* [Discount​Automatic​Free​Shipping​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-context)
* [Discount​Code​App​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-context)
* [Discount​Code​Basic​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-context)
* [Discount​Code​Bxgy​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-context)
* [Discount​Code​Free​Shipping​Input.context](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-context)
