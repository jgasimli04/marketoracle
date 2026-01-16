---
title: MarketConditionsRegionsInput - GraphQL Admin
description: The input fields required to create or update a region market condition.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsRegionsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsRegionsInput.md
---

# Market​Conditions​Regions​Input

input\_object

The input fields required to create or update a region market condition.

## Fields

* application​Level

  [Market​Condition​Application​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType)

  A type of market condition (e.g. ALL) to apply.

* region​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A list of market region IDs to include in the market condition.

* regions

  [\[Market​Conditions​Region​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsRegionInput)

  A list of market regions to include in the market condition.

***

## Input objects using this input

* [Market​Conditions​Input.regionsCondition](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsInput#fields-regionsCondition)

  INPUT OBJECT

  The input fields required to create or update the market conditions.

***

## Map

### Input objects using this input

* [Market​Conditions​Input.regionsCondition](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketConditionsInput#fields-regionsCondition)
