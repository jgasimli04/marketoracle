---
title: DepositInput - GraphQL Admin
description: The input fields configuring the deposit for a B2B buyer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DepositInput'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DepositInput.md
---

# Deposit​Input

input\_object

The input fields configuring the deposit for a B2B buyer.

## Fields

* percentage

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The percentage of the order total that should be paid as a deposit. Must be between 1 and 99, inclusive.

***

## Input objects using this input

* [Buyer​Experience​Configuration​Input.deposit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput#fields-deposit)

  INPUT OBJECT

  The input fields specifying the behavior of checkout for a B2B buyer.

***

## Map

### Input objects using this input

* [Buyer​Experience​Configuration​Input.deposit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput#fields-deposit)
