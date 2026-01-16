---
title: MarketingBudget - GraphQL Admin
description: This type combines budget amount and its marketing budget type.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingBudget'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingBudget.md'
---

# Marketing​Budget

object

This type combines budget amount and its marketing budget type.

## Fields

* budget​Type

  [Marketing​Budget​Budget​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingBudgetBudgetType)

  non-null

  The budget type for a marketing activity.

* total

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of budget for marketing activity.

***

## Map

### Fields with this object

* {}[MarketingActivity.budget](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity#field-MarketingActivity.fields.budget)
