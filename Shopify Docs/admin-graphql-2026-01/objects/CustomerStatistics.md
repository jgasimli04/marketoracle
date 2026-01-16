---
title: CustomerStatistics - GraphQL Admin
description: A customer's computed statistics.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerStatistics.md
---

# Customer​Statistics

object

Requires `read_customers` access scope.

A customer's computed statistics.

## Fields

* predicted​Spend​Tier

  [Customer​Predicted​Spend​Tier](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerPredictedSpendTier)

  The predicted spend tier of a customer with a shop.

* rfm​Group

  [Customer​Rfm​Group](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerRfmGroup)

  The RFM (Recency, Frequency, Monetary) group of the customer.

***

## Map

### Fields with this object

* {}[Customer.statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.statistics)
