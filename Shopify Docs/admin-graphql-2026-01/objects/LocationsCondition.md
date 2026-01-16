---
title: LocationsCondition - GraphQL Admin
description: A condition checking the location that the visitor is shopping from.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition.md
---

# Locations​Condition

object

A condition checking the location that the visitor is shopping from.

## Fields

* application​Level

  [Market​Condition​Application​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType)

  The application level for the condition.

* locations

  [Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

  non-null

  The locations that comprise the market.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Map

### Fields with this object

* {}[MarketConditions.locationsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions#field-MarketConditions.fields.locationsCondition)
