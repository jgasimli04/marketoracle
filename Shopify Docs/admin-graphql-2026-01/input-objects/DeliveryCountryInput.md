---
title: DeliveryCountryInput - GraphQL Admin
description: The input fields to specify a country.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCountryInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCountryInput.md
---

# Delivery​Country​Input

input\_object

The input fields to specify a country.

## Fields

* code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country code of the country in the ISO 3166-1 alpha-2 format.

* include​All​Provinces

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Associate all available provinces with this country.

* provinces

  [\[Delivery​Province​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryProvinceInput)

  The regions associated with this country.

* rest​Of​World

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the country is a part of the 'Rest of World' shipping zone.

***

## Input objects using this input

* [Delivery​Location​Group​Zone​Input.countries](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput#fields-countries)

  INPUT OBJECT

  The input fields for a delivery zone associated to a location group and profile.

***

## Map

### Input objects using this input

* [Delivery​Location​Group​Zone​Input.countries](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryLocationGroupZoneInput#fields-countries)
