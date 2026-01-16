---
title: DiscountShippingDestinationSelectionInput - GraphQL Admin
description: >-
  The input fields for the destinations where the free shipping discount will be
  applied.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountShippingDestinationSelectionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountShippingDestinationSelectionInput.md
---

# Discount​Shipping​Destination​Selection​Input

input\_object

The input fields for the destinations where the free shipping discount will be applied.

## Fields

* all

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the discount code applies to all countries.

* countries

  [Discount​Countries​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCountriesInput)

  A list of countries where the discount code will apply.

***

## Input objects using this input

* [Discount​Automatic​Free​Shipping​Input.destination](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-destination)

  INPUT OBJECT

  The input fields for creating or updating a [free shipping discount](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that's automatically applied on a cart and at checkout.

  When creating, required fields are:

  * `startsAt`
  * `title`

* [Discount​Code​Free​Shipping​Input.destination](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-destination)

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

* [Discount​Automatic​Free​Shipping​Input.destination](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-destination)
* [Discount​Code​Free​Shipping​Input.destination](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-destination)
