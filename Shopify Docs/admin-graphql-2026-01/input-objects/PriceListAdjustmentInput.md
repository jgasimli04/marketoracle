---
title: PriceListAdjustmentInput - GraphQL Admin
description: The input fields to set a price list adjustment.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListAdjustmentInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListAdjustmentInput.md
---

# Price​List​Adjustment​Input

input\_object

The input fields to set a price list adjustment.

## Fields

* type

  [Price​List​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListAdjustmentType)

  non-null

  The type of price adjustment, such as percentage increase or decrease.

* value

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The value of the price adjustment as specified by the `type`.

***

## Input objects using this input

* [Price​List​Parent​Create​Input.adjustment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListParentCreateInput#fields-adjustment)

  INPUT OBJECT

  The input fields to create a price list adjustment.

* [Price​List​Parent​Update​Input.adjustment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListParentUpdateInput#fields-adjustment)

  INPUT OBJECT

  The input fields used to update a price list's adjustment.

***

## Map

### Input objects using this input

* [Price​List​Parent​Create​Input.adjustment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListParentCreateInput#fields-adjustment)
* [Price​List​Parent​Update​Input.adjustment](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListParentUpdateInput#fields-adjustment)
