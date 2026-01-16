---
title: ObjectDimensionsInput - GraphQL Admin
description: The input fields for dimensions of an object.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ObjectDimensionsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ObjectDimensionsInput.md
---

# Object​Dimensions​Input

input\_object

The input fields for dimensions of an object.

## Fields

* height

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The height in `unit`s.

* length

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The length in `unit`s.

* unit

  [Length​Unit!](https://shopify.dev/docs/api/admin-graphql/latest/enums/LengthUnit)

  non-null

  Unit of measurement for `length`, `width`, and `height`.

* width

  [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  non-null

  The width in `unit`s.

***

## Input objects using this input

* [Custom​Shipping​Package​Input.dimensions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput#fields-dimensions)

  INPUT OBJECT

  The input fields for a custom shipping package used to pack shipment.

***

## Map

### Input objects using this input

* [Custom​Shipping​Package​Input.dimensions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput#fields-dimensions)
