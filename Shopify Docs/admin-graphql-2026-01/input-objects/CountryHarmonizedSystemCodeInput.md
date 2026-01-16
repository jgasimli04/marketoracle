---
title: CountryHarmonizedSystemCodeInput - GraphQL Admin
description: The input fields required to specify a harmonized system code.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CountryHarmonizedSystemCodeInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CountryHarmonizedSystemCodeInput.md
---

# Country​Harmonized​System​Code​Input

input\_object

The input fields required to specify a harmonized system code.

## Fields

* country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The ISO 3166-1 alpha-2 country code for the country that issued the specified harmonized system code. Represents global harmonized system code when set to null.

* harmonized​System​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Country specific harmonized system code.

***

## Input objects using this input

* [Inventory​Item​Input.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput#fields-countryHarmonizedSystemCodes)

  INPUT OBJECT

  The input fields for an inventory item.

***

## Map

### Input objects using this input

* [Inventory​Item​Input.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput#fields-countryHarmonizedSystemCodes)
