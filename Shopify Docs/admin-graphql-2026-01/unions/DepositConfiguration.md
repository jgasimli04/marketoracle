---
title: DepositConfiguration - GraphQL Admin
description: Configuration of the deposit.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration.md
---

# Deposit​Configuration

union

Configuration of the deposit.

## Possible types

* [Deposit​Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/DepositPercentage)

  OBJECT

  A percentage deposit.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The percentage value of the deposit.

***

## Fields with this union

* [Buyer​Experience​Configuration.deposit](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration#field-BuyerExperienceConfiguration.fields.deposit)

  OBJECT

  Settings describing the behavior of checkout for a B2B buyer.

***

```graphql
union DepositConfiguration = DepositPercentage
```
