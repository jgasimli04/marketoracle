---
title: DiscountCustomerBuysValueInput - GraphQL Admin
description: >-
  The input fields for prerequisite quantity or minimum purchase amount required
  for the discount.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysValueInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysValueInput.md
---

# Discount​Customer​Buys​Value​Input

input\_object

The input fields for prerequisite quantity or minimum purchase amount required for the discount.

## Fields

* amount

  [Decimal](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  The prerequisite minimum purchase amount required for the discount to be applicable.

* quantity

  [Unsigned​Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  The quantity of prerequisite items.

***

## Input objects using this input

* [Discount​Customer​Buys​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysInput#fields-value)

  INPUT OBJECT

  The input fields for prerequisite items and quantity for the discount.

***

## Map

### Input objects using this input

* [Discount​Customer​Buys​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysInput#fields-value)
