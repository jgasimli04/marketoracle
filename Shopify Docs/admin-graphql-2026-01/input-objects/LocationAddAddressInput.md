---
title: LocationAddAddressInput - GraphQL Admin
description: The input fields to use to specify the address while adding a location.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddAddressInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddAddressInput.md
---

# Location​Add​Address​Input

input\_object

The input fields to use to specify the address while adding a location.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the city, district, village, or town.

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The two-letter code of country for the address.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number of the location.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code for the region of the address, such as the state, province, or district. For example CA for California, United States.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ZIP code or postal code of the address.

***

## Input objects using this input

* [Location​Add​Input.address](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput#fields-address)

  INPUT OBJECT

  The input fields to use to add a location.

***

## Map

### Input objects using this input

* [Location​Add​Input.address](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/LocationAddInput#fields-address)
