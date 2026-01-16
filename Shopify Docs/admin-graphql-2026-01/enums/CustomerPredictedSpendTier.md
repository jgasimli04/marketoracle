---
title: CustomerPredictedSpendTier - GraphQL Admin
description: The valid tiers for the predicted spend of a customer with a shop.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPredictedSpendTier
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPredictedSpendTier.md
---

# Customer​Predicted​Spend​Tier

enum

The valid tiers for the predicted spend of a customer with a shop.

## Valid values

* HIGH

  The customer's spending is predicted to be in the top spending range for the shop in the following year.

* LOW

  The customer's spending is predicted to be zero, or in the lowest spending range for the shop in the following year.

* MEDIUM

  The customer's spending is predicted to be in the normal spending range for the shop in the following year.

***

## Fields

* [Customer​Statistics.predictedSpendTier](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics#field-CustomerStatistics.fields.predictedSpendTier)

  OBJECT

  A customer's computed statistics.

***

## Map

### Fields with this enum

* <-|[Customer​Statistics.predictedSpendTier](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics#field-CustomerStatistics.fields.predictedSpendTier)
