---
title: MarketConditionApplicationType - GraphQL Admin
description: The application level for a market condition.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType.md
---

# Market​Condition​Application​Type

enum

The application level for a market condition.

## Valid values

* ALL

  The condition matches all records of a given type.

* SPECIFIED

  The condition matches specified records of a given type.

***

## Fields

* [Company​Locations​Condition.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition#field-CompanyLocationsCondition.fields.applicationLevel)

  OBJECT

  A condition checking the company location a visitor is purchasing for.

* [Locations​Condition.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-LocationsCondition.fields.applicationLevel)

  OBJECT

  A condition checking the location that the visitor is shopping from.

* [Market​Conditions​Company​Locations​Input.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsCompanyLocationsInput#fields-applicationLevel)

  INPUT OBJECT

  The input fields required to create or update a company location market condition.

* [Market​Conditions​Locations​Input.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsLocationsInput#fields-applicationLevel)

  INPUT OBJECT

  The input fields required to create or update a location market condition.

* [Market​Conditions​Regions​Input.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsRegionsInput#fields-applicationLevel)

  INPUT OBJECT

  The input fields required to create or update a region market condition.

* [Regions​Condition.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition#field-RegionsCondition.fields.applicationLevel)

  OBJECT

  A condition checking the visitor's region.

***

## Map

### Fields with this enum

* <-|[Company​Locations​Condition.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition#field-CompanyLocationsCondition.fields.applicationLevel)
* <-|[Locations​Condition.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-LocationsCondition.fields.applicationLevel)
* <-|[Regions​Condition.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition#field-RegionsCondition.fields.applicationLevel)

### Inputs with this enum

* [Market​Conditions​Company​Locations​Input.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsCompanyLocationsInput#fields-applicationLevel)
* [Market​Conditions​Locations​Input.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsLocationsInput#fields-applicationLevel)
* [Market​Conditions​Regions​Input.applicationLevel](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsRegionsInput#fields-applicationLevel)
