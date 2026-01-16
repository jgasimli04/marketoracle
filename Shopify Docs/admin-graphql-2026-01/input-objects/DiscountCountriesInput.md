---
title: DiscountCountriesInput - GraphQL Admin
description: >-
  The input fields for a list of countries to add or remove from the free
  shipping discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCountriesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCountriesInput.md
---

# Discount​Countries​Input

input\_object

The input fields for a list of countries to add or remove from the free shipping discount.

## Fields

* add

  [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country codes to add to the list of countries where the discount applies.

* include​Rest​Of​World

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the discount code is applicable to countries that haven't been defined in the shop's shipping zones.

* remove

  [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country codes to remove from the list of countries where the discount applies.

***

## Input objects using this input

* [Discount​Shipping​Destination​Selection​Input.countries](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountShippingDestinationSelectionInput#fields-countries)

  INPUT OBJECT

  The input fields for the destinations where the free shipping discount will be applied.

***

## Map

### Input objects using this input

* [Discount​Shipping​Destination​Selection​Input.countries](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountShippingDestinationSelectionInput#fields-countries)
