---
title: CompanyLocationsCondition - GraphQL Admin
description: A condition checking the company location a visitor is purchasing for.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition.md
---

# Company​Locations​Condition

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The API client must be installed on a Shopify Plus store.

A condition checking the company location a visitor is purchasing for.

## Fields

* application​Level

  [Market​Condition​Application​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketConditionApplicationType)

  The application level for the condition.

* company​Locations

  [Company​Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection)

  non-null

  The company locations that comprise the market.

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

* {}[MarketConditions.companyLocationsCondition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions#field-MarketConditions.fields.companyLocationsCondition)
